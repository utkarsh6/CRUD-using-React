import React, { useState, useEffect } from 'react';

import {Link, useNavigate,useParams } from 'react-router-dom';


export default function Empedit() {
  const{empid}=useParams();

  const[id,setId]=useState('');
  const[name,setName]=useState('');
  const[phone,setPhone]=useState('');
  const[mail,setMail]=useState('');
  const navigation=useNavigate('');

  useEffect(()=>{
    if(empid){
    fetch("http://localhost:3005/Emp/"+empid).then((res)=>{
      return res.json();}).then((res)=>{
        console.log(res);
        setId(res.id);
        setName(res.name);
        setPhone(res.phone);
        setMail(res.mail);
     
   
      
  
      }).catch((err)=>{
        console.log(err)
     
      
    })
      
  }
   },[])


  const handleSubmit=(e)=>{
    e.preventDefault();
    
  const empdata={id,name,mail,phone}
    
      fetch("http://localhost:3005/Emp/"+empid, {method:"PUT",headers:{"content-type":"application/json"},
      body:JSON.stringify(empdata)
    
    }).then((res)=>{

        return res.json().then((res)=>{
          console.log(res);
          alert("Record edited ")
          navigation('/')       
        })

        }).catch((err)=>{
          console.log("error")   
      })
  }
  return(
 <div>
  <form onSubmit={handleSubmit}>
  <div className="mt-5">
    <label  className="form-label"required >Name </label>
    <input type="text" value={name} onChange={e=>{setName(e.target.value)}}className="form-control"  aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label className="form-label"required>Email</label>
    <input type="email"  value={mail} onChange={e=>{setMail(e.target.value)}}className="form-control" />
  </div>

  <div className="mb-3">
    <label  className="form-label" required>Contact no</label>
    <input type="number" value={phone} onChange={e=>{setPhone(e.target.value)}}className="form-control" />
  </div>
  <div>
  <button type="submit" className="btn btn-primary m-1">Submit</button>
  <Link to="/" className='btn btn-success'>  Back </Link>
  </div>
 
</form>


  


 </div>
  )
}
 