const express = require("express");
const router = express.Router();
const {
  getBootCamp,
  getBootCampById,
  updateBootCampById,
  createBootCamp,
  deleteBootCampById,
} = require("../Controllers/bootcamp");

router.route("/").get(getBootCamp).post(createBootCamp);
router
  .route("/:id")
  .get(getBootCampById)
  .put(updateBootCampById)
  .delete(deleteBootCampById);

module.exports = router;
