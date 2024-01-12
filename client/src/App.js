import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import Display from './components/display';
import Add from './components/add';

function App() {






const addNewEmployee = () => {
  let userData = {
    firstName: "Fezibongo",
    lastName: "Rubushe",
    email: "Rubushefezibongo@gmail.com"
    
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
     <Display/>
     <Add/>
    </div>
  );
}

export default App;
