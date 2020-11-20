const router = require("express").Router();

const db = require("../../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  db.Pay.findAll({
    include: [db.Employee],
  }).then((dbPay) => {
    res.json(dbPay);
  }).catch((err) => res.status(422).json(err));
});

router.get("/:id", (req, res) => {
  db.Pay.findOne({
    where: {
      id: req.params.id,
    },
    include: [db.Employee],
  }).then((dbPay) => {
    res.json(dbPay);
  }).catch((err) => res.status(422).json(err));
});

router.post("/", (req, res) => {
  db.Pay.create(req.body).then((dbPay) => {
    res.json(dbPay);
  }).catch((err) => res.status(422).json(err));
});

// Export routes for server.js to use.
module.exports = router;
