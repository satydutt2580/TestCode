import Login from "./Login";
import M1 from "./M1";
import M2 from "./M2";
import Product from "./Product";

function Home(){

    return(
      //code copied from Bootstrap website ,column
        // link-  https://getbootstrap.com/docs/5.3/layout/columns/
     
        <div class="container text-center">
  <div class="row">
    <div class="col">
      <Product name="Fasttrack" price="100" path ="https://rukminim2.flixcart.com/image/612/612/xif0q/watch/p/p/q/-original-imagrgwxegpbby52.jpeg?q=70" />
    </div>
    <div class="col">
    <Product name="Titan" price="100" path ="https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/g/f/-original-imagrk9rypmyhjmq.jpeg?q=70" />
    </div>
    <div class="col">
    <Product name="Titan" price="100" path ="https://rukminim2.flixcart.com/image/612/612/xif0q/watch/l/z/9/-original-imagvwscbxmnakv7.jpeg?q=70" />
    
    </div>
    <div class="col">
      <h3>Event Handling</h3>
      <Login />
    </div>
    
  </div>

  <div className="row">
      <div className="col-3">
        <M1 name = "satya" age="20"/>
      </div>
      <div className="col-3">
        
        <M2 name = "pooja" age = "20"/>
      </div>
    </div>


</div>
    
  
    
    )
}

export default Home;