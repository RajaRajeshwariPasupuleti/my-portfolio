
import './App.css';

import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";

import Mynavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from './components/my-carousal/my-carousal.component';
import Mytitlemessage from './components/my-titlemessage/my-titlemessage';

import Container from "react-bootstrap/Container";
import About from './pages/about/my-about.component'
import BackgroundAboutImg from "./assests/icons/Home-BkG.jpg";


function App() {
  return (
    <div className="App">
      <Mynavbar /> 
      <MyCarousal />
      <Mytitlemessage />

      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={BackgroundAboutImg}
          bgImageAlt= ""
          strength={200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade interval={500} >
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default App;
