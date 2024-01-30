import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../Redux/Actions';

const CardContact=({el})=>{
    const dispatch = useDispatch()
    return(
        <Card style={{ width: '300px', height: '200px', marginLeft: '20px', marginTop: '20px' }}>
            <Card.Body>
                <Card.Title>{el.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{el.age}</Card.Subtitle>
                <Card.Text>
                    {el.email}
                </Card.Text>
                <div style={{display: 'flex', flexDirection:'row', justifyContent: 'space-evenly'}}>
                    <Card.Link as={Link} to={`/EditContact/${el._id}`}>Edit</Card.Link>
                    <Button onClick={()=>dispatch(deleteContact(el._id))} variant='danger'>Delete</Button>
                </div>
            </Card.Body>
        </Card>
    )
}
export default CardContact