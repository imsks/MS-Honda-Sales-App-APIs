// This file will contain all the configuration for Development and Production

// Change to 'prod' to production
const envName = "dev";

// For Development
const dev = {
  PORT: 8080,
  FIREBASE_API_KEY: "",
  FIREBASE_AUTH_DOMAIN: "",
  FIREBASE_DATABASE_URL: "",
  FIREBASE_PROJECT_ID: "",
  FIREBASE_STORAGE_BUCKET: "",
  FIREBASE_MESSAGING_SENDER_ID: "",
  FIREBASE_APP_ID: "",
  FIREBASE_MEASUREMENT_ID: "",
};
// For Production
const prod = {
  PORT: "",
  FIREBASE_API_KEY: "",
  FIREBASE_AUTH_DOMAIN: "",
  FIREBASE_DATABASE_URL: "",
  FIREBASE_PROJECT_ID: "",
  FIREBASE_STORAGE_BUCKET: "",
  FIREBASE_MESSAGING_SENDER_ID: "",
  FIREBASE_APP_ID: "",
  FIREBASE_MEASUREMENT_ID: "",
};

const env = envName === "prod" ? prod : dev;
module.exports = env;
