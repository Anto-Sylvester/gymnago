const Course = require("../module/course.js");
const { uuid } = require('uuidv4');

//create course
const createCourse = async (req, res) => {
    try {
        //custom validation
        let { courseDetails, courseFee, advancedSettings, courseSchedule } = req.body;
        if (!courseDetails.courseCategory ||
            !courseDetails.courseName ||
            !courseDetails.memberLimits ||
            !courseDetails.branch ||
            !courseDetails.courseMode ||
            !courseFee.dropInMemberFee ||
            !courseFee.activeMemberFee ||
            !advancedSettings.registrationStartDate ||
            !advancedSettings.bookingDeadline ||
            !advancedSettings.sendReminderCourseStart ||
            !advancedSettings.cancellationPeriod ||
            !advancedSettings.unpaidBookingCancellation ||
            !advancedSettings.allowWaitlistBooking ||
            !advancedSettings.bookForFriends ||
            !advancedSettings.ageRestriction ||
            !advancedSettings.genderRestriction ||
            !courseSchedule.selectedDate.fromDate ||
            !courseSchedule.selectedDate.endDate ||
            !courseSchedule.selectedDatesTimings) {
            res.status(400).json({ Message: "Enter all data", status: false });
        } else {
            const id = uuid();
            const response = await Course(
                {
                    id,
                    courseDetails,
                    courseFee,
                    advancedSettings,
                    courseSchedule
                }
            ).save();
            if (!response) {
                response.status(500).json({ Message: "Course not created", status: false });
            } else {
                res.status(200).json({ Message: "Course created", status: true });
            }
        }
    } catch (error) {
        res.status(500).json({ Message: "Error occured", status: false, error })
    }
}

//get particular course
const getCourse = async (req, res) => {
    try {
        // custom validation
        const id = req.params.id;
        if (!id) {
            res.status(400).json({ Meesage: "Enter id", status: false })
        } else {
            const response = await Course.findById(id);
            if (!response) {
                res.status(500).json({ Message: "Course not found", status: false });
            } else {
                res.status(200).json({ Meesage: "Course found", status: true, data: response });
            }
        }
    } catch (error) {
        res.status(500).json({ Message: "Error occured", status: false, error })
    }
}

//get all course
const getAllCourses = async (req, res) => {
    try {
        const response = await Course.find();
        if (!response || response.length === 0) {
            res.status(500).json({ Message: "Course list not found", status: false });
        } else {
            res.status(200).json({ Meesage: "Course list found", status: true, data: response });
        }

    } catch (error) {
        res.status(500).json({ Message: "Error occured", status: false, error })
    }
}

//update course
const updateCourse = async (req, res) => {
    try {
        //custom validation
        let { id, courseDetails, courseFee, advancedSettings, courseSchedule } = req.body;
        if (!id ||
            !courseDetails.courseCategory ||
            !courseDetails.courseName ||
            !courseDetails.memberLimits ||
            !courseDetails.branch ||
            !courseDetails.courseMode ||
            !courseFee.dropInMemberFee ||
            !courseFee.activeMemberFee ||
            !advancedSettings.registrationStartDate ||
            !advancedSettings.bookingDeadline ||
            !advancedSettings.sendReminderCourseStart ||
            !advancedSettings.cancellationPeriod ||
            !advancedSettings.unpaidBookingCancellation ||
            !advancedSettings.allowWaitlistBooking ||
            !advancedSettings.bookForFriends ||
            !advancedSettings.ageRestriction ||
            !advancedSettings.genderRestriction ||
            !courseSchedule.selectedDate.fromDate ||
            !courseSchedule.selectedDate.endDate ||
            !courseSchedule.selectedDatesTimings) {
            res.status(400).json({ Message: "Enter all data", status: false });
        } else {
            const response = await Course.findByIdAndUpdate(
                id,
                courseDetails,
                courseFee,
                advancedSettings,
                courseSchedule,
                {
                    new: true
                }
            );
            if (!response) {
                res.status(500).json({ Message: "Course not updated", status: false });
            } else {
                res.status(200).json({ Message: "Course updated", status: true, data: response });
            }
        }
    } catch (error) {
        res.status(500).json({ Message: "Error occured", status: false, error })
    }
}

//delete course
const deleteCourse = async (req, res) => {
    try {
        // custom validation
        const id = req.params.id;
        if (!id) {
            res.status(400).json({ Meesage: "Enter id", status: false })
        } else {
            const response = await Course.findByIdAndDelete(id);
            if (!response) {
                res.status(500).json({ Message: "Course not deleted", status: false });
            } else {
                res.status(200).json({ Meesage: "Course deleted", status: true });
            }
        }
    } catch (error) {
        res.status(500).json({ Message: "Error occured", status: false, error })
    }
}


module.exports = {
    createCourse,
    getCourse,
    getAllCourses,
    updateCourse,
    deleteCourse
}