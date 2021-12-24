const User = require("./userModel");
const userRouter = require("./userRoutes");

exports.addUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).send({ message: "Successfully added user", newUser });
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Unsuccessful, please try again" });
    }
};

exports.listUsers = async (req, res) => {
    try {
        console.log(await User.find({}));
        res.status(200).send({ message: `Users:\n ${await User.find({})}` });
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Unexpected error occured." });
    }
};

exports.updateUser = async (req, res) => {
    try {
        let pointer = { _id: req.body._id };
        let data = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }
        console.log(pointer);

        User.updateOne(pointer, data, function (err) {
            if (err) {
                res.status(500).send(err);
            } else if (pointer._id != req.body._id) {
                res.status(404).send("ID not found");
            } else {
                console.log(pointer);
                res.status(200).send(`Successfully updated all fields for "${pointer.username}"`);
            }
        })
    } catch (err) {
        console.log(err);
    }
};

exports.updateUserNormal = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.body._id, req.body);
        updateUser = await User.findById(req.body._id);
        res.status(200).send({ message: 'Successfully updated user', updateUser });
    } catch (err) {
        console.log(err);
    }
};

exports.deleteUser = async (req, res) => {
    try {
        let username = await req.body.username;
        User.deleteOne({
            _username: username
        }, function (err) {
            if (err) {
                res.status(500).send(err);
            } else if (username != req.body.username) {
                res.status(404).send(`${user} not found.`)
            } else {
                res.status(200).send(`Success! ${username} has been Deleted.`);
            }
        });
    } catch (err) {
        console.log(err);
    }
};