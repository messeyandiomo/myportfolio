import { Carousel, CarouselItem } from "react-bootstrap";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

const Home = () => {
  return (
    <main className="vh-100 mt-md-0">
      <Carousel>
        <CarouselItem interval={2000}>{<About />}</CarouselItem>
        <CarouselItem interval={2000}>{<Work />}</CarouselItem>
        <CarouselItem interval={2000}>{<Contact />}</CarouselItem>
      </Carousel>
    </main>
  );
};

export default Home;
