module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '631d4a7b23e51623595db4b8e2e55fb0'),
  },
});
