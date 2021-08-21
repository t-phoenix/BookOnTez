# BookOnTez - NFT Ticketing for Events on Tezos Blockchain

## Problems with existing ticketing systems


Lack of efficient exchanges and abundance of secondary markets protocols creates black market opportunities while hampering customer trust. Sometimes tickets are issued in a way where they cannot be exchanged, locking the commitment and money. It’s also almost impossible to track the tickets once it is sold by the organizer, inviting frauds and security threats. Automated bots are generally used to buy the tickets in bulk surging the price in the black market, disappointing numerous fans. 
Fake Websites posing similar to original ones generally lead to loss of money and massive disappointment for customers.

## Solution

NFT can help us shape the future of the ticketing systems by digitizing the ticket data in the form of unique tokens, which can be sold digitally, once created. Customers store NFT in a secure wallet and can have an option to resell without compromising privacy while still verifying the ownership. Here, we are leveraging highly on append-only Blockchain immutability feature without trusting any third party.

#### NFT ticketing will provide the enlist benefits:


***Reduced Cost and Quick production*** - NFT can be minted and ready to be sold in minutes, providing features like Unforgeable tickets, validating the authenticity of every ticket, and enabling history of ownership.


***Preventing fake tickets and scams*** - Blockchain provides immutable data ledgers, which is helpful in defining the truth for every party involved. NFT can be encoded as non-transferable in case of resale tickets are forbidden.


***Perpetual revenue*** - NFT enables programmable tickets which can have built-in rules for merchandise, content, resale, and royalty splits.


***Collection*** - This will also create a means to collect the rare tickets in a safe digital crypto wallet while reliving the memories.


## Architecture

The current version is just a proof of Concept (poc) that such ticketing system can be developed based on NFT’s using Tezos Blockchain. As Tezos use Proof of Stake as it’s consensus mechanism, our project need not to worry on high gas fee and will have a low carbon footprint.

This is necessary as minting Event Tickets in a large number as NFT can be a huge task on any Proof of Work based blockchain, making the project unstable due to high minting cost.


The working of this application can be understood by the diagram given below.


![architecture-diagram](https://github.com/t-phoenix/BookOnTez/blob/master/assets/Figure1.png)




***Frontend*** is being developed in React.js using Taquito to bridge the application with User’s Crypto wallet.

A user can easily organise an event, i.e. enter the event details and mint the NFT Tickets on the platform, using Tezos to complete the transaction.
As an event may have classification of Tickets (let say: premium ticket, general ticket, etc.),
I have tried to incorporate a simple UI which will help the user mint 100’s of tickets with minimal efforts.
User’s looking to attend these events can browse in Discover section, and can choose to buy tickets for any event they like. All the transactions will be completed on Tezos blockchain, leveraging it’s functionality.

Next version of this Dapp is set to include an authentication endpoint, which will be developed keeping in mind the ease of verifying NFT tickets at given point of time.

***Backend*** is developed using express framework, and would work like a handling point for all microprocesses. As this part of the system require high availability and security, I am looking for a decentralised solution to host a backend, instead of a Centralised Server.
Argoapp.live seem to be a budding candidate, but need some time to look onto that matter.

***Data*** is broadly stored into 3 separate destinations, depending on their use case.
Event Related Data is stored in a simple MongoDb, while Ticket related data is stored on blockchains, to incorporate them as NFT’s.
IPFS - InterPlanetaryFileSystem is used through Pinata Sdk for ease of storing metadata related to NFT tickets, while a smart contract is deployed on Tezos blockchain to mint, delegate and transfer those tickets.


___


## A small Demo Video to understand the project
[![demo-video]()](https://youtu.be/jLyjyS7aLZ4)


---
I am a mobile App Developer, starting with web development, thus developing smart contract for the same is taking longer than expected.
If you like the idea and want to contribute, feel free to contact me @abhinil.agarwal@iiitb.org
