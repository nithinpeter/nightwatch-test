var env = require("./env");

module.exports = {

    getBaseUrl: () => {
        if(env.isDev()) return "http://localhost:3001/";
    },
}