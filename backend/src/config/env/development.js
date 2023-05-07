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
  github: {
    clientId: "95ea793fc7d23df268d0",
    clientSecret: "c29573f22acad1c090992a42dd336c7df980d9e8",
    callbackURL: "http://localhost:3000/api/auth/github/callback",
  },
  appDomain: "http://localhost:4200",
};
