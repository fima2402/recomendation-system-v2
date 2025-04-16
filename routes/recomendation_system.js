import { Router } from 'express';
import fuzzyAHP from '../functions/fuzzy_ahp/index.js';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { body, validationResult } from 'express-validator';
var router = Router();

const schema = [
  body('address')
      .notEmpty().withMessage("address is required!"),
  body('sub_address')
      .notEmpty().withMessage("sub_address is required!")
]

router.get('/', function(req, res, next) {
  const f = fuzzyAHP();
  res.send({fuzzyAHP: f});
});

router.post('/', schema, function(req, res, next) {
  const validation = validationResult(req);
  const { body } = req
  
  // validation
  if(validation.errors.length  > 0) {
    return res.status(400).send(validation)
  }

  const { address, sub_address, type } = body;

  res.send(type);
})

export default router;
