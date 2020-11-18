const db = require("../../models");
const router = require("express").Router();

// get all
router.get("/", (req, res) => {
  db.Department.findAll({
    query: req.query,
    include: [db.Commitment, db.Employee],
  }).then((dbDepartment) => {
    res.json(dbDepartment);
  });
});

// get single by id
router.get("/:id", (req, res) => {
  db.Department.findByPk(req.params.id, {
    query: req.query,
    include: [db.Commitment, db.Employee],
  }).then((dbDepartment) => {
    res.json(dbDepartment);
  });
});

// create
router.post("/", (req, res) => {
  db.Department.create(req.body).then((dbDatabase) => res.json(dbDatabase));
});

// update
router.put("/:id", (req, res) => {
  db.Department.update(req.body, {
    where: { id: req.params.id },
  }).then((dbDepartment) => res.json(dbDepartment));
});

// delete
router.delete("/:id", (req, res) => {
  db.Department.destroy({
    where: { id: req.params.id },
  }).then((dbDepartment) => res.json(dbDepartment));
});

module.exports = router;
