const { Router } = require('express');
const { check, param } = require('express-validator');

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

const validateCreateUpdate = [
  check('title')
    .isLength({ min: 3, max: 30 })
    .withMessage('Title is required and must be of minimum 3 and maximum 30 characters!'),
  check('start', 'Start date is require').custom(isDate),
  check('end', 'End date is require').custom(isDate),
  validateFields
];

router.get('/', index);
router.get(
  '/:id',
  [
    param('id')
      .isLength({ min: 24, max: 24 })
      .withMessage('Param id is required and must be of 24 characters!'),
    validateFields
  ],
  show
);

router.post(
  '/',
  validateCreateUpdate,
  create
);

router.put(
 '/:id',
  [
    param('id')
      .isLength({ min: 24, max: 24 })
      .withMessage('Param id is required and must be of 24 characters!'),
    ...validateCreateUpdate
  ],
  update
);

router.delete(
  '/:id',
  [
    param('id')
      .isLength({ min: 24, max: 24 })
      .withMessage('Param id is required and must be of 24 characters!'),
    validateFields
  ],
  _delete
);

module.exports = router;

