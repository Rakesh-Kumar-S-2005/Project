import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping,faHouse,faBoxOpen} from'@fortawesome/free-solid-svg-icons'
import {Outlet,NavLink} from 'react-router'
import './Css/SearchBar.css';

function Navigate() {
  return (
    <>
    <nav className="navbar bg-black" style={{borderRadius:"5px",padding:"10px",margin:"10px",display:"flex"}}>
      <img style={{ width: "50px",height: "50px",borderRadius: "50%",overflow: "hidden"}} src="https://i.pinimg.com/736x/b3/9e/0a/b39e0ab81d3e71fe9690bbf825c21d17.jpg"></img>
      <h2 className='navbar-brand' style={{color:"white",fontFamily:"cursive"}}>The Boyz</h2>
      <NavLink to="/" style={({ isActive }) => ({
                    color:"white",
                    backgroundColor:isActive?"white":"black",
                    border: isActive ? "2px solid white" : "None",
                    color:isActive?"black":"white",
                    borderRadius:"4px",
                    fontWeight: "normal",
                    textDecoration: "none",
                    padding:"15px"
                })}><FontAwesomeIcon icon={faHouse} /> Home </NavLink>
      <NavLink to="/Add_To_Cart" style={({ isActive }) => ({
                    backgroundColor:isActive?"white":"black",
                    border: isActive ? "2px solid white" : "None",
                    borderRadius:"4px",
                    color:isActive?"black":"white",
                    fontWeight: "normal",
                    textDecoration: "none",
                    padding:"15px"
                })}><FontAwesomeIcon icon={faCartShopping} /> Your Cart </NavLink>
      <NavLink to="/Orders" style={({ isActive }) => ({
                    backgroundColor:isActive?"white":"black",
                    border: isActive ? "2px solid white" : "None",
                    borderRadius:"4px",
                    color:isActive?"black":"white",
                    fontWeight: "normal",
                    textDecoration: "none",
                    padding:"15px"
                })}><FontAwesomeIcon icon={faBoxOpen} /> Your Orders </NavLink>
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button style={{color:"white",border:"2px solid white"}} variant="black">Search</Button>
          </Form>
    </nav>
    <Outlet/>
    </>
  );
}

export default Navigate;