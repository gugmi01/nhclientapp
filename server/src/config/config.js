module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'nhapp',
    user: process.env.DB_USER || 'nhapp',
    password: process.env.DB_PASS || 'nhapp',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './nhapp.sqlite'
    }
  }
}
