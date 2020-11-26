// This file will contain all the configuration for Development and Production

// Change to 'prod' to production
const envName = "dev";

// For Development
const dev = {
  PORT: 8000,
  FIREBASE_API_KEY: "AIzaSyD6CHcHCmaUU1vTqxp9GPey08zkqVMxe4k",
  FIREBASE_AUTH_DOMAIN: "mshondasalesapp.firebaseapp.com",
  FIREBASE_DATABASE_URL: "https://mshondasalesapp.firebaseio.com",
  FIREBASE_PROJECT_ID: "mshondasalesapp",
  FIREBASE_STORAGE_BUCKET: "mshondasalesapp.appspot.com",
  FIREBASE_MESSAGING_SENDER_ID: "439950269163",
  FIREBASE_APP_ID: "1:439950269163:web:a79ad2f307ea82308c3cae",
};
// For Production
const prod = {
  PORT: 8000,
  FIREBASE_API_KEY: "AIzaSyD6CHcHCmaUU1vTqxp9GPey08zkqVMxe4k",
  FIREBASE_AUTH_DOMAIN: "mshondasalesapp.firebaseapp.com",
  FIREBASE_DATABASE_URL: "https://mshondasalesapp.firebaseio.com",
  FIREBASE_PROJECT_ID: "mshondasalesapp",
  FIREBASE_STORAGE_BUCKET: "mshondasalesapp.appspot.com",
  FIREBASE_MESSAGING_SENDER_ID: "439950269163",
  FIREBASE_APP_ID: "1:439950269163:web:a79ad2f307ea82308c3cae",
};

const env = envName === "prod" ? prod : dev;
module.exports = env;
