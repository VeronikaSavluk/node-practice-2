const router = require('express').Router();

const {getContacts, createContact, deleteContact, updateContact} = require('../controllers/contacts');

router.get('/', getContacts);
router.post('/', createContact);
router.delete('/:contactId', deleteContact);
router.put('/:contactId', updateContact)

module.exports = router;
