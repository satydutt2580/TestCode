// shortcut type rfc then press enter

import React,{useRef} from 'react'
//useRef()
//in react keyword starts with use, Hooks(Built in React Functional components)

//helps us to manipulate any html types 
//getElementbyId()

export default function Login() {
//created reference variable using us
    
   //it is similar to id concept
   //special reference variable in react
    var x1 = useRef()
        
    var x2 = useRef()

    var x3 = useRef()

    function myfunc(){
      
        // alert('welcome') //show alert text box
        // console.log(x1);
        // console.log(x2);
        // console.log(x3);

//will put data to node js
      var dataToStore = {
        username: x1.current.value,
        userage: x2.current.value,
        userlocation: x3.current.value,
      }
    console.log(dataToStore);

    fetch('http://localhost:9000/api/addUsers',{
          method: 'POST' ,
          body:JSON.stringify(dataToStore),
          //converting objects into string
          headers: {
            'Content-Type' :  'application/json'
          }
    })
.then(res => {
   //SENDING INFORMATION FROM FRONTEND TO BACKEND
   console.log("Response from Node js")
  console.log(res);
})
.catch(err =>{
 
  console.log(err);
})

    .then()
    .catch()
       
    }
  return (
    <div>
        <input ref={x1} type = 'text' placeholder = 'name' />
         <br />
        <input ref={x2} type = 'text' placeholder = 'age' /> 
        <br />
        <input ref={x3} type = 'text' placeholder = 'place' /> 
        <br />

        <button onClick={myfunc}className='brn btn-dark'>Login</button>



    </div>
  )
}
