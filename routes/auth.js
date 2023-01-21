const router = require('express').Router();
const auth = require('../middleware/auth');

const {signup, login, logout, currentUser} = require('../controllers/auth');

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', auth, logout);
router.get('/current', auth, currentUser);

module.exports = router;
