import React from 'react';
import '../assets/css/TicketStyle.css'

function Passengers(props) {
    return (
        <div>
            <div class="box">
            <ul class="left">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            
            <ul class="right">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div class="ticket">
                <span class="airline">BookMyFlight Airlines</span>
                <span class="boarding">Hyderabad</span>
                <div class="content">
                <span class="jfk">HYD</span>
                <span class="plane"><svg clip-rule="evenodd" fill-rule="evenodd" height="60" width="60" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><g stroke="#222"><line fill="none" stroke-linecap="round" stroke-width="30" x1="300" x2="55" y1="390" y2="390"/><path d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z" fill="#222" stroke-linejoin="round" stroke-width="10"/></g></svg></span>
                <span class="sfo">MUM</span>
                
                <div class="sub-content">
                    <span class="watermark">BookMyFlight</span>
                    <span class="name">Passenger Name<br />
                    <span>Polo J1</span> <br />
                    <span>Polo J2</span> <br />
                    <span>Polo J3</span> <br />
                    <span>Polo J3</span> <br />
                    <span>Polo J3</span> <br />
                    <span>Polo J3</span> <br />
                    </span>
                    <span class="flight">Flight No.&deg;<br />
                    <span>TK7434</span> <br />
                    </span>
                    <span class="gate">Gate <br /><span>26B</span></span>
                    <span class="seat">Seat <br /><span>45A</span></span>
                    <span class="boardingtime">Boarding Time<br /><span>18:45 12 MAY 2021</span></span>
                    <span class="departuretime">Departure Time<br /><span>23:45 12 MAY 2021</span></span>
                </div>
                </div>
                <div class="barcode"></div>
                <div class="barcode slip"></div>
            </div>
            </div>
            <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
        </div>
    )
}

export default Passengers;