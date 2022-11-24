const express = require("express");
const router = express.Router();
const UsersRouter = require("./../routes/users");
const PekerjaRouter = require("../routes/pekerja");
const PerekrutRouter = require("../routes/perekrut");
const ExperiencesRouter = require("../routes/experiences");
router
  .use("/users", UsersRouter)
  .use("/pekerja", PekerjaRouter)
  .use("/perekrut", PerekrutRouter)
  .use("/experiences", ExperiencesRouter);

module.exports = router;
