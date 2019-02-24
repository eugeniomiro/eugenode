var config = {
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
        mongoDbUrl: 'mongodb://localhost:27017/eugenode'
        // port should be set by environment vars
    }
};

module.exports = function(mode) {
    return config[mode || process.argv[2]] || config.local;
}