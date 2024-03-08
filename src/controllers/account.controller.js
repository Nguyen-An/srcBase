const AccountBL = require('../businesslayer/account.businesslayer')

let getLissAcountController = async (req, res) => {
    try {
        let account = await AccountBL.getLissAcountBL()

        return res.status(200).json(account);
    } catch (error) {
        return res.status(500).json('loi server');
    }
}

module.exports = {
    getLissAcountController
}