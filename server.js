  const express = require("express");
  const cors = require("cors");
  const ProjectRouter = require('./Routes/projectRouter');
  const ResourceRouter = require('./Routes/resourceRouter');
  const TaskRouter = require('./Routes/taskRouter');

  const server = express();

  server.use(cors());
  server.use(express.json());

  server.use('/api/project', ProjectRouter);
  //   server.use('/api/resc', ResourceRouter);
  server.use('/api/task', TaskRouter);

  module.exports = server;