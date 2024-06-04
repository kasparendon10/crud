const { getAll, createUser, getOne, remove, update } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/")
    .get(getAll)
    .post(createUser);

userRouter.route("/:id")
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = userRouter;