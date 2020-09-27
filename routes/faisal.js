const router = require("express-promise-router")();
const FaisalController = require("../controllers/faisal");

router.route("/").get(FaisalController.homePage);

module.exports = router;
