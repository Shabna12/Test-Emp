import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'




function Create() {

    const navigate = useNavigate()
     
    const [inputData,setInputData] = useState({
        name: '',
        email: '',
        status:''
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('https://te-server-1.onrender.com/users', inputData)
        .then(res=>{
            alert("Data Saved Successfully !!")
            navigate('/')
        })
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-dark'>
        <div className="w-50 border bg-warning text-light p-5">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name :</label>
                    <input type="text" name='name' className='form-control' onChange={(e)=> setInputData({...inputData, name: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="email">Email id :</label>
                    <input type="text" name='name' className='form-control' onChange={(e)=> setInputData({...inputData, email: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="status">Status :</label>
                    <input type="text" name='status' className='form-control' onChange={(e)=> setInputData({...inputData, status: e.target.value})} />
                </div>
                <br /> <br />
                <button className='btn btn-outline-success'>SUBMIT</button>
            </form>
        </div>
    </div>
  )
}

export default Create