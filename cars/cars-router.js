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
		const car = await db('cars').insert(carData);

		console.log('after await');

		res.status(201).json(car);
	} catch (err) {
		res.status(500).json({ message: 'Internal Server Error', error: err.message });
	}
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	db('cars')
		.where({ id })
		.first()
		.then((car) => {
			res.status(200).json(car);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Internal Server Error' });
		});
});

router.put('/:id', async (req, res) => {
	const carData = req.body;
	const { id } = req.params;

	try {
		const car = await db('cars').where({ id }).update(carData);
		res.status(201).json(car);
	} catch (error) {
		res.status(500).json({ message: 'Internal Server Error', error: err.message });
	}
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;

	db('cars')
		.where({ id })
		.del()
		.then((car) => {
			res.status(200).json(car);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Internal Server Error', error: err.message });
		});
});

module.exports = router;
