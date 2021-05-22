import axios from "axios"

export default class BookingService {
    constructor() {
        this.uri = "http://localhost:8980/book";
    }

    async addBooking(numberOfSeatsToBook,source,destination,date) {
        return await axios.post(this.uri+"/booking",{numberOfSeatsToBook},
        {params:{"source":source,"destination":destination,"date":date}}).then(response => {
            console.log(response.data)
            if(response.data.length>3){
                alert(response.data)
                return response
            } else{
                localStorage.setItem("bid",parseInt(response.data))
                return response
            }
        })
    }

    async addPassengers(pass1){
        return await axios.post(this.uri+"/passenger/"+localStorage.getItem("bid"),pass1).then(response => {
            console.log(response.data)
        })
    }

    async generateTicket(ticket){
        const uid = JSON.parse(localStorage.getItem("user")).userId;
        return await axios.post(this.uri+"/ticket/"+uid+"/"+localStorage.getItem("bid")+"/1",ticket)
        .then(response => {
            console.log(response.data)
            localStorage.setItem("ticket",JSON.stringify(response.data))
            return response;
        })
    }

    async getTickets() {
        const uid = JSON.parse(localStorage.getItem("user")).userId;
        return await axios.get(this.uri+"/getTickets/"+uid)
        .then(response => {
            console.log(response.data)
            // localStorage.setItem("tickets",JSON.stringify(response.data))
            return response;
        })
    }

}