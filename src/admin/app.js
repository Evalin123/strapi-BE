import favicon from "./extensions/favicon.svg";
const config = {
  locales: ["en"],
  auth: {
    logo: favicon,
  },
  head: {
    favicon: favicon,
  },
  menu: {
    logo: favicon,
  },
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "GMT Dashboard",
      "Auth.form.welcome.title": "Welcome Strapi Demo",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
