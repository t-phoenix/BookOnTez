const express = require('express')
const cors = require('cors')
const multer = require('multer')
const fs = require('fs');
const mongoose = require('mongoose')
const app = express();
const upload = multer({ dest: "uploads/" });
const Event = require('./models/event');


//DATABASE
const mongodb_name = "book-on-tez-database";
const dbPassword = "klUzRVe7IvC6xSzc";
const mongodbURI = `mongodb+srv://book-on-tez-backend-user:${dbPassword}@cluster0.ph7dp.mongodb.net/${mongodb_name},"?retryWrites=true&w=majority`;
mongoose.connect(mongodbURI, { setNewURLParser: true, useUnifiedTopology: true })
    .then(res => console.log("Connected to db..."))
    .catch(err => console.log("DB COnnection Failed...", err));


app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(
    express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);






const port = 8000;


app.get('/', (req, res) => {
    res.send("Hello World! \n")
})

// app.get('/:name', (req, res) => {
//     res.send('Your Name is:', req.params.name, '/n')
// })
app.get('/all-events', (req, res) => {
    Event.find()
        .then((response) => {
            console.log("All Eevents Data: ", response);
            res.send(response);
        })
        .catch((err) => {
            console.log("Error: ", err)
        })
})


app.post('/store_event_data', upload.single("coverImage"), (req, res) => {
    const multerRequest = req.file;
    var imageFile = '';



    if (!multerRequest) {
        console.log("NO FILE PROVIDED");
    } else {
        console.log("Image File: ", multerRequest)
        imageFile = multerRequest
        const readableStramForImage = fs.createReadStream(`./uploads/${imageFile}`);
        console.log("Readable File Stream: ", readableStramForImage);

    }



    const event = new Event({
        title: req.body.eventTitle,
        description: req.body.eventDescription,
        date: req.body.eventDate,
        startTime: req.body.eventStartTime,
        endTime: req.body.eventEndTime,
        location: req.body.eventLocation,
        eventCoverImage: imageFile
    })

    event.save()
        .then((result) => {
            console.log("Event Data Saved:", result)
        }).catch((err) => {
            console.log("Error:", err)
        })

    console.log("Request Body data ----> : ", req.body);
    // console.log("Request With Params---->", req.params.body);
    // res.json(req.body);
})




app.listen(port, () => {
    console.log("listening on http://localhost:", port);
})