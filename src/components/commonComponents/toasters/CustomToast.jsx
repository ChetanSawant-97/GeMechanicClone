import React from 'react'
import { ToastContainer} from 'react-toastify';

const CustomToast = () => {
  return (
    <div>
       <ToastContainer
                position='top-right'
                autoClose={3500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='colored'
            />
    </div>
  )
}

export default CustomToast