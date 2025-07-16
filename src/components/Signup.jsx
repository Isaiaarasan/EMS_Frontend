import { useState } from "react"
import  axios  from "axios";
const Signup=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [userName,setUserName]=useState("");
    const [roles,setRoles]=useState("");
    async function addNewEmployee(e){
       e.preventDefault();
       const roleArray=roles.split(',').map(role=>role.trim())
       const req=await axios.post("http://localhost:3001/api/auth",{name,email,password,userName,roles:roleArray});
      console.log(req.data);
      if(req.data){
        alert(req.data);
      }
      else{
        alert("Failed");
      }
    }

 return(
    <section>
        <h2>SignUp</h2>
        <div>
            <form onSubmit={addNewEmployee}>
                <label htmlFor="name">Employee Name: </label>
                <input type="text" id="name" name={name} onChange={e=>setName(e.target.value)}/><br/><br/>
                <label htmlFor="email">Employee Email: </label>
                <input type="email" id="email" name={email} onChange={e=>setEmail(e.target.value)}/><br/><br/>
                <label htmlFor="password">Employee Password: </label>
                <input type="password" id="password" name={password} onChange={e=>setPassword(e.target.value)}/><br/><br/>
                <label htmlFor="name">Employee userName: </label>
                <input type="text" id="userName" name={userName} onChange={e=>setUserName(e.target.value)}/><br/><br/>
                <label htmlFor="name">Employee roles: </label>
                <input type="text" id="roles" name={roles} onChange={e=>setRoles(e.target.value)}/><br/><br/>
                <button type="submit">Submit</button><br /><br />
            </form>
        </div>
    </section>
 )
}
export default Signup;