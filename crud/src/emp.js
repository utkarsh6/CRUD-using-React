import React,{useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom';
export default function Emp() {
 const[empdata,setempdata]=useState(null);
 const navigation= useNavigate();

 const deleteContent=(id)=>{
  console.log(id)

  if(window.confirm("Are you sure you want to delete ")){  
  fetch("http://localhost:3005/Emp/"+id, {method:"DELETE"}
).then((res)=>{
    return res.json().then((res)=>{
      console.log(res);
      alert("Record deleted ");
      navigation('/')   ;
      window.location.reload(false)    
    })
    }).catch((err)=>{
      console.log("error")   
  })
 }
 }

 const loadContent=(id)=>{
  navigation('empdata/'+id);
 }



 useEffect(()=>{
  fetch("http://localhost:3005/Emp").then((res)=>{
    return res.json().then((res)=>{
      console.log(res);
      setempdata(res);
    })
    

    }).catch((err)=>{
      console.log(err)
   
    
  })
    
  
 },[])
  return (
    <div className='row'>
      <div className='container'>
        <div className='card'>
          <div className='card-title'>
            <h2> CRUD </h2>
          </div>
          <div>
            <Link to={"/add"} className=' btn btn-primary'> Add new Employee +</Link>
          </div>
          <div className='card-body'>
            <table className='table table-border' >
              <thead className='bg-primary text-white'>
                <tr>
                  <td>Id</td>
                  <td>name</td>
                  <td>Phone</td>
                  <td>Mail</td>
                  <td>Action</td>
                </tr>
              </thead>

              <tbody>
                {
                  //conditional rendering  if empdata is not null or undefine then it will go to map function
                  empdata && empdata.map((item)=>{
                    //map returns a jsx component
                    return(
                      <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.mail}</td>
                      <td>{item.phone}</td>
                      
                      <td>
                        <button onClick={()=> loadContent(item.id)} className=' btn btn-dark m-1' type='submit'>Edit</button>
                        
                        <button onClick={()=> deleteContent(item.id)} className=' btn btn-danger' type='submit'>Delete</button>
                      </td>
                    </tr>
                    )
                    

                  })
                }
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
 
  )
}
