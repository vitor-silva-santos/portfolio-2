import "./style/animationScrool.scss";
import "./style/app.scss";
import {
  AboutMe,
  Footer,
  Header,
  NavBar,
  Projects,
  Skills,
} from "./components";

import config from "react-reveal/globals";

import Fade from "react-reveal/Fade";

config({ ssrFadeout: true });

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Fade left>
          <Header />
        </Fade>

        <Fade right>
          <AboutMe />
        </Fade>

        <Fade left>
          <Skills />
        </Fade>

        <Fade right>
          <Projects />
        </Fade>
        <Footer />
      </main>
    </div>
  );
}

export default App;
