import React from "react";
import { Form } from "react-bootstrap";
import './TicketForm.css'


export default function TicketForm(props) {


  return (
    <div>
        {/* <div>
            <div>
                <h5>Type of Ticket: </h5>
                <input type="text" onchange={props.ticketType}/>
            </div>
        </div> */}

    <Form title="formStyling">
      <Form.Group className="title" controlId="ticketType">
        <Form.Label>Type of Ticket: </Form.Label>
        <Form.Control type="text" placeholder="Eg: Gold, Silver, Bronze" />
      </Form.Group>

      <Form.Group className="title" controlId="ticketColour">
        <Form.Label>Ticket Colour: </Form.Label>
        <Form.Control type="color" />
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
    </div>
  )
}
