const express = require("express");
const router = express.Router();
var { validateToken } = require("../middleware/authentication");

const {
  addData,
  getData,
  updateData,
  deleteData,
} = require("../controllers/data");

router.post("/", validateToken, addData);

router.get("/", validateToken, getData);

router.put("/:id", validateToken, updateData);

router.delete("/:id", validateToken, deleteData);

module.exports = router;
