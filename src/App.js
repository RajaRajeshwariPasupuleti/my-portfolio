
import './App.css';

import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";

import Mynavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from './components/my-carousal/my-carousal.component';
import Mytitlemessage from './components/my-titlemessage/my-titlemessage';
import ScrollDown from './components/scroll-down/scroll-down.component';

import Container from "react-bootstrap/Container";
import About from './pages/about/my-about.component'
import BackgroundAboutImg from "./assests/icons/Home-BkG.jpg";

import Skills from './pages/about/Tech-Skills/Tech-Skills.component';

import Experience from "./pages/about/work-experience/work-experience.component";

import Projects from './pages/about/Projects/projects.components';

import Contact from './pages/about/contact-form/contactform.component';

import FooterPanel from './components/my-footer/footer.component';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Mynavbar /> 
       
      

      <Switch>
                
                <Route path="/Skills"><Skills /></Route>
                <Route path = "/experience"><Experience /> </Route>
                <Route path = "/projects"><Projects /> </Route>
                <Route path = "/">
                  <>
                
                    <MyCarousal />
                    <Mytitlemessage />                
                    <ScrollDown />

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
                    <Contact />
                    <FooterPanel />
                  </>
                </Route>
      </Switch>

      

    </div>
  );
}

export default App;
