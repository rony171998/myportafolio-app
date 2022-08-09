import "./App.css";
import "./styles/styles.css";
import {
    NavBar,
    Profile,
    Aboutme,
    Skills,
    Proyects,
    Contactme,
    Footer,
} from "./components";
import { Container } from "react-bootstrap";


function App() {
    return (
        <div className='App '>
            <NavBar />
            <Container>
                <Profile />
                <Aboutme/>
                <Skills />
            </Container>
            <Proyects />
            
            <Container>
                <Contactme />
                
            </Container>
            <Footer />
        </div>
    );
}

export default App;
