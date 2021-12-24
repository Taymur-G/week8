require("./db/connection");
const express = require("express");
const cors = require("cors");
const userRouter = require("./user/userRoutes");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use(userRouter);


// app.use("/home", express.static("public"));
// app.use("/login", express.static("public", { index: "login.html" }));
// app.use("/signup", express.static("public", { index: "signup.html" }));

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});