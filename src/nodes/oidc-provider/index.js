import Provider from "oidc-provider";

export default function (RED) {
  function oidcProvider(config) {
    RED.nodes.createNode(this, config);

    this.route = config.route;
    this.issuer = `${RED.settings.https ? "https" : "http"}://${RED.httpNode.get("host") || "localhost"}:${RED.httpNode.get("port") || "1880"}`;
    console.log(this.issuer);
    this.oidcConfig = RED.nodes.getNode(config.config);
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
    RED.httpNode.use(this.route, oidcProvider.callback());
  }

  RED.nodes.registerType("OIDC Provider", oidcProvider);
}
