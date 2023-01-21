const router = require('express').Router();

const {signup, login, logout, currentUser} = require('../controllers/auth');

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.get('/current', currentUser)

module.exports = router;
