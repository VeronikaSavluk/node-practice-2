const router = require('express').Router();

const {getContacts, createContact, deleteContact} = require('../controllers/contacts');

router.get('/', getContacts);
router.post('/', createContact);
router.delete('/:contactId', deleteContact);

module.exports = router;
