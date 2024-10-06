import { Node } from "@allanoricil/nrg-nodes";
import Provider from "oidc-provider";

export default class OidcProvider extends Node {
  constructor(config) {
    super(config);
    this.route = config.route;
    this.issuer = `${OidcProvider.RED.settings.https ? "https" : "http"}://${OidcProvider.RED.httpNode.get("host") || "localhost"}:${OidcProvider.RED.httpNode.get("port") || "1880"}`;
    this.oidcConfig = OidcProvider.RED.nodes.getNode(config.config);

    if (this.oidcConfig) {
      this.clientId = this.oidcConfig.clientId;
      this.clientSecret = this.oidcConfig.credentials.clientSecret;
      this.redirectUris = this.oidcConfig.redirectUris;
      this.grantTypes = this.oidcConfig.grantTypes;
      this.scopes = [
        ...this.oidcConfig.scopes,
        ...this.oidcConfig.customScopes,
      ];
      this.responseTypes = this.oidcConfig.responseTypes;
    }

    const oidcProviderConfig = {
      clients: [
        {
          client_id: this.clientId,
          client_secret: this.clientSecret,
          redirect_uris: this.redirectUris,
          grant_types: this.grantTypes,
          scopes: this.scopes,
          response_types: this.responseTypes,
        },
      ],
      features: {
        devInteractions: { enabled: true },
      },
      formats: {
        AccessToken: "jwt",
      },
      allow_http_for_redirect_uris: true,
      pkce: {
        required: false,
      },
      token_endpoint_auth_method: "none",
    };

    const oidcProvider = new Provider(this.issuer, oidcProviderConfig);
    OidcProvider.RED.httpNode.use(this.route, oidcProvider.callback());
  }
}
