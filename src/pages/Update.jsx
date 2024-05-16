import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function Update() {
    const {id} = useParams()
    
    useEffect(() =>{
        axios.get('https://te-server-1.onrender.com/users' +id)
        .then(res => setInputData(res.data))
        .catch(err => console.log(err))
    }, [])


    

    const navigate = useNavigate()
     
    const [inputData,setInputData] = useState({
        name: '',
        email: '',
        status: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.put('https://te-server-1.onrender.com/users/'+id, inputData)
        .then(res=>{
            alert("Data Updated Successfully !!")
            navigate('/')
        })
    }


  return (
    <>
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className="w-50 border bg-warning text-light p-5">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name :</label>
                    <input type="text" name='name' className='form-control' value={inputData.name} onChange={(e)=> setInputData({...inputData, name: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="email">Email id :</label>
                    <input type="text" name='name' className='form-control' value={inputData.email} onChange={(e)=> setInputData({...inputData, email: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="status">Status :</label>
                    <input type="text" name='status' className='form-control' value={inputData.status} onChange={(e)=> setInputData({...inputData, status: e.target.value})} />
                </div> <br /> <br />
                <button className='btn btn-outline-success'>UPDATE</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Update