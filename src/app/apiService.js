import React from 'react'
import { BASE_URl } from './config'
import axios from 'axios'

const apiService = axios.create({baseURL: BASE_URl});

apiService.interceptors.request.use(
    (request)=>{
        console.log("Request", request);
        return request;
    },
     function (error) {
        console.log("REQUEST ERROR", error);
        return Promise.reject(error);
      }
)

apiService.interceptors.response.use(
    (response)=>{
        console.log("Reponse", response);
        return response;
    },
    function (error) {
        console.log("REQUEST ERROR", error);
        return Promise.reject(error);
    }
)

export default apiService