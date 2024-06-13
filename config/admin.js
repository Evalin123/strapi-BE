module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "D+sd82YEhLX1EgooV9jhqg=="),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "apiTokenSalt"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT", "anotherRandomLongString"),
    },
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
});
