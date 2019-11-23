  const express = require("express");

  const Tasks = require("../Data/models/taskModel.js");

  const router = express.Router();


  const booleanParser = (obj) => {
      const parsed = obj.map(el => {
          if (el.task_complete === 1) {
              return ({
                  ...el,
                  complete: true
              })
          }

          return ({
              ...el,
              task_complete: false
          })
      })

      return parsed
  }

  router.get('/', (req, res) => {
      Tasks.find()
          .then(tasks => {
              console.log(tasks);
              res.status(200).json(booleanParser(tasks));
          })
          .catch(err => {
              res.status(500).json({
                  message: 'Failed to get tasks'
              });
          });
  });


  router.get('/:id', (req, res) => {
      const {
          id
      } = req.params;

      Tasks.findById(id)
          .then(project => {
              if (project) {
                  res.status(200).json(booleanParser(project));
              } else {
                  res.status(404).json({
                      message: 'Could not find project with given id.'
                  })
              }
          })
          .catch(err => {
              res.status(500).json({
                  message: 'Failed to get tasks'
              });
          });
  });

  router.post('/', (req, res) => {
      const projectData = req.body;

      Tasks.add(projectData)
          .then(project => {
              res.status(201).json(project);
          })
          .catch(err => {
              res.status(500).json({
                  message: 'Failed to create new project'
              });
          });
  });




  module.exports = router;