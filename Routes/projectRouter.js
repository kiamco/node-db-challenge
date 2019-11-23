  const express = require("express");

  const Projects = require("../Data/models/projectModel");

  const router = express.Router();


  const booleanParser = (obj) => {
      const parsed = obj.map(el => {
          if (el.complete === 1) {
              return ({...el, complete: true })
          }

          return ({...el, complete: false })
      })

      return parsed
  }

  router.get('/', (req, res) => {
      Projects.find()
          .then(projects => {
              console.log(projects);
              res.status(200).json(booleanParser(projects));
          })
          .catch(err => {
              res.status(500).json({
                  message: 'Failed to get projects'
              });
          });
  });


  router.get('/:id', (req, res) => {
      const {
          id
      } = req.params;

      Projects.findById(id)
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
                  message: 'Failed to get projects'
              });
          });
  });

  router.post('/', (req, res) => {
      const projectData = req.body;

      Projects.add(projectData)
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