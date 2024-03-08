const accountRoutes = require("./account.route")

module.exports = (app) => {
    app.use('/api', accountRoutes)
}