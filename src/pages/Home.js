import { Carousel } from "react-bootstrap";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

const Home = () => {
  return (
    <main className="vh-100 mt-md-0">
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            src={
              window.innerWidth < 769
                ? require("../imgs/slide-sm-2.png")
                : require("../imgs/slide-2.png")
            }
            className="img-fluid"
            alt=""
            width="100%"
            height="auto"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            src={
              window.innerWidth < 769
                ? require("../imgs/slide-sm-3.png")
                : require("../imgs/slide-3.png")
            }
            className="img-fluid"
            alt=""
            width="100%"
            height="auto"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            src={
              window.innerWidth < 769
                ? require("../imgs/slide-sm-4.png")
                : require("../imgs/slide-4.png")
            }
            className="img-fluid"
            alt=""
            width="100%"
            height="auto"
          />
        </Carousel.Item>
      </Carousel>
    </main>
  );
};

export default Home;
