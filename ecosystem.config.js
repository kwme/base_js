require("dotenv").config();
module.exports = {
    apps: [{
        name: 'Webname',
        exec_mode: (process.env.web_cluster > 1) ? 'cluster' : 'fork', //cluster or fork
        instances: (process.env.web_cluster) ? process.env.web_cluster : 1, // Or a numbder of instances
        script: 'index.js',
        args: '',
        log_date_format: 'YYYY-MM-DD HH:mm:ss',
        env: {
            NODE_ENV: "production",
            PORT: 3000
        }
    }]
}