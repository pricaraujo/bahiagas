import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {
  Switch,
  Route,
  Link,
  BrowserRouter as Router
} from "react-router-dom"

function BasicExample() {
  return (
    <Card style={{ width: '18rem', margin: '10px', boxShadow: '0 0 10px gray' }}>
      <Card.Body>
        <Card.Title>Módulo</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card.Text>
        <Link to='/moduleview'><Button>Saiba Mais</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;