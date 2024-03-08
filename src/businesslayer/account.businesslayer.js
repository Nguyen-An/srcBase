const AccountObj = require('../models/account.models')

let getLissAcountBL = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let accountObj = await AccountObj.account_getlist()
            resolve(accountObj)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    getLissAcountBL
}