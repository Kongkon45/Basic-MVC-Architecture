const express = require("express");
const { getAllUser, createUser, getSingleUser } = require("../controller/usersController");
const router = express.Router();

router.get("/users", getAllUser);
router.get("/users/:id", getSingleUser)
router.post("/user", createUser)


module.exports = router;