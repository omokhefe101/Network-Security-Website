const express = require('express');
const { requireAuth } = require('../middleware/authMiddleware');
const authController = require('../controllers/auth');

const router = express.Router();


router.get("/", (req, res)  => {
    res.render("home")
});

router.get("/books", requireAuth, (req, res)  => {
   res.render("books")
});

router.get("/register", (req, res)  => {
   res.render("register")
});

router.get("/login", (req, res)  => {
   res.render("login")
});

router.get('/logout', authController.logout);

module.exports = router;