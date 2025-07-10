


// Admin Authentication

const isAdminUserValid = (req, res, next) => {
    if (req.userInfo.role !== 'admin') {
        return res.status(404).json({
            sucess: false,
            message:"Access Denied , Admin Rights Only"
        })
    }

    // calling next
    next();

};

module.exports = isAdminUserValid;