import axios from 'axios';

const Book_Rest_api_url = "http://localhost:8099/sorta/name"
const userurl = "http://localhost:8099/displayuser"

class ModalEntity{
    
    getBooks(){
        return axios.get(Book_Rest_api_url);
    }

    getUser(){
        return axios.get(userurl);
    }
}

export default new  ModalEntity();