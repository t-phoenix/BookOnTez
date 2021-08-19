import React from "react";
import { Form, Button } from "react-bootstrap";
import './Organise.css';

export default function Organise() {



    function submitEventHandler(data){
        console.log("Input Data: ", data)

        console.log("Submitting Form Data...");
        data.preventDefault()
        var formData = [];
        Object.keys(data.target).forEach(key => {
            const id = data.target[key].id;
            const value = data.target[key].value;

            formData.push({id:value});
            console.log("Our Element", id,  ": ", value);
        });


        console.log("Form Data Object Is: ", formData);
    }




  return (
    <div>
      <div>
        <li> Gather Event Details</li>
        <li>Also gather NFT Ticket details</li>
        <li>On Submit Show the final Preview with data and amount</li>
        <li>Sign Transaction with wallet</li>
        <li>
          Note: Management can be added in next version for now immutable, also
          comment these as TODO's
        </li>
      </div>

      <div>
        <Form onSubmit={submitEventHandler}>
          <Form.Group className="title" controlId="eventTitle">
            <Form.Label>Event Title: </Form.Label>
            <Form.Control type="text" placeholder="Enter event's Title" />
          </Form.Group>

          <Form.Group className="title" controlId="eventDescription">
            <Form.Label>Describe your event: </Form.Label>
            <Form.Control type="textarea" rows={3}/>
          </Form.Group>

          <Form.Group className="title" controlId="eventDate">
              <Form.Label>Event Date</Form.Label>
              <Form.Control type="date"/>    
          </Form.Group>

          <Form.Group className="title" controlId="eventStartTime">
              <Form.Label>Event Start Time</Form.Label>
              <Form.Control type="time"/>    
          </Form.Group>

          <Form.Group class_name="title" controlId="eventEndTime">
              <Form.Label>Event End Time</Form.Label>
              <Form.Control type="time"/>
          </Form.Group>

          <Form.Group class_name="title" controlId="eventLocation">
              <Form.Label>Event Location</Form.Label>
              <Form.Control type="text" placeholder="Enter Location"/>
          </Form.Group>

          <Form.Group  className="title" controlId="coverPicture" >
            <Form.Label>Event Cover Picture</Form.Label>
            <Form.Control type="file" />
          </Form.Group>


          <Button variant="primary" type="submit" >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
