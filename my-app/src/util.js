import React from 'react';
import { toast} from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer  } from 'react-toastify';

export const successToast = (msg) => {
    toast.success(msg, {
        position: "top-right",
       
    });
}
export const errorToast = (msg) => {
    toast.error(msg, {
        position: "top-right",
     
    });
}
<ToastContainer position='top-right' />