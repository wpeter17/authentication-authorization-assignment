const User = require("../models/user");

module.exports = {
  adminLoginPage: async (req, res, next) => {
    res.render("user", {
      user: "Admin",
      welcomeMsg: "Welcome to King Faisal Hospital Management System",
    });
  },
  adminLoginAction: async (req, res, next) => {
    let user = req.user;
    let allUser = await User.find();
    res.render("dashboard", {
      user: user.role,
      users: allUser,
      currentUser: user,
    });
  },
  adminRegister: async (req, res, next) => {
    let { email, password } = req.body;
    res.render("user", {
      user: "Admin",
      welcomeMsg: "Welcome to King Faisal Hospital Management System",
    });
  },
};
