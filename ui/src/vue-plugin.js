import Login from "./components/Login";

const version = __UI_VERSION__;

function install(app) {
  app.component(Login.name, Login);
}

export { version, Login, install };
