const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const course = require("../controller/course");

router.post("/create/course", auth, course.createCourse);
router.get("/get/course/:id", auth, course.getCourse);
router.get("/get/course", auth, course.getAllCourses);
router.patch("/update/course", auth, course.updateCourse);
router.delete("/delete/course/:id", auth, course.deleteCourse);

module.exports = router;