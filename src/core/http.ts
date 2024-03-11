import axios from "axios";

export class Api {
    connect(){
        const baseUrl = process.env.REACT_APP_BASEURL
        const instance = axios.create({
            baseURL: baseUrl,
            headers:{
                "Content-Type": "application/json"
            }
        })
        return instance
    }
}