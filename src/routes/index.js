const express = require('express');
const userRouter = require('./user.router');
const router = express.Router();

// Coloca las rutas aquí
router.use('/users', userRouter);

module.exports = router;