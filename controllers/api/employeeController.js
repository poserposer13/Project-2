const db = require("../../models");
const router = require("express").Router();

router.get("/", (req, res) => {
  db.Employee.findAll({
    query: req.query,
    include: [db.Commitment, db.Pay],
  }).then((dbEmployee) => {
    res.json(dbEmployee);
  });
});

router.get("/:id", (req, res) => {
  db.Employee.findByPk(req.params.id, {
    query: req.query,
    include: [db.Employee, db.Pay, db.Department],
  }).then((dbEmployee) => {
    res.json(dbEmployee);
  });
});

// create
router.post("/", (req, res) => {
  db.Employee.create({
    DepartmentId: 1,
    ...req.body,
  }).then((dbDatabase) => res.json(dbDatabase));
});

/*** Employee - Update*/
router.put("/:id", (req, res) => {
  db.Employee.update(req.body, {
    where: { id: req.params.id },
  }).then((dbEmployee) => res.json(dbEmployee));
});

/*** Employee - Delete*/
router.delete("/:id", (req, res) => {
  db.Employee.destroy({
    where: { id: req.params.id },
  }).then((dbEmployee) => res.json(dbEmployee));
});

module.exports = router;
