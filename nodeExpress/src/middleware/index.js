const bcrypt = require("bcrypt");
const User = require("../user/userModel");

exports.hashPassword = async (req, res, next) => {
    try {
        const password = await req.body.password;
        req.body.password = await bcrypt.hash(req.body.password, 8);
        await bcrypt.compare(password, req.body.password, (err, res) => {
            if (res == true) {
                console.log("Password hash matches");
            } else if (res == false) {
                console.log("Password hash doesn't match");
            } else {
                console.log(err);
            }
        });
        next();
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Unsuccessful, please try again." });
    }
};

exports.emailCheck = async (req, res, next) => {
    try {
        const email = await req.body.email;
        const format = /.+\@.+\..+/;
        result = format.test(email)
        if (result == true) {
            console.log('Emailed matched regex');
        } else if (result == false) {
            console.log("Emailed doesn't matched regex");
        } else {
            console.log("Don't look at me, I don't know how you got here.")
        }
        next();
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: "Awesome, you made it here, but I don't know how to send you back." })
    }
}