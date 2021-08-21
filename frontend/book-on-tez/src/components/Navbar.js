import React, {useState, useEffect} from 'react';

import {Navbar, Nav, Form, Button, Container, NavDropdown} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './Navbar.css';

import { TezosToolkit, MichelCodecPacker } from "@taquito/taquito";
import { BeaconWallet } from '@taquito/beacon-wallet';
import { NetworkType, DAppClient, TezosOperationType } from "@airgap/beacon-sdk";



const walletOptions = {
    name: "Book On Tez",
    preferredNetwork: NetworkType.FLORENCENET,
    eventHandlers: {
        PERMISSION_REQUEST_SUCCESS: {
          handler: async (data) => {
            console.log('This is our permission data from wallet signing:', data);
          },
        },
      },
  };




const rpcUrl = "https://api.tez.ie/rpc/florencenet";
const rpcUrl2 = "https://mainnet-tezos.giganode.io";

const Tezos = new TezosToolkit(rpcUrl);
const wallet = new BeaconWallet(walletOptions);




export default function Navigation (props){

    const [userAddress, setUserAddress] = useState('');
    const [connected, setConnected] = useState(false); 

    useEffect(() => {
         checkConnection();
    },[])

    async function checkConnection(){
        const activeAccount = await wallet.client.getActiveAccount();
        if(activeAccount){
            console.log("AlreadyConnected:", activeAccount.address);
            setUserAddress(activeAccount.address);
            return activeAccount;
        }else{
            console.log("NOT CONNECTED.");
            return
            // connectWallet();
        }

    }

    async function connectWallet(){
        Tezos.setWalletProvider(wallet);

        try{
            const permissions = await wallet.client.requestPermissions();
            console.log("Got Permissions:", permissions.address);
            const pkh = wallet.getPKH();
            console.log("PKH:", pkh);
            setUserAddress(permissions.address)
        }catch(error){
            console.log("Got error:", error);
        }
    
    }

    async function disconnectWallet(){
        wallet.clearActiveAccount();
        setUserAddress(null);
        try{
            const account = await wallet.getPKH();
            console.log("Active account:", account);
        }catch(error){
            console.log("NO WALLET CONNECTED")
        }
        
    }


    console.log("Navigation Props -->",props)
    return(
        <>
        <Navbar bg="dark" variant="dark" expand="lg" >
            <Container className="nav-styling">
                <Container className="nav-area">
                    <Nav >
                        <Navbar.Brand href="/" className="brand-style">BookOnTez</Navbar.Brand>
                        <Nav.Link href="/Discover" className="nav-button">Discover</Nav.Link>
                        <Nav.Link href="/Organise" className="nav-button">Organise</Nav.Link>
                    </Nav>
                </Container>

                <Container style={{width:'40%'}}>

                </Container>
                
                <Container className="user-area">
                    <Button className="connect-button" onClick={connectWallet}>
                        Connect
                    </Button>
                    <Button className="connect-button" onClick={disconnectWallet}>
                        Disconnect
                    </Button>
                    <h6 style={{color:"white", width:'300px'}}>Address: {userAddress}</h6>
                </Container>
            </Container>

        </Navbar>
        </>
        
    )

}

