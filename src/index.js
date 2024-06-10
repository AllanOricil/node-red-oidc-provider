import oidcProviderClientConfig from "@nodes/oidc-provider-client-config";
import oidcProvider from "@nodes/oidc-provider";

export default function (RED) {
  oidcProviderClientConfig(RED);
  oidcProvider(RED);
}
