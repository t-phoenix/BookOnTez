import React, {useState} from "react";
import { Form, Button , Dropdown, DropdownButton, ToggleButtonGroup, ToggleButton} from "react-bootstrap";
import TicketForm from "../components/TicketForm"

export default function MintTickets(){

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
    





    const [ticketType, setTicketType] = useState("");
    const [numberOfTicketTypes, setNumberOfTicketTypes] = useState(1);
    
    function handleNumberOfTicketInput(e){
        console.log("Dropdown Input: ", e);
        setNumberOfTicketTypes(e);
        
    }

    function handleMintTickets(){
        console.log("Submit Data and Mint NFTs")
    }


    return(
        <div>
            <div>
                <h1>Ticket Minting Screen</h1>
                <li>We are trying to capture all the information oF Tickets here.</li>
            </div>
            <div>
                <h6>Types of Tickets: </h6>
                {/* <input type="text" onchange={handleNumberOfTicketInput}/>
                <Button onclick={handleTicketTypes}>Next</Button> */}

                <ToggleButtonGroup type="radio" name="options" value={numberOfTicketTypes} onChange={handleNumberOfTicketInput}>
                  <ToggleButton id="tbg-radio-1" value={1}>
                    Option 1
                  </ToggleButton>
                  <ToggleButton id="tbg-radio-2" value={2}>
                    Option 2
                  </ToggleButton>
                  <ToggleButton id="tbg-radio-3" value={3}>
                    Option 3
                  </ToggleButton>
                </ToggleButtonGroup>

                {numberOfTicketTypes===1?
                <TicketForm/>
                :(numberOfTicketTypes===2?
                    <div>
                    <TicketForm/>
                    <TicketForm/>
                    </div>
                :<div>
                <TicketForm/>
                <TicketForm/>
                <TicketForm/>
                </div>)
                }


                <Button onClick={handleMintTickets}>Mint</Button>

            </div>
        </div>
    )
}