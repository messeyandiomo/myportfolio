import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

const Home = () => {
  return (
    <main className="vh-100 mt-md-0">
      <Carousel interval={2000}>
        <Carousel.Item>
          <Link to={"/about"} className={"homeLinkStyle"}>
            {<About />}
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to={"/work"} className={"homeLinkStyle"}>
            {<Work />}
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to={"/contact"} className={"homeLinkStyle"}>
            {<Contact />}
          </Link>
        </Carousel.Item>
      </Carousel>
    </main>
  );
};

export default Home;
