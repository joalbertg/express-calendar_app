const { Router } = require('express');
const { check } = require('express-validator');

const {
  createUser,
  loginUser,
  revalidateToken
} = require('../controllers');
const validateFields = require('../middlewares/validate-fields');

/*
 * Auth routes
 * host + /api/auth
 */

const router = Router();

router.post(
  '/',
  [ // middlewares
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required and must have a minimum of 6 characters').isLength({ min: 6 }),
    validateFields
  ],
  loginUser
);

router.post(
  '/new',
  [ // middlewares
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required and must have a minimum of 6 characters').isLength({ min: 6 }),
    validateFields
  ],
  createUser
);

router.post('/renew', revalidateToken);

module.exports = router;

