import { Node } from "@allanoricil/nrg-nodes";
import { v4 as uuidv4 } from "uuid";
import srs from "secure-random-string";

export default class OidcProivderClientConfig extends Node {
  constructor(config) {
    super(config);
    this.name = config.name;
    this.redirectUris = config.redirectUris || [];
    this.grantTypes = config.grantTypes?.split(",") || [];
    this.scopes = config.scopes?.split(",") || [];
    this.customScopes = config.customScopes || [];
    this.responseTypes = config.responseTypes?.split(",") || [];

    if (!config.clientId) {
      this.clientId = uuidv4();
      this.clientSecret = srs({ length: 64 });

      // Update the node with the generated clientId and clientSecret
      OidcProivderClientConfig.RED.nodes.addCredentials(this.id, {
        clientSecret: this.clientSecret,
      });

      // Save the node's new properties
      this.context().global.set(this.id, {
        clientId: this.clientId,
        clientSecret: this.clientSecret,
      });
    } else {
      this.clientId = config.clientId;
      this.clientSecret = this.credentials.clientSecret;
    }
  }

  static init() {
    this.RED.httpAdmin.get(
      "/oidc-provider-client-config/generate",
      function (req, res) {
        const clientId = uuidv4();
        const clientSecret = srs({ length: 32 });
        res.json({ clientId, clientSecret });
      },
    );
  }

  static credentials() {
    return {
      clientSecret: { type: "password" },
    };
  }
}
