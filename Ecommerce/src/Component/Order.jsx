import Arr from './Data/Data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast ,faPeopleCarryBox} from '@fortawesome/free-solid-svg-icons';
import {Row}from 'react-bootstrap'
import Cards from './Cards';
function Orders()
{
    const added=Arr.filter((i)=>i.isOrder)
    if(added.length==0)
    {
    return( <div style={{color:"gray",justifyItems:"center",padding:"20%"}}>
        <FontAwesomeIcon style={{height:"50px",width:"50px"}} icon={faTruckFast} />
    <h1>No Orders has been placed</h1>
    </div>)
    }
    else
    {
    return(
    <>
    <h1 style={{marginLeft:"10px"}}><FontAwesomeIcon icon={faPeopleCarryBox} />Order Recevied</h1>
    <Row xs={4} sm={4} md={4} style={{ margin: "10px" }}>
    {added.map((e) => {
      return <Cards img={e.img} BrandName={e.BrandName} Details={e.Details} Lin={e.Lin}/>;
    })}
  </Row>
        
        </>
    );
    }
}
export default Orders;