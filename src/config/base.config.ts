export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  domain: process.env.DOMAIN,
  db: {
    type: process.env.DB_TYPE || 'postgres',
    host: process.env.DB_HOST || process.env.QOVERY_DATABASE_FISIO_HOST,
    port:
      parseInt(process.env.DB_PORT, 10) ||
      parseInt(process.env.QOVERY_DATABASE_FISIO_PORT, 10),
    username: process.env.DB_USER || process.env.QOVERY_DATABASE_FISIO_USERNAME,
    password:
      process.env.DB_PASSWORD || process.env.QOVERY_DATABASE_FISIO_PASSWORD,
    name: process.env.DB_NAME || process.env.QOVERY_DATABASE_FISIO_DATABASE,
  },
});
