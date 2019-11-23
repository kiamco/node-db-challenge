exports.up = function(knex) {
    return knex.schema.createTable('project', proj => {
            proj.increments();
            proj.string('proj_name').notNullable();
            proj.string('proj_description');
            proj.integer('complete').defaultTo(0);

        })
        .createTable('resource', res => {
            res.increments();
            res.string('resc_name').notNullable();
            res.string('resc_description');
            res.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
        .createTable('task', task => {
            task.increments();
            task.string('task_description').notNullable();
            task.string('task_notes');
            task.integer('complete').defaultTo(0);
            task.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })

};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('task')
        .dropTableIfExists('resource')
        .dropTableIfExists('project');
};