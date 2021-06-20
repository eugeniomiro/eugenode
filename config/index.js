const config = {
  local: {
    mode: 'local',
    logging: 'dev',
    mongoDbUrl: 'mongodb://127.0.0.1:27017/eugenode',
    port: 3000
  },
  staging: {
    mode: 'staging',
    logging: 'combined',
    mongoDbUrl: 'mongodb://localhost:27017/eugenode',
    port: 4000
  },
  production: {
    mode: 'production',
    logging: 'common',
    mongoDbUrl: process.env.MONGO_CONNECTION
    // port should be set by environment vars
  }
}

module.exports = function (mode) {
  const argvSanitizer = () => {
    for (const c in config) {
      if (c.mode === process.argv[2]) { return c.mode }
    }
    return null
  }
  return config[mode || argvSanitizer() || process.env.NODE_ENV] || config.local
}
