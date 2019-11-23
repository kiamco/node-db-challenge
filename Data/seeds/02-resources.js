exports.seed = function(knex) {

    // Inserts seed entries
    return knex("resource").insert([{
            resc_name: "1 resource",
            resc_description: " 1 resc description",
            project_id: 1
        },
        {
            resc_name: "2 resource",
            resc_description: " 2 resc description",
            project_id: 1
        },
        {
            resc_name: "3 resource",
            resc_description: " 3 resc description",
            project_id: 2


        },
        {
            resc_name: "4 resource",
            resc_description: " 4 resc description",
            project_id: 3

        },
        {
            resc_name: "5 resource",
            resc_description: " 5 resc description",
            project_id: 1

        },
        {
            resc_name: "6 resource",
            resc_description: " 6 resc description",
            project_id: 3

        }
    ]);
};