module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "258368844",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "<YOUR_FIREBASE_API_KEY>",
          authDomain: "<YOUR_FIREBASE_AUTH_DOMAIN>",
          databaseURL: "<YOUR_FIREBASE_DATABASE_URL>",
          projectId: "<YOUR_FIREBASE_PROJECT_ID>",
          storageBucket: "<YOUR_FIREBASE_STORAGE_BUCKET>",
          messagingSenderId: "<YOUR_FIREBASE_MESSAGING_SENDER_ID>",
          appId: "<YOUR_FIREBASE_APP_ID>"
        }
    }
  ],
};
