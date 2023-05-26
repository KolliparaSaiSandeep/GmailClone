import {useState} from 'react';
import API from '../services/api'

const useAPI=(urlObject)=>{
    const [response,setResponse]=useState(null);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState("");
    
    const call=async(payload)=>{
        setResponse(null);
        setError("");
        setLoading(true);
        try{
            let res=await API(urlObject,payload);
            setResponse(res.data);
        }catch(error){
            setError(error.message);
        }
    }

     return{call,response,error,loading};
}

export default useAPI;