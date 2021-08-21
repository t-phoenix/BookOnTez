import React, { Component } from "react";
import { Row, Col, Carousel, Image, Container, Button } from "react-bootstrap";

import homeImage from "../assets/Images/disney_tickets.jpeg";
import homeImage2 from "../assets/Images/concert_real.jpeg"

export default function Home() {
  return (
      <Col>
       <Container style={{height:"10px"}}/>
            <Row>
                <Image src={homeImage} style={{height: '700px', opacity:'0.9'}}>
                </Image>
                <Container style={{position:'absolute', top:'35%', right:'8%', backgroundColor:'#fff' , opacity:'0.90', height: '80%', width: '35%', padding:'40px', borderRadius: '25px',}}>
                    <h2 style={{color:'#000', marginBottom: '30px'}}>Buy Event Tickets as NFT On Tezos</h2>
                    <h3>Supported Events: </h3>
                    <ul>Concerts</ul>
                    <ul>Spoting Events</ul>
                    <ul>Movies/ Theatre</ul>
                    <ul>Comedy Shows</ul>
                    <ul>Online Talks/ Courses</ul>
                    <ul>and more</ul>

                    <Button variant="success" href="/Discover" style={{alignSelf: 'center', marginTop:'10px'}}>Discover Events</Button>{' '}
                </Container>
            </Row>

            <Container style={{height:"10px"}}/>

            <Row>
                <Image src={homeImage2} style={{height: '700px', opacity:'0.9'}}>
                </Image>
                <Container style={{position:'absolute', backgroundColor:'#fff' , opacity:'0.90', height: '70%', width: '35%', padding:'40px', borderRadius: '25px',marginTop:'100px', marginLeft:'80px'}}>
                    <h2 style={{color:'#000', marginBottom: '30px'}}>Organise Your Event Here!</h2>
                    <ul>Mint NFT Tickets on TEZOS</ul>
                    <ul>Green Clean and Low gas Fee</ul>
                    <ul>Prevent Fake Tickts</ul>
                    <ul>Leverage Perpetual Revenue</ul>
                    <ul>Cypto Collectables</ul>

                    <Button variant="success" href="/Organise" style={{alignSelf: 'center', marginTop:'40px'}}>Organise Events</Button>{' '}
                </Container>
            </Row>
      </Col>
  );
}
