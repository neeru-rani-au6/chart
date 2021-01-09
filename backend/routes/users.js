var express = require("express");
var router = express.Router();

var { userRegister, userLogin, userLogout } = require("../controllers/user");
/* GET users listing. */

router.post("/register", userRegister);
router.post("/login", userLogin);
router.delete("/logout", userLogout);
module.exports = router;
