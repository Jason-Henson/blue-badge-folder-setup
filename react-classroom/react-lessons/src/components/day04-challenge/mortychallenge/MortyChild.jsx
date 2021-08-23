import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody
} from 'reactstrap';

const MortyChild = (props) => {

    const {gender, name, image, species} = props.char

    return ( 
        <div>
    <Card>
        <CardImg top width="100%" src={image} alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h5">{name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <Button>Button</Button>
            </CardBody>
    </Card>
        </div>
     );
}
 
export default MortyChild;