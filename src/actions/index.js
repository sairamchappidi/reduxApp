import axios from 'axios';

import {FETCH_DATA,
        REQUESTED_DATA,
        REQUESTED_SUCCESS,
        REQUESTED_FAILED} from '../constants';

import data from '../data/points.js';

export function fetchData(){
   			axios.get('https://api.myjson.com/bins/mzspv').then((response)=>{
                        console.log(response.data);
                        dispatch(asyncRequestSuccess(response.data.teams));
                        
               }).catch((error)=>{
                        dispatch(asyncRequestfailed());
               })
}
export const fetchRequest = ()=>{
    return {
        type:REQUESTED_DATA
    }
}
export const asyncRequestSuccess = (response)=>{
    return {
        type:REQUESTED_SUCCESS,
        payLoad:response
    }
}
export const asyncRequestfailed = ()=>{
    return {
        type:REQUESTED_FAILED,
        inprogress:false,
        errorMsg:'Async Requested failed'
    }
} 
export const asyncFetch = ()=>{
   return ((dispatch)=>{
                    dispatch(fetchRequest());
                    axios.get('https://api.myjson.com/bins/mzspv').then((response)=>{
                                console.log(response.data);
                                dispatch(asyncRequestSuccess(response.data.teams));
                                
                       }).catch((error)=>{
                                dispatch(asyncRequestfailed());
                       })
   })
}