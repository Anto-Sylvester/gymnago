const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
    {
        id: { type: String, required: true }, // Custom id field
        courseDetails: {
            courseImage: {
                type: String
            },
            courseCategory: {
                type: String,
                required: true
            },
            courseName: {
                type: String,
                required: true
            },
            memberLimits: {
                type: String,
                required: true
            },
            branch: {
                type: String,
                required: true
            },
            courseMode: {
                type: String,
                required: true
            },
            courseLevel: {
                type: String
            },
            caloriesBurned: {
                type: String
            },
            benefitsOfCourse: {
                type: String
            },
            bringYourOwnKit: {
                type: String
            },
            courseDescription: {
                type: String
            }
        },
        courseFee: {
            dropInMemberFee: {
                includingTax: {
                    type: Number,
                    required: true
                },
                excludingTax: {
                    type: Number, required: true
                },
                tax: { type: Number, default: 15 }
            },
            activeMemberFee: {
                includingTax: {
                    type: Number,
                    required: true
                },
                excludingTax: {
                    type: Number,
                    required: true
                },
                tax: { type: Number, default: 15 }
            }
        },
        advancedSettings: {
            allowInstallments: { type: Boolean, default: false },
            allowJoinAnytime: { type: Boolean, default: false },
            confirmWaitlistBookings: { type: Boolean, default: false },
            registrationStartDate: {
                type: Date,
                required: true
            },
            bookingDeadline: {
                type: Number,
                required: true
            }, // In hours
            sendReminderCourseStart: {
                type: Date,
                required: true
            },
            cancellationPeriod: {
                type: Number,
                required: true
            }, // In hours
            unpaidBookingCancellation: {
                type: Number,
                required: true
            }, // In hours
            allowWaitlistBooking: {
                type: Number, default: 0,
            },
            bookForFriends: {
                type: Number, default: 0,
            },
            ageRestriction: {
                min: { type: Number, default: 0 },
                max: { type: Number, default: 100 },
            },
            genderRestriction: {
                type: String, enum: ['Male', 'Female', 'None'], default: 'None',
                required: true
            }
        },
        courseSchedule: {
            selectedDate: {
                fromDate: { type: Date, required: true },
                toDate: { type: Date, required: true }
            },
            selectedDatesTimings: [
                {
                    sameEveryDay: { type: Boolean, default: true },
                    days: {
                        type: [String],
                        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                        required: true
                    },
                    timing: {
                        startTime: { type: String, required: true },
                        endTime: { type: String, required: true }
                    },
                    trainers: [
                        {
                            type: mongoose.Schema.Types.ObjectId,
                            ref: 'Trainer', // Reference to the Trainer collection
                            required: true
                        }
                    ],
                    room: { type: String, required: true },
                    link: { type: String, required: true }
                }
            ]
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
