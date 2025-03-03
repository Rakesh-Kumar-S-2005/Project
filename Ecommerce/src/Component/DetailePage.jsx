import "./Css/Detail.css"
import { useLocation } from "react-router-dom";
import Arr from './Data/Data'
function DisplayDetails()
{
        const loc=useLocation();
        const pro=loc.state;
        function setInOrder()
        {
            Arr.filter((i)=>i.id==pro.id).map((e)=>e.isOrder=true)
        }
        function setInCart()
        {
           Arr.filter((i)=>i.id==pro.id).map((e)=>e.isCart=true)
        }
    return (
        <div className="Row" style={{display:"flex",flexFlow:"row",borderRadius:"4px"}}>
            <div className="Col"style={{borderRadius:"3px",boxShadow:"4px 4px 4px 4px gray",height:"650px",width:"500px",margin:"20px"}}>
            <img style={{height:"100%",width:"100%",objectFit:"fill"}} src={pro.imgl}></img>
            </div>
            <div  className="Col" style={{boxShadow:"4px 4px 4px 4px gray",borderRadius:"4px",margin:"20px",padding:"50px",height:"650px",width:"895px"}}>
                <h1>{pro.name}</h1>
                <br></br>
                <h3>{pro.det}</h3>

                <p style={{fontSize:"25px"}}>₹699</p>
                <p style={{color:"gray",fontSize:"20px",textDecorationLine:"line-through"}}>₹1000</p>
               
                <button onClick={setInOrder} className="btn btn-light">Buy Now</button>
                <button onClick={setInCart}  className="btn btn-dark">Add to cart</button>
            </div>
        </div>
    );

}
export default DisplayDetails