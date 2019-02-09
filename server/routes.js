module.exports = function(app) {
    // Auth
    app.use('/auth', require("./modules/auth"));
    app.use('/user', require("./modules/user"));
    app.use('/api/v1/task', require('./modules/task'));
    app.use('/api/v1/recover', require('./modules/recover'));
}