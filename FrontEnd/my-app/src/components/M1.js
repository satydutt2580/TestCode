import React from "react";

class M1 extends React.Component{
        //all properties inherited to M1
//all major functionalities except private properties
    constructor(){
        super();
        // super keyword can allowing us to call constructor from parent class
    //this is an object of current class
        console.log(this);

        //lets initialize state variable
        //state property must be a object
        this.state = {
            count:10,
            name:"akshay"
        }

        //lets initialize reference variable
        this.x1 = React.createRef();
    }
    myfunc(){
        this.props.age = 30;
    }

    f1(){
        this.setState({
            count: this.state.count + 5,
            name:"akshay patil"
        })
 }

 f2(){
    this.setState({
        count: this.state.count - 5,
        name:"akshay patil"
    })
}



    f3(){
        console.log(this.x1); //current (p tag)
        this.x1.current.innerHTML = 'Some Data';
        this.x1.current.style.background = '#a1b2c3';

    
    }

    //useEffect( () => {} , [] ); -will call api once
    componentDidMount(){
        console.log('did mount',Math.random());

        fetch('http://localhost:9000/api/selectUsers')
        .then(res => res.json())
        .then(value =>{
          console.log(value);
          
        });
    }

    //useEffect( () => {} ); -will call api many times
    componentDidUpdate(){

        // console.log('did mount',Math.random());

     
    }


    render(){
       //   // react fragmentation you are not allowed to return multiple element you have to pass this in single parent element
        //<> Empty tags are react fragmentation 

        return(
            <>
            <h3>M1 Class Component</h3>
            <p>Props value:{this.props.name}, {this.props.age}
            </p>
            {/* <button onClick={this.myfunc}>Enter</button> */}
            <button onClick={this.f1}>Enter</button>
            <hr />
            <button onClick={ () => {this.f1()}}>+</button>
            <button onClick={ () => {this.f2()}}>-</button>
            <p>State Values Are: {this.state.count}, {this.state.name}</p>

          
            

            <hr />
            <button onClick={ () => {this.f3()}}>Change</button>
            <p ref={this.x1}>HELLO WORLD</p>


            </>
        )
    }
}

export default M1;

// <> empy tages are react fregment tags 