import { Card, Button } from "react-bootstrap";
import RateStarFix from './RateStarFix.js'


export default function MovieCard(props) {
  
  return (
    <div  >
      
        <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.da.img} height={456} width={250}/>
        <Card.Body>
      <Card.Title>{props.da.title}</Card.Title>
          <Card.Text>
            {props.da.description}
          </Card.Text>
          <Button variant="primary">WATCH TRAILER</Button>
        </Card.Body>
        <RateStarFix r={props.da.rate}/>
      </Card>
      
    </div>
  );
}
