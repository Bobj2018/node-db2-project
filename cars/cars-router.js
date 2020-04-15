const express = require('express');

const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
	db('cars')
		.then((car) => {
			res.status(200).json(car);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Internal Server Error' });
		});
});

router.post('/', async (req, res) => {
	const carData = req.body;

	console.log('carData', carData);

	try {
		console.log('Trying');

		const car = await db('cars').insert(carData);

		console.log('after await');

		res.status(201).json(car);
	} catch (err) {
		res.status(500).json({ message: 'Internal Server Error', error: err });
	}
});

module.exports = router;
