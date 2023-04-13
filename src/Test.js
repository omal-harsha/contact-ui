import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export const Test = () => {
  return (
    <div>
        <ToastContainer position='top-center'>
            <h2>Hello react</h2>
        </ToastContainer>
    </div>
  )
}
