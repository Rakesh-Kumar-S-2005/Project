import Arr from './Data/Data'
import Cards from "./Cards";
import {Row}from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faFaceSadTear,faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
function AddToCart()
{
    const navi=useNavigate()
    function setOutCart()
    {
        Arr.filter((i)=>i.isCart).map((e)=>e.isCart=false)
        navi('/Add_To_Cart',{replace:true})
    }
    const added=Arr.filter((i)=>i.isCart)
    if(added.length==0)
    {
    return( <div style={{color:"gray",justifyItems:"center",padding:"20%"}}>
        <FontAwesomeIcon style={{height:"50px",width:"50px"}} icon={faFaceSadTear} />
    <h1>No things has been Added</h1>
    </div>)
    }
    else
    {
    return(
    <>
    <div>
    <button style={{
        position:"absolute",
            top:"90px",
            right:"0px",
            padding:"10px",
            marginTop:"5px",
            marginRight:"10px",
            marginLeft:"10px",
            marginBottom:"10px"
        }} onClick={setOutCart}><FontAwesomeIcon icon={faTrash} />Remove All</button>
        </div>
    <h1 style={{marginLeft:"10px"}}><FontAwesomeIcon icon={faBagShopping} />Cart</h1>
    <Row xs={4} sm={4} md={4} style={{ margin: "10px" }}>
    {added.map((e) => {
      return <Cards img={e.img} BrandName={e.BrandName} Details={e.Details} Lin={e.Lin}/>;
    })}
  </Row>
        
        </>
    );
    }
}
export default AddToCart;