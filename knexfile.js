module.exports = {
  development: {
      client: 'pg',
      connection: 'postgres://localhost/g95_class_info'
  },
  production: {
      client: 'pg',
      connection: process.env.DATABASE_URL
  }
}
