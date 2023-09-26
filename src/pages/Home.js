import { Carousel } from "react-bootstrap";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

const Home = () => {
  return (
    <main className="vh-100 mt-md-0">
      <Carousel>
        <Carousel.Item interval={2000}>{<About />}</Carousel.Item>
        <Carousel.Item interval={2000}>{<Work />}</Carousel.Item>
        <Carousel.Item interval={2000}>{<Contact />}</Carousel.Item>
      </Carousel>
    </main>
  );
};

export default Home;
