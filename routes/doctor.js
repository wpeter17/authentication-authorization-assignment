const router = require("express-promise-router")();
const passport = require("passport");

const DoctorsController = require("../controllers/doctor");
const passportSignIn = passport.authenticate("local", {
  session: false,
});

router
  .route("/login")
  .get(DoctorsController.doctorLoginPage)
  .post(passportSignIn, DoctorsController.doctorLoginAction);
router.route("/register").post(DoctorsController.doctorRegister);

module.exports = router;
