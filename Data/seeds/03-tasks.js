exports.seed = function(knex) {
    return knex('task').insert([{
            task_description: "say hi 1",
            task_notes: "note to say hi 1",
            complete: 0,
            project_id: 1
        },
        {
            task_description: "say hi 2",
            task_notes: "note to say hi 2",
            complete: 0,
            project_id: 1
        },
        {
            task_description: "say hi 3",
            task_notes: "note to say hi 3",
            complete: 0,
            project_id: 1
        },
        {
            task_description: "say hi 4",
            task_notes: "note to say hi 4",
            complete: 0,
            project_id: 1
        },
        {
            task_description: "say hi 5",
            task_notes: "note to say hi 5",
            complete: 0,
            project_id: 1
        }
    ]);
};