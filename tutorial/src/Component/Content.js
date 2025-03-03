import { useState } from "react";
import "./Styleforlearn1.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import me from "./me.jpg";
export const Content=()=>{
   
    return ( 
    <div className="secondary">
        <img className="image" src={me}></img>
        <h1 className="importa">Hi! I am Rakesh Kumar......</h1>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={me} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
           );
}