/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import '../assets/css/TicketStyle.css'
import ReactToPrint from 'react-to-print'
import planeBG from "../assets/images/planebg1.jpg";
import Footer from './Footer';
import Header from './Header';
import { Link } from 'react-router-dom';

class Ticket extends Component {
    
    constructor(props){
        super(props)
        if(!localStorage.getItem('user'))
        {
            this.props.history.push('/login')
        }
        else{
        if(localStorage.getItem('ticket') !==null){
            console.log('if')
            this.ticket=JSON.parse(localStorage.getItem('ticket'))
            localStorage.removeItem('ticket')
        }
        else{
            console.log('else')
            this.ticket=JSON.parse(localStorage.getItem('view-ticket'))
            localStorage.removeItem('view-ticket')
        }
        console.log("Ticket: "+ this.ticket)
        this.passengers = this.ticket.booking.passengers
        console.log("TN: "+ this.ticket.ticketNumber)
        console.log("Source: " + this.ticket.booking.flight.source)
        console.log("Dst: " + this.ticket.booking.flight.destination)
        console.log("AR Time: "+ this.ticket.booking.flight.arrivalTime)
        console.log("DR Time: "+ this.ticket.booking.flight.departureTime)
        console.log("Booking Date: "+ this.ticket.booking_date)
        console.log("Total Pay: "+ this.ticket.total_pay)
        console.log("Passengers: "+ JSON.stringify(this.passengers))
    }
        
    }

    componentDidMount(){
        if(!localStorage.getItem('user'))
        {
            this.props.history.push('/login')
        }
       
        }


    onSeats = () =>{
        this.props.history.push('/seats')
    }


    render() {
        if(!this.ticket){
            return null
        }

        this.psg_name = this.passengers.map(psg => {
                        return(
                            <span>{psg.pname} <br/></span> 
                            
                            )    
                        })

        this.psg_age = this.passengers.map(psg => {
                        return(
                            <span>{psg.age}<br/></span> 
                            )    
                        })

        this.psg_gender = this.passengers.map(psg => {
            return(
                <span>{psg.gender}<br/></span> 
                )    
            })
        
        
    return (

       <div class='pt-3'>
        <Header />
        <div class="py-5" style={{backgroundImage: `url(${planeBG})`,overflow: 'hidden', height: '700px'}}>
        
            <div style={{textAlign:'right', marginRight:'90pt', marginTop:'130pt'}}>
            <ReactToPrint 
                trigger={() => <a class="btn text-light bg-dark" role="button" href="#">Print The Ticket</a>}
                content={() => this.componentRef}
            />
            </div>

            <div style={{textAlign:'right', marginRight:'110pt', marginTop:'10pt'}}>
                <button class='btn text-light bg-dark' onClick={this.onSeats}>Select Seats</button>
            </div>

            <div class="box pt-2" ref={el => (this.componentRef = el)}>
            <div class="ticket">
                <span class="airline">BookMyFlight Airlines</span>
                <span class="boarding">Boarding : {this.ticket.booking.flight.source}</span>
                <div class="content">
                <span class="jfk">{this.ticket.booking.flight.source}</span>
                <span class="plane"><svg clip-rule="evenodd" fill-rule="evenodd" height="60" width="60" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><g stroke="#222"><line fill="none" stroke-linecap="round" stroke-width="30" x1="300" x2="55" y1="390" y2="390"/><path d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z" fill="#222" stroke-linejoin="round" stroke-width="10"/></g></svg></span>
                <span class="sfo">{this.ticket.booking.flight.destination}</span>
                
                <div class="sub-content">
                    <span class="watermark">BookMyFlight</span>
                    <span class="name">Passenger Name<br />
                    {this.psg_name}
                    </span>

                    <span class="age">Passenger Age<br />
                    {this.psg_age}
                    </span>

                    <span class="gender">Passenger Gender<br />
                    {this.psg_gender}
                    </span>

                    <span class="flight">Flight No.&deg;<br />
                    <span>{this.ticket.booking.flight.flightNumber}</span> <br />
                    </span>

                    <span class="gate">Ticket No.&deg; <br /><span>{this.ticket.ticketNumber}</span></span>
                    
                    <span class="amount">Amount Paid<br />
                        <span>₹{this.ticket.total_pay}</span> <br />
                    </span>

                    <span class="boardingtime">Boarding Time<br /><span>{this.ticket.booking.flight.arrivalTime}</span></span>
                    <span class="departuretime">Departure Time<br /><span>{this.ticket.booking.flight.departureTime}</span></span>
                </div>
                </div>
                <div class="barcode"></div>
                <div class="barcode slip"></div>
            </div>
            
                <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
            </div>
            
            </div>
            <Footer />
            </div>
        )
    }
}
export default Ticket;