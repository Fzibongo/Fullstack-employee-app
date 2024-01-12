
import { useState } from "react";


function Add(props){
  const [name,setName] = useState('');
  const [surname,setSurname] = useState('');
  const [email,setEmail] = useState('');
  const [idnumber,setIdnumber] = useState('');
  const [phonenumber,setPhoneNumber] = useState('');
  const [position,setPosition] = useState('');

    const addNewEmployee = () => {
        let userData = {
          firstName: name,
          lastName: surname,
          email: email,
          idnumber: idnumber,
          phonenumber: phonenumber,
          position: position,
          
          
        };
        fetch('http://localhost:8080/addemployee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then(result => {
            console.log("result: ", result);
          
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
      }
      
        
        return (
          <div className="App">
              <h1>Employee Details </h1>
            <input type="text" placeholder="employee name" onChange={(event)=> setName (event.target.value)}/>
            <input type="text" placeholder="employee surname" onChange={(event)=> setSurname (event.target.value)}/>
            <input type="text" placeholder="employee idnumber" onChange={(event)=> setIdnumber (event.target.value)}/>
            <input type="text" placeholder="employee phonenumber" onChange={(event)=> setPhoneNumber (event.target.value)}/>
            <input type="text" placeholder="employee position" onChange={(event)=> setPosition (event.target.value)}/>
            <button  onClick={addNewEmployee}>addemployee</button>
          </div>
        );
      }
      
export default Add;