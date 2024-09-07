export default {
  category: "Authorization",
  color: "#8EBB8E",
  defaults: {
    route: { value: "/oidc" },
    config: { type: "oidc-provider-client-config" },
  },
  inputs: 0,
  outputs: 0,
  icon: "icon.svg",
  label: function () {
    return this.name || "OIDC Provider";
  },
};
