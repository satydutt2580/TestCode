//shortcut for generate the sample code
//{usestate} it is a component function,builtin function
import React,{useState,useRef,useEffect} from 'react'

//undefiend is the default value in javascript

//<M2 name ="kanya" age="7" />
export default function M2(props) {
//   console.log(props);


var[apidata,setApidata] = useState([]);
//Empty array will get replace by the received array

//once your page i.e component is loaded
//if there is change in any state variable

// useEffect( () => {
//     console.log('use effect called',Math.random());
// });

//useEffect with empty array will be called only once on page load
//if you wrote a component ,on  page refresh it call home 
useEffect( () => {
    console.log('use effect called',Math.random());
    // fetch('http://localhost:9000/api/selectUsers')
    // .then(res => {
    //     console.log(res);
    // })
    // .catch(err =>{
    //     console.log(err);
    // })

        fetch('http://localhost:9000/api/selectUsers')
        .then(res => res.json())
        .then(value =>{
            console.log(value);
            setApidata(value);
        });

},[]); //[] Empty array -when passed empty array use effect will called once
//if [] empty array 

  var x1= useRef();
  //it is for manipulating

  function myfunc(){
    props.age = 14;
  }

  // state variable, its a changable variable wthin a functional component
  // var[state variableName] = useState(initial value)
  // default value for variable in javascript is undefined

  var[counter,setCount]=useState(10);

  function f1(){
    setCount(counter + 5)
  }

  function p1(){
    console.log(x1);
    x1.current.innerHTML = 'MET CDAC MUMBAI';
    x1.current.style.background = 'rgb(255,0,0';
  }

  return (
    <div>
        <h3>M2 Functional Component</h3>
        <p>Props value : {props.name},{props.age}</p>
        <button onClick={myfunc}>Enter</button>
        <hr/>
        <button onClick={f1}>+</button>
        <button>-</button>
        <p>State value : {counter}</p> 
        <hr />
        <button onClick={p1}>Change</button>
        <p ref={x1}>HELLO WORLD</p>

<hr />
<table className='table'>
    {
        apidata && apidata.map(value =>
           <tr>
            <td>{value.usename}</td> 
            <td>{value.userage}</td> 
            <td>{value.userlocation}</td> 
            
            </tr>
            )
    }
</table>

    </div>
  )
}

//what value of xml http request .ready state in ajax in 

// props are only read only ,props value are not changeble,it is incoming values 