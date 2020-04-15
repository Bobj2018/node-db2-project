exports.up = function (knex) {
	return knex.schema.createTable('cars', (table) => {
		// Required
		table.increments('id');
		table.string('vim', 128).unique().notNullable();
		table.string('make', 128).notNullable();
		table.string('model', 128).notNullable();
		table.integer('year').notNullable();
		table.integer('mileage').notNullable();
		// Optional
		table.string('transmission', 128);
		table.string('title', 128);
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('cars');
};
