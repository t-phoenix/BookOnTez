import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import './TicketForm.css'
import '../Organise/Organise.css'

export default function TicketForm(props) {


  return (
    <div>
        {/* <div>
            <div>
                <h5>Type of Ticket: </h5>
                <input type="text" onchange={props.ticketType}/>
            </div>
        </div> */}
    <Col style = {{width: '300px'}}>
    <Form className="formStyling">
      <Row>
      <Form.Group className="title" controlId="ticketType">
        <Form.Label>Type of Ticket: </Form.Label>
        <Form.Control type="text" placeholder="Eg: Gold, Silver, Bronze" />
      </Form.Group>
      </Row>

      <Form.Group className="title" controlId="ticketColour" >
        <Form.Label style={{width:"130px"}}>Ticket Colour: </Form.Label >
        <Form.Control type="color" style={{width:"50px", height:"30px"}}/>
      </Form.Group>

      <Form.Group className="title" controlId="ticketImage">
        <Form.Label>Ticket Image: </Form.Label>
        <Form.Control type="file" />
      </Form.Group>

      <Form.Group className="title" controlId="ticketNumber">
        <Form.Label>Number of Tickets: </Form.Label>
        <Form.Control type="text" placeholder="minimum 1" />
      </Form.Group>

      <Form.Group className="title" controlId="ticketPrice">
        <Form.Label>Price of Each Ticket: </Form.Label>
        <Form.Control type="text" placeholder="minimum 1tz" />
      </Form.Group>
    </Form>
    </Col>
    </div>
  )
}
