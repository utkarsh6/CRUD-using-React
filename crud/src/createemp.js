import React,{useState} from 'react'
import { Link,Navigate, useNavigate } from 'react-router-dom'

export default function Createemp() {
  const[id,setid]=useState('');
  const[name,setname]=useState('');
  const[phone,setphone]=useState('');
  const[mail,setmail]=useState('');
  const navigation=useNavigate('');


  const handleSubmit=(e)=>{
    e.preventDefault();
    
  const empdata={id,name,mail,phone}
    
      fetch("http://localhost:3005/Emp", {method:"POST",headers:{"content-type":"application/json"},
      body:JSON.stringify(empdata)
    
    }).then((res)=>{

        return res.json().then((res)=>{
          console.log(res);
          alert("Employee Added")
          navigation('/')       
        })

        }).catch((err)=>{
          console.log("error")   
      })
  }

  return (
    <div >
      <form onSubmit={handleSubmit}>
  <div className="mt-5">
    <label  className="form-label"required >Name </label>
    <input type="text" value={name} onChange={e=>{setname(e.target.value)}}className="form-control"  aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label className="form-label"required>Email</label>
    <input type="email"  value={mail} onChange={e=>{setmail(e.target.value)}}className="form-control" />
  </div>

  <div className="mb-3">
    <label  className="form-label" required>Contact no</label>
    <input type="number" value={phone} onChange={e=>{setphone(e.target.value)}}className="form-control" />
  </div>
  <div>
  <button type="submit" className="btn btn-primary m-1">Submit</button>
  <Link to="/" className='btn btn-success'>  Back </Link>
  </div>
 
</form>

     
      
    </div>
  )
}
