var config = {
    local: {
        mode: 'local',
        logging: 'dev'
    },
    staging: {
        mode: 'staging',
        logging: 'combined'
    },
    production: {
        mode: 'production',
        logging: 'common'
    }
};

module.exports = function(mode) {
    return config[mode || process.argv[2]] || config.local;
}