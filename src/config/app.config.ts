import DatabaseConfig from './database.config';
export default () => ({
  environment: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
  port: process.env.PORT,
  database: {
    ...DatabaseConfig(),
  },
});
