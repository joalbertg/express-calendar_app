const { Router } = require('express');
const { check } = require('express-validator');

const validateJWT = require('../middlewares/validate-jwt');
const validateFields = require('../middlewares/validate-fields');
const { Event } = require('../controllers');
const { isDate } = require('../helpers/isDate');

/*
 * Event routes
 * host + /api/events
 */

const router = Router();
const { index, show, create, update, _delete } = Event;

// others routes without validateJWT

// for all next routes
router.use(validateJWT);

//router.get('/', validateJWT, index);
//router.get('/:id', validateJWT, show);
//router.post('/', validateJWT, create);
//router.put('/:id', validateJWT, update);
//router.delete('/:id', validateJWT, _delete);

router.get('/', index);
router.get('/:id', show);

router.post(
  '/',
  [
    check('title', 'Title is required and must have a minimum length of 3 characters').isLength({ min: 3, max: 30 }),
    check('start', 'Start date is require').custom(isDate),
    check('end', 'End date is require').custom(isDate),
    validateFields
  ],
  create
);

router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

