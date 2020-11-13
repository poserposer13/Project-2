const db = require("../../models");
const router = require("express").Router();

/**
 * Post - Read All
 */
router.get("/", (req, res) => {
  db.Post.findAll(req.query)
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

/**
 * Post - Read One
 */
router.get("/:id", (req, res) => {
  db.Post.findByPk(req.params.id)
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

/**
 * Post - Create
 * Notice how we are also taking in the User Id! Important!
 */
router.post("/", (req, res) => {
  db.Post.create({
    UserId: req.user.id,
    ...req.body,
  })
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

/**
 * Post - Update
 */
router.put("/:id", (req, res) => {
  db.Post.update(req.body, { where: { id: req.params.id } })
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

/**
 * Post - Delete
 */
router.delete("/:id", (req, res) => {
  db.Post.destroy({ where: { id: req.params.id } })
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

// Defining methods for the booksController
module.exports = router;
