const { Router } = require('express');

/*
 * Auth routes
 * host + /api/auth
 */

const router = Router();

router.get('/', (req, res) => {
  res.json({
    ok: true
  });
});

module.exports = router;
