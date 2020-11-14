const db = require("../../models");
const router = require("express").Router();

router.get("/", (req, res) => {
  db.Commitment.findAll({
    include: [db.Department, db.Employee],
  }).then((dbCommitment) => {
    res.json(dbCommitment);
  });
});

router.get("/:id", (req, res) => {
  db.Commitment.findOne({
    where: {
      id: req.params.id,
    },
    include: [db.Department, db.Employee],
  }).then((dbCommitment) => {
    res.json(dbCommitment);
  });
});

router.post("/", (req, res) => {
  db.Commitment.create(req.body).then((dbCommitment) => {
    res.json(dbCommitment);
  });
});

module.exports = router;
