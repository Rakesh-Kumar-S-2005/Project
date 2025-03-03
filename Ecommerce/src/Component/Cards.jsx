import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import "./Css/Cards.css"


function Cards(props) {
  const navigate = useNavigate();
  const toNavigate = () => {
    navigate('/Product', { state: { name: props.BrandName, det: props.Details, imgl: props.img ,id:props.id} })
};
  return (
    <Card className='hovering' style={{ width: '18rem', margin:"5px"}}>
      <Card.Img style={{width:"100%",height:"25vw",overflow:"hidden"}} variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.BrandName}</Card.Title>
        <Card.Text>
          {props.Details}
        </Card.Text>
      </Card.Body>
       <Button onClick={toNavigate} className="btn btn-dark btn-sm btn-block" >See Details</Button>
    </Card>
  );
}

export default Cards;