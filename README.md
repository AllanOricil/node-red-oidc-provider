<p>
<a href="https://github.com/AllanOricil/nrg-cli" style="margin-right: 10px;"><img src="https://img.shields.io/badge/built%20with-nrg-A80000.svg?labelColor=black&style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9Im91dGxpbmVHcmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiAjODA4MDgwOyBzdG9wLW9wYWNpdHk6IDEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6ICM0MDQwNDA7IHN0b3Atb3BhY2l0eTogMSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImhleGFnb25HcmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiAjQTgwMDAwOyBzdG9wLW9wYWNpdHk6IDEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6ICM0QjAwMDA7IHN0b3Atb3BhY2l0eTogMSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpZ2h0bmluZ0dyYWRpZW50IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6ICNmZmZmZmY7IHN0b3Atb3BhY2l0eTogMSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjogI2UwZTBlMDsgc3RvcC1vcGFjaXR5OiAxIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHBvbHlnb24gcG9pbnRzPSI1MCwyIDk4LDI1IDk4LDc1IDUwLDk4IDMsNzUgMywyNSIgCiAgICAgICAgICAgc3Ryb2tlPSJ1cmwoI291dGxpbmVHcmFkaWVudCkiIHN0cm9rZS13aWR0aD0iNCIgZmlsbD0idXJsKCNoZXhhZ29uR3JhZGllbnQpIiAvPgoKICA8cGF0aCBkPSJNMzMgMGwxOS43OTcyIDM5LjQ1NzQtMjguNTAyMi0xMS4xMTg0TDc0IDk4IDUxLjA2MDggNDkuMzA1NCA3MSA1NloiIAogICAgICAgIGZpbGw9InVybCgjbGlnaHRuaW5nR3JhZGllbnQpIiBzdHJva2U9Im5vbmUiIC8+Cjwvc3ZnPgo="/></a>
<a href="https://github.com/AllanOricil/node-red-oidc-provider/actions/workflows/ci.yaml"><img src="https://github.com/AllanOricil/node-red-oidc-provider/actions/workflows/ci.yaml/badge.svg?branch=main" alt="build status"/></a>
</p>

# node-red-oidc-provider

With this node, you can easily set up an [OIDC (OpenID Connect) Authentication Server](https://openid.net/specs/openid-connect-core-1_0-errata2.html) in Node-Red.

<img src="./images/oidc-server-sample-flow-1.png" alt="custom-nodes" width="600" >

### Palette view

<img src="./images/oidc-provider-node.png" alt="custom-nodes" width="200" >

### /.well-known/openid-configuration response

<img src="./images/oidc-server-demo-1.png" alt="custom-nodes" width="1200" >

## 💻 Dev Environment Requirements

| Tool | Version |
| ---- | ------- |
| node | >= 18   |
| npm  | >= 10   |

## 📖 How to test your node

1. open a terminal in the root of this project
2. run `npm install`
3. run `npm run start` and wait for your browser to open
4. verify that 4 nodes are available in the pallete, in the "custom nodes" group.

## 📖 Other commands

All the following commands are set in the `scripts` section of `package.json` and were created using the `nrg` CLI.

### `npm run build`

Builds the project for production.

### `npm run build:dev`

Builds the project for development.

### `npm run start`

Starts Node-RED with nodes built for development.

### `npm run start:prod`

Starts Node-RED with nodes built for production.

### `npm run start:debug`

Starts Node-RED with nodes built for development and enables debug mode, allowing you to attach a debugger to the server side.

### `npm run watch`

Starts Node-RED with nodes built for development and enables watch mode. This will automatically rebuild your nodes, restart the flows, and refresh/open the browser whenever changes are made to files in ./src.

### `npm run watch:debug`

Starts Node-RED with nodes built for development in both watch and debug modes. This setup allows you to automatically rebuild, restart, and debug the server side with the ability to attach a debugger.
