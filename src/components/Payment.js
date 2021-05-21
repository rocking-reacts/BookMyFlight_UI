import React, { Component } from 'react';
import amex from '../assets/images/amex.png';
import visa from '../assets/images/visa.png';
import mastercard from '../assets/images/mastercard.png';
import BookingService from '../services/BookingService';
import { withRouter } from "react-router";
import planeBG from "../assets/images/planebg1.jpg";
import Footer from './Footer';
import Header from './Header';

class Payment extends Component {
    
    constructor(props){
        super(props)
        if(!localStorage.getItem('user')){this.props.history.push('/login')}
        else{
        this.service = new BookingService();
        this.state={
            ticketNumber:0,
            booking_date:0,
            total_pay:0,
            name:''
        }
    }
    }

    createTicket = () => {
        console.log(this.state.name)
        this.service.generateTicket(this.state).then(response => {
            console.log(response.data)
            if(response.status===200)
                this.props.history.push('/ticket')
        })
        
            
    } 
    
    render(){
        if(!localStorage.getItem('user')){return null}
    return (
        <div class='pt-5'>
        <Header />
        <div class="py-5" style={{backgroundImage: `url(${planeBG})`,overflow: 'hidden', height: '800px'}}>
            <div className="row mb-4">
					<div className="col-lg-8 mx-auto text-center">
					{/* <h1 className="display-6">Book My Flight</h1> */}
					</div>
			</div>
            <div className="row">
				 <div className="col-md-6 mx-auto">
					<div className="card ">
					   <div className="card-header">
                           <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">


                           <div className="tab-content">
                                <div className="tab-pane fade show active pt-3">
                                    <div className="container">
                                        <h4 align="center">Confirm Payment</h4>
                                        <br/>

                                <div className="row">
                                        <div className="col-md-6">
                                             <span><h6>CREDIT/DEBIT CARD</h6></span> 
                                        </div>
                                         <div className="col-lg-6 text-right" style={{marginTop: "-5px"  }} >
                                         {/* style="margin-top: -5px; */}
                                             <img src={visa} alt="visa card "/> 
                                             <img src={mastercard} alt="mastercard"/>
                                             <img src={amex} alt="amex card"/> 
                                        </div> 
                                        
                                </div>
                                <br></br>
                                <div className="form-group">
                                        <label for="cc-number" className="control-label">CARD NUMBER</label> 
                                        <input id="cc-number" type="mobile" className="form-control" placeholder="•••• •••• •••• ••••" /> 
                                </div>
                                
                                <br></br>

                                <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group"> 
                                            <label for="cc-exp" className="control-label">CARD EXPIRY</label>
                                            <input id="cc-exp" type="month" className="form-control"  />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group"> <label for="cc-cvc" className="control-label">CARD CVC</label>
                                            <input id="cc-cvc" type="mobile" className="form-control" placeholder="••••" /> 
                                            </div>
                                        </div>
                                </div>
                                
                                <br></br>
                                <div className="form-group"> 
                                        <label for="holder-name" className="control-label">CARD HOLDER NAME</label> 
                                        <input type="text" className="form-control" />
                                </div>
                                
                                <br></br>
                               
                        
                                <div className="card-footer"> 
                                   <div className="col-md-12 text-center">
                                        <button onClick={this.createTicket} className="subscribe btn btn-primary btn-block shadow-sm"> Make Payment </button>
                                    </div> 
                                </div>
                                             </div>
                                         </div>
                                   </div>                           
                            </div>
                       </div>
                   </div>
                </div>
            </div>           
                 
        </div>
        <Footer />
		</div>
         );
    }
}

export default withRouter(Payment);