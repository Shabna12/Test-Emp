import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link, useNavigate } from 'react-router-dom'


function Home() {


    const [data, setData] = useState([])

    const navigate = useNavigate()

    useEffect(() =>{
        axios.get('http://localhost:3000/users')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

  
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
         <Container>
             <Navbar.Brand href="#home">
                 <img width={'50px'} height={'50px'} src="https://c8.alamy.com/comp/M709YA/employees-blue-flat-design-web-icon-M709YA.jpg" alt=""  />
                 Employee Center
             </Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="ms-auto">
                 <Nav.Link href="#home">Home</Nav.Link>
                 <Nav.Link href="#link">Link</Nav.Link>
                 <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                           Another action
                      </NavDropdown.Item>
                  </NavDropdown>
              </Nav>
              </Navbar.Collapse>
          </Container>
       </Navbar>

       {/* contents */}
       <div className='container mt-5'>
          <h2>Employee Details :    <Link to={"/create"} className='btn btn-outline-dark fw-bolder fs-3'> + </Link>   </h2> 
       </div>
       <div className='container mt-5'>
        <table className='table shadow'>
        <thead>
            <tr>
              <th>Id</th>
              <th>Username</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d,i)=>(
                <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.status}</td>
                <td>
                   <Link to={`/update/${d.id}`}><button className='btn btn-success'>Update</button> </Link>
                   <button onClick={(e)=>handleDelete(d.id)} className='btn btn-danger'>Delete</button> 
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
       </div>
    </>
    
  )

  function handleDelete(id) {
    if (confirm) {
        const confirm = window.confirm("Do you wish to DELETE ?")
        axios.delete('http://localhost:3000/users/'+id)
        .then(res =>{
            alert("Data Deleted !!")
            navigate('/')
        })        
    }
  }




}

export default Home