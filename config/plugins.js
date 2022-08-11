module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "@strapi-community/strapi-provider-upload-google-cloud-storage",
      providerOptions: {
        bucketName: "barbora-photo",
        publicFiles: true,
        uniform: false,
        gzip: true,
        serviceAccount: {
          type: "service_account",
          project_id: process.env.GCS_PROJECT_ID,
          private_key_id: process.env.GCS_PRIVATE_KEY_ID,
          private_key: process.env.GCS_PRIVATE_KEY.replace(/\\n/g, "\n"),
          client_email: process.env.GCS_MAIL,
          client_id: process.env.GCS_CLIENT_ID,
          auth_uri: "https://accounts.google.com/o/oauth2/auth",
          token_uri: "https://oauth2.googleapis.com/token",
          auth_provider_x509_cert_url:
            "https://www.googleapis.com/oauth2/v1/certs",
          client_x509_cert_url:
            "https://www.googleapis.com/robot/v1/metadata/x509/photos-owner%40photo-storage-358419.iam.gserviceaccount.com",
        },
        baseUrl: "https://storage.googleapis.com/barbora-photo",
        basePath: "image",
      },
    },
  },
});
