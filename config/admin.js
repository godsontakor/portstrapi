module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4fbc3a046981798661ff227793960d1d'),
  },
});
