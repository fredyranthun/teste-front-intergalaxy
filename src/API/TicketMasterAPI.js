import axios from "axios";
const API_TICKET_MASTER = 'Ohm4mlkcQTSfyBovUQeMfXBIiJOKEiCp'

export default axios.create({
    baseURL: "https://app.ticketmaster.com/discovery/v2/",
    params: {
        apikey: API_TICKET_MASTER,
        sort: 'relevance,desc'
    }
})