export const devConfig = {
  port: 3000,
  database: "invoice-builder",
  secret: "123456",
  google: {
    clientId:
      "601715176426-qg1mga7jjhopl261jsdaftp4acai4d0u.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/api/auth/google/callback",
  },
  appDomain: "http://localhost:4200",
};
