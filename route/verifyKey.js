function verifyKey(req, res, next) {
    if(process.env.API_KEY !== req.query.key){
        res.verified = {message: "You are not authorized for this action", success: false}
    }
    else {
        res.verified = {success: true}
    }
    next()
}

module.exports = verifyKey