const db = require('../config/connect')

const Account = (account) => {

}

Account.account_getlist = async () => {
    return new Promise((resolve, reject) => { 
        db.query("select * from Account;", (err, result) => {
            if (err) reject(null)
            resolve(result)
        })
    })
}

module.exports = Account