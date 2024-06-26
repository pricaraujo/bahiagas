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
    <><Card style={{ width: '18rem', margin: '10px', boxShadow: '0 0 10px gray' }}>
      <Card.Body>
        <Card.Title>MovPro</Card.Title>
        <Card.Text>
        Programação de volume de gás e alocação com restrições contratuais.
        </Card.Text>
        <Link to='/'><Button>Não Disponível</Button></Link>
      </Card.Body>
    </Card><Card style={{ width: '18rem', margin: '10px', boxShadow: '0 0 10px gray' }}>
        <Card.Body>
          <Card.Title>MixPro</Card.Title>
          <Card.Text>
          Modelagem da rede de distribuição. Simulações e otimização em múltiplos cenários.
          </Card.Text>
          <Link to='/moduleview'><Button>Acessar</Button></Link>
        </Card.Body>
      </Card><Card style={{ width: '18rem', margin: '10px', boxShadow: '0 0 10px gray' }}>
        <Card.Body>
          <Card.Title>Control</Card.Title>
          <Card.Text>
          Módulo de controle automático com elemento final de controle
          </Card.Text>
          <Link to='/'><Button>Não disponível</Button></Link>
        </Card.Body>
      </Card><Card style={{ width: '18rem', margin: '10px', boxShadow: '0 0 10px gray' }}>
        <Card.Body>
          <Card.Title>IA</Card.Title>
          <Card.Text>
         Medições integradas, resultados precisos e identificação de padrão
          </Card.Text>
          <Link to='/'><Button>Não disponível</Button></Link>
        </Card.Body>
      </Card>
    <Card style={{ width: '18rem', margin: '10px', boxShadow: '0 0 10px gray' }}>
        <Card.Body>
          <Card.Title>Otimização</Card.Title>
          <Card.Text>
          Maximização de rendimento e minimização dos custos.
          </Card.Text>
          <Link to='/viewsupplier'><Button>Acessar</Button></Link>
        </Card.Body>
      </Card></>
  );
}

export default BasicExample;
