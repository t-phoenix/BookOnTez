const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date
    },
    startTime: {
        type: String
    },
    endTime: {
        type: String
    },
    location: { type: String },
    eventCoverImage: {
        data: Buffer,
        contentType: String,
    }

}, { timestamps: true })

const Event = mongoose.model('events', eventSchema);
module.exports = Event;
