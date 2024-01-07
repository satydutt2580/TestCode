// we are importing React Object,React-DOM object from

import React from 'react';
import  ReactDOM  from 'react-dom';
import App from './components/App';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import {
    // coiped from https://reactrouter.com/en/main/start/tutorial from  👉 Create and render a browser router in main.jsx
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Register from './components/Register';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

  //http://localhost:3000/  ==>Home
  //http://localhost:3000/aboutus  ==>Aboutus
  //http://localhost:3000/contactus  ==>contact us
  //http://localhost:3000/newuser  ==> Register
   const routerExample = createBrowserRouter([
    {
    path:"/",
    element:<App />,
    children:[
        {path:"" , element:<Home />},
        {path:"aboutus" , element:<About />},
        {path:"contactus" , element:<Contact/>},
        {path:"newuser" , element:<Register/>},
    
    ]
   }]);




// console.log(typeof React); //output:object
// console.log(typeof ReactDOM); //output:object

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render('Hello world'); //output:Hello world on webpage

//JSX---- syntax entension to java
//We may use html tags along with javascript functions or variables together 
//(special liabraries label compiler)


// var username ='satya';
// var userage = 20;

// root.render (<h1>Hello, username  </h1>) //ourtput :Hello, username ,not printing username because it should be written in{ }

// root.render(<h1>Hello , {username} , Age: {userage} </h1>)

//components was introduced by angular ..components are functions

// root.render(<App/>);
root.render(<RouterProvider router={routerExample}></RouterProvider>);
