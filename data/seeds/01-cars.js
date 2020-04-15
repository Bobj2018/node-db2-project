exports.seed = function (knex, Promise) {
	return knex('cars')
		.truncate()
		.then(function () {
			// add data into insert
			return knex('cars').insert([
				{
					vim: 'ABCDE123454',
					make: 'Honda',
					model: 'Odyssey',
					year: 2007,
					mileage: 120000,
				},
				{
					vim: 'CDEGF21532',
					make: 'Cadillac',
					model: 'DeVille',
					year: 2000,
					mileage: 120000,
				},
			]);
		});

	return;
};
