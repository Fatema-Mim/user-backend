const express = require("express");
const router = express.Router();

const usersController = require("../../controllers/users.controllers")


router.route("/")
.get(usersController.getAllUsers)
.post(usersController.saveUser)

router.route("/:id")
.get(usersController.getUserDetails)
.patch(usersController.userUpdate)
.delete(usersController.deleteUser)

module.exports = router