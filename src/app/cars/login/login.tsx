import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target[0].value
        const password = e.target[1].value
        console.log(username);
        console.log(password);
    }

    return (
        <div className='d-flex justify-center'>
            <form className="shadow-xl rounded-xl w-[400px] h-[400px] mt-5 p-5" >
                <h1 className='text-center'>login</h1>

                <input type="text" className='form-control shadow-md my-4' placeholder='username' />
                <input type="password" className='form-control shadow-md my-4' placeholder='password' />

                <button onSubmit={handleSubmit} className='btn btn-success'>send</button>
                <p className='mt-4'>password : password username : username</p>
            </form>
        </div>
    )
}

export default login