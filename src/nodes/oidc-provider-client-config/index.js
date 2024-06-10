import { v4 as uuidv4 } from "uuid";
import srs from "secure-random-string";

export default function (RED) {
  function oidcProviderClientConfigNode(n) {
    RED.nodes.createNode(this, n);
    this.name = n.name;
    this.redirectUris = n.redirectUris || [];
    this.grantTypes = n.grantTypes?.split(",") || [];
    this.scopes = n.scopes?.split(",") || [];
    this.customScopes = n.customScopes || [];
    this.responseTypes = n.responseTypes?.split(",") || [];

    if (!n.clientId) {
      this.clientId = uuidv4();
      this.clientSecret = srs({ length: 64 });

      // Update the node with the generated clientId and clientSecret
      RED.nodes.addCredentials(this.id, {
        clientSecret: this.clientSecret,
      });

      // Save the node's new properties
      this.context().global.set(this.id, {
        clientId: this.clientId,
        clientSecret: this.clientSecret,
      });
    } else {
      this.clientId = n.clientId;
      this.clientSecret = this.credentials.clientSecret;
    }
  }
  RED.nodes.registerType(
    "OIDC Provider Client Config",
    oidcProviderClientConfigNode,
    {
      credentials: {
        clientSecret: { type: "password" },
      },
    },
  );

  RED.httpAdmin.get(
    "/oidc-provider-client-config/generate",
    function (req, res) {
      const clientId = uuidv4();
      const clientSecret = srs({ length: 32 });
      res.json({ clientId, clientSecret });
    },
  );
}
