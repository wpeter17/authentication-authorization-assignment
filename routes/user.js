const router = require("express-promise-router")();
const passport = require("passport");

const UsersController = require("../controllers/user");
const passportSignIn = passport.authenticate("local", {
  session: false,
});

router.route("/register").post(UsersController.registerUser);
router.route("/register").get(UsersController.registerUserPage);
router.route("/:userId").get(UsersController.userDetails);

module.exports = router;
