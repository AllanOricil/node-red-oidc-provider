export default {
  category: "config",
  defaults: {
    name: { value: "" },
    clientId: { value: "" },
    redirectUris: { value: [], required: true },
    grantTypes: { value: "authorization_code", required: true },
    responseTypes: { value: "code", required: true },
    scopes: { value: "openid", required: true },
    customScopes: { value: [], required: false },
  },
  credentials: {
    clientSecret: { type: "password" },
  },
  label: function () {
    return this.name || "OIDC Provider Client Config";
  },
  oneditprepare: function () {
    var node = this;
    $.getJSON("oidc-provider-client-config/generate", function (data) {
      if (!node.clientId || node.clientId === "") {
        node.clientId = data.clientId;
        $("#node-config-input-clientId").val(node.clientId);
      }

      if (
        !node.credentials.clientSecret ||
        node.credentials.clientSecret === ""
      ) {
        node.credentials.clientSecret = data.clientSecret;
        $("#node-config-input-clientSecret").val(node.credentials.clientSecret);
      }
    });

    $("#node-config-show-clientSecret").click(function () {
      var clientSecretField = $("#node-config-input-clientSecret");
      var type =
        clientSecretField.attr("type") === "password" ? "text" : "password";
      clientSecretField.attr("type", type);
      $(this).text(type === "password" ? "Show" : "Hide");
    });

    $("#node-config-copy-clientSecret").click(function () {
      var clientSecretField = $("#node-config-input-clientSecret");
      clientSecretField.select();
      navigator.clipboard
        .writeText(clientSecretField.val())
        .catch(function (err) {
          console.error("Unable to copy text: ", err);
        });
    });

    $("#node-config-copy-clientId").click(function () {
      var clientIdField = $("#node-config-input-clientId");
      clientIdField.select();
      navigator.clipboard.writeText(clientIdField.val()).catch(function (err) {
        console.error("Unable to copy text: ", err);
      });
    });

    $("#node-config-input-grantTypes").typedInput({
      type: "grantTypes",
      types: [
        {
          value: "grantTypes",
          multiple: "true",
          options: [
            { value: "authorization_code", label: "Authorization code" },
            { value: "implicit", label: "Implicit" },
            { value: "password", label: "Password" },
            { value: "refresh_token", label: "Refresh Token" },
          ],
        },
      ],
    });

    $("#node-config-input-responseTypes").typedInput({
      type: "responseTypes",
      types: [
        {
          value: "responseTypes",
          multiple: "true",
          options: [
            { value: "code", label: "code" },
            { value: "id_token", label: "id_token" },
            { value: "token", label: "token" },
          ],
        },
      ],
    });

    $("#node-config-input-scopes").typedInput({
      type: "scopes",
      types: [
        {
          value: "scopes",
          multiple: "true",
          options: [
            { value: "openid", label: "openid" },
            { value: "email", label: "email" },
            { value: "phone", label: "phone" },
            { value: "profile", label: "profile" },
            { value: "address", label: "address" },
            { value: "offline_access", label: "offline_access" },
            { value: "roles", label: "roles" },
            { value: "user_info", label: "user_info" },
          ],
        },
      ],
    });

    initializeList("redirectUris", node.redirectUris);
    initializeList("customScopes", node.customScopes);

    function addItemToList(listType, value) {
      var inputId = `${listType}-input`;
      var newItemInput = $(
        `<input type="text" class="${inputId}" placeholder="Enter ${listType.replace(/([A-Z])/g, " $1")}" style="width: calc(100% - 65px); height: 35px;"/>`,
      );
      if (value) {
        newItemInput.val(value);
      }
      var deleteButton = $(
        `<button type="button" class="node-config-add-item-cancel ui-button" style="width: 60px; margin-left: 5px; padding: 5px; height: 35px;">Delete</button>`,
      );
      var inputContainer = $(
        `<div style="display: flex; align-items: center; margin-bottom: 5px;"></div>`,
      )
        .append(newItemInput)
        .append(deleteButton);
      var listElement = $(`#node-config-${listType}-list`);
      listElement.before(inputContainer);

      deleteButton.click(() => {
        inputContainer.remove();
        $(`#node-config-${listType}-add`).show();
      });
    }

    $(document).on("click", ".node-config-add-item", function () {
      var listType = $(this).data("list");
      addItemToList(listType);
    });

    function initializeList(listType, items) {
      resetList(listType, items);
    }

    function resetList(listType, items) {
      var listElement = $(`#node-config-${listType}-list`);
      listElement.empty();
      if (items && items.length > 0) {
        items.forEach((item) => {
          addItemToList(listType, item);
        });
      }
    }
  },
  oneditcancel: function () {
    $(document).off("click", ".node-config-add-item");
  },
  oneditsave: function () {
    var node = this;
    $(document).off("click", ".node-config-add-item");

    function readList(listType) {
      const listInputs = $(`.${listType}-input`);
      const values = [];
      listInputs.each(function () {
        var elementValue = $(this).val();
        values.push(elementValue);
      });
      return values;
    }

    node.redirectUris = readList("redirectUris");
    node.customScopes = readList("customScopes");
  },
};
