import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./Organise.css";
import history from "../history";
import MintTickets from "./MintTickets";

const serverPort = 8000;
const serverURL = "http://localhost:" + serverPort;

export default function Organise() {
  function submitEventHandler(data) {
    console.log("Input Form Data Trial:");

    console.log("Extracting Form Data...");
    data.preventDefault();
    const eventData = new FormData();
    Object.keys(data.target).forEach((key) => {
      const id = data.target[key].id;
      const value = data.target[key].value;

      eventData.append(id, value);
      console.log("Our Element-->", id, ": ", value);
    });

    sendDataToBackend(eventData);

    history.push('/MintTickets', MintTickets);
  }

  async function sendDataToBackend(dataList) {
    console.log("event Data from FormData()");
    for (var pair of dataList.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    console.log("Backend URL: ", serverURL);
    const response = await fetch(`${serverURL}/store_event_data`, {
      method: "POST",
      headers: { "Access-Control-Allow-Origin": "*" },
      body: dataList,
    });
    console.log("Response From Backend on Form Data Submission: ", response);
  }

  return (
    <div>
      {/* <div>
        <li> Gather Event Details</li>
        <li>Also gather NFT Ticket details</li>
        <li>On Submit Show the final Preview with data and amount</li>
        <li>Sign Transaction with wallet</li>
        <li>
          Note: Management can be added in next version for now immutable, also
          comment these as TODO's
        </li>
      </div> */}

      <div>
        <Container className="form-style">
          <Form onSubmit={submitEventHandler}>
            <Form.Group className="title" controlId="eventTitle">
              <Form.Label>Event Title: </Form.Label>
              <Form.Control type="text" placeholder="Enter event's Title" />
            </Form.Group>

            <Form.Group className="title" controlId="eventDescription">
              <Form.Label>Describe your event: </Form.Label>
              <Form.Control type="textarea" rows={3} />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} className="title" controlId="eventDate">
                <Form.Label>Event Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Form.Group as={Col} className="title" controlId="eventLocation">
                <Form.Label>Event Location</Form.Label>
                <Form.Control type="text" placeholder="Enter Location" />
              </Form.Group>
            </Row>

          <Row>
            <Form.Group as={Col} className="title" controlId="eventStartTime">
              <Form.Label>Event Start Time</Form.Label>
              <Form.Control type="time" />
            </Form.Group>

            <Form.Group as={Col} className="title" controlId="eventEndTime">
              <Form.Label>Event End Time</Form.Label>
              <Form.Control type="time" />
            </Form.Group>
          </Row>
            {/* Uncomment for Event Cover Picture */}
            {/* <Form.Group  className="title" controlId="coverPicture" >
            <Form.Label>Event Cover Picture</Form.Label>
            <Form.Control type="file" name="coverImage"/>
          </Form.Group> */}

            <Button
              variant="primary"
              type="submit"
              style={{ marginLeft: "500px", marginTop: "30px" }}
            >
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
}
