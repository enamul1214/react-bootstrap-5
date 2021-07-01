import { API_URL } from "../config/Constants";
import Axios from "axios";

const XHR = async (method, url, data = [], token = "") => {
    try {
        return await Axios({
            headers: { 'Authorization': 'Bearer ' + token },
            method: method,
            url: url,
            baseURL: API_URL,
            data: data
        });
    } catch (error) {
        console.log(error);
        return typeof error !== 'undefined' ? error : null;
    }
}

export default XHR;