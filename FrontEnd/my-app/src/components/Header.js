import React from "react";
import { Link } from "react-router-dom";

//functional components (stateless component)
//component must return something
//componets are independent,components are reusable
//Components first letter must be capital 

function Header(){

    return(
        //code copied from Bootstrap website ,navs and tab
        // link- https://getbootstrap.com/docs/5.3/components/navbar/#nav 

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                <Link class="nav-link active" aria-current="page" href="#">Home</Link>


              </li>
              <li class="nav-item">
                {/* <a class="nav-link" href="#">Aboutus</a> */}
                <Link class="nav-link active" aria-current="page" to="/aboutus">Aboutus</Link>


              </li>

              <li class="nav-item">
                {/* <a class="nav-link" href="#">Newuser</a> */}
                <Link class="nav-link active" aria-current="page" to="/newuser">Newuser</Link>


              </li>

              <li class="nav-item">
                {/* <a class="nav-link" href="#">Contact us</a> */}
                <Link class="nav-link active" aria-current="page" to="/contactus">Contact Us</Link>


              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <nav class ="col-lg-4">


<ul class="nav justify-content-end top-menu">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Login</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Register</a>
    </li>
    <button class="btn btn-warning"><i class="fa-solid fa-cart-shopping"></i>Cart</button>
  </ul>
</nav>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            
          </div>
        </div>
      </nav>
      
    )
}


export default Header;