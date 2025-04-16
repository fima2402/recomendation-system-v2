import express from 'express';

import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const router = express.Router();

router.get('/', async (req,res) => {
    const db = getFirestore();
    const sub_address = [];
    const { address_id: address_id } = req.query;

    let docs = (await getDocs(
        query(
            collection(db, "sub-address"),
            address_id ? where("address_id", "==", address_id) : null
        )
    ))

    docs.forEach((doc) => {
        sub_address.push(doc.data())
    })

    res.json({
        data: sub_address,
    })
})

export default router;