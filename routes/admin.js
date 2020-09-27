const router = require("express-promise-router")();
const passport = require("passport");

const AdminController = require("../controllers/admin");
const passportSignIn = passport.authenticate("local", {
  session: false,
});

router
  .route("/login")
  .get(AdminController.adminLoginPage)
  .post(passportSignIn, AdminController.adminLoginAction);
router.route("/register").post(AdminController.adminRegister);

module.exports = router;
