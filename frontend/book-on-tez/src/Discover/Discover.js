import React, {useState, useEffect} from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import sunburnImg from '../assets/Images/sunburn.jpeg'
import Abhishek from '../assets/Images/abhishekShow.jpeg'

export default function Discover() {
  //TODO: Write Fetch data logic with useEffect, endpoint already created at backend.
  //TODO: Make a Dynamic Grid to enlist all the events
  //TODO: Use Cards Template as Hardcoded below as components




  return (
    <div>
      <Col>
        <Row>
          <Card style={{ width: "18rem", margin: "2rem"}}>
            <Card.Img variant="top" src={sunburnImg} />
            <Card.Body >
              <Card.Title>Sunburn Arena - Music Festival</Card.Title>
              <Card.Text>
                Your Fauvrite music festival is comming again in Goa on 25th December.
                Book Your Tickets here and invite your friends.

              </Card.Text>
              <Button variant="primary">Buy Tickets</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem", margin: "2rem"}}>
            <Card.Img variant="top" src={Abhishek} />
            <Card.Body>
              <Card.Title>Comedy Special - Abhishek Upmanyu</Card.Title>
              <Card.Text>
                Abhishek Upmanyu needs no Introduction. He took the year 2020 by a storm by becoming an Internet Sensation.
                One of the most loved comedian of India.
              </Card.Text>
              <Button variant="primary">Buy Tickets</Button>
            </Card.Body>
          </Card>
        </Row>
      </Col>
    </div>
  );
}
