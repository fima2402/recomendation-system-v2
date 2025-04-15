import { Router } from 'express';
import fuzzyAHP from '../functions/fuzzy_ahp/index.js';
var router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const f = fuzzyAHP();
  res.send({fuzzyAHP: f});
});

export default router;
