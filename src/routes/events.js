const { Router } = require('express');

const validateJWT = require('../middlewares/validate-jwt');
const { Event } = require('../controllers');

/*
 * Event routes
 * host + /api/events
 */

const router = Router();
const { index, show, create, update, _delete } = Event;

// for all routes
router.use(validateJWT);

//router.get('/', validateJWT, index);
//router.get('/:id', validateJWT, show);
//router.post('/', validateJWT, create);
//router.put('/:id', validateJWT, update);
//router.delete('/:id', validateJWT, _delete);

router.get('/', index);
router.get('/:id', show);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

