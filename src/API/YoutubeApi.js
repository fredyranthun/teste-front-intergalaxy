import axios from "axios";
const API_KEY = 'AIzaSyDGQiSVZEFYDe-5rfz_dIOnLmVG0gqgKPo'

export default axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 10,
        type: "video",
        key: API_KEY
    },
    headers: {}
})