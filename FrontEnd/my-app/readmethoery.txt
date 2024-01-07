14/12/2023

*React: 
    - React is only js framework which is use to connect with java and other backend language
    - Default port number of react: 3000
    - Create react project :    npx create-react-app folderName
    
*To start react:
    - npm start --> react-script start


*.gitignore:
    - when we uploading our project on git, gitignore will help us to if you want to not add some file to not upload in git so we mention this file in gitignore file

*Target Container:
    - React app will be rendered in div id root, this div is called as target Container
    
*React-Dom library:
    - Do the DOM Manipulation in react application
*React Library:
    - All major functionality availablle in react library
    like:
        -> FOLDER STRUCTURE
        -> COMPONENT
        -> PROPS
        -> STATE
        -> REF
        -> EVENT
        -> LISTING
        -> PROPS DRILLING
        -> CONTEXT
        -> STATE LIFT
        -> REACH-NODE INTEGRATION
        -> REACT ROUTER DOM
        -> ERROR BOUNDARY

JSX: Simple extenssion for javascript
    - we may use html tags along with js function or variables together ( spectial libraries -> babel compiler)
    - we can use html tag directly by using JSX in react

*COMPONENT:
    - Every small part of web page STRUCTURE
    - COMPONENT is nothing but it is js function but only condition is every function must be returning something and first character should be capital
    - It is also called as functional component bcoz component only depend on function
    - With react allow us to use your component as a html tag
    - we can use ref={} in html input tag which indicate or pass the value to funciton

*useRef():
    - is use to getting records or data from input
    - if any function start with "use"  it is known as HOoks function
    - Hooks function is built in   
    - getElementById()==useRef()--> perform DOM Manipulation


*NOTE:
    - if we get cors(CROSS ORIGIN REQUEST ERROR/NETWORK ERROR) which occurs when we both react and node application is diffenent then install cors library in server side(node)
        npm i cors