const User = require("../models/user");

module.exports = {
  registerUser: async (req, res, next) => {
    let { firstName, lastName, email, password, role } = req.body;

    // Ensure user email is not in user
    let userExists = await User.findOne({ email: email });
    if (userExists) {
      return res
        .status(403)
        .json({ status: "failed", message: "User already exists" });
    }
    let newUser = await User({ firstName, lastName, email, password, role });
    // Save New User
    await newUser.save();

    // Redirect user to sign in page
    if (newUser.role == "admin") {
      res.redirect("/admin/login");
    } else if (newUser.role == "doctor") {
      res.redirect("/doctor/login");
    } else {
      res.redirect("/admin/login");
    }
  },
  registerUserPage: async (req, res, next) => {
    res.render("register_user", {});
  },
  userDetails: async (req, res, next) => {
    let { userId } = req.params;
    let user_details = await User.findById({ _id: userId });
    if (!user_details) {
      let allUser = await User.find();
      res.render("dashboard", {
        user: "admin",
        users: allUser,
      });
    }
    res.render("user_details", {
      user: "admin",
      user_details,
    });
  },
};
