exports.seed = function(knex) {
    return knex('project').insert(
        [{
                proj_name: 'college questr',
                proj_description: 'build an a Q and A app',
                complete: 1
            },
            {
                proj_name: 'college questr',
                proj_description: 'build an a Q and A app',
                complete: 0
            },
            {
                proj_name: 'college questr',
                proj_description: 'build an a Q and A app',
                complete: 0
            },
            {
                proj_name: 'college questr',
                proj_description: 'build an a Q and A app',
                complete: 0
            },
            {
                proj_name: 'college questr',
                proj_description: 'build an a Q and A app',
                complete: 1
            }
        ]);
}