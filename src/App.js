import './App.css';
import { NavBar ,Profile , Skills ,Footer} from './componets';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Container>
        
        <Profile/>
        <Skills/>
        <Footer/>

      </Container>
      
    </div>
  );
}

export default App;
