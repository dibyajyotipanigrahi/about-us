import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselComponent from "./component/background";
import TwoSections from "./component/overview";
import ThreeCards from "./component/innovation";
import BackgroundVideo from "./component/video";
import FourCards from "./component/fourcard";
import 'intersection-observer';


function App() {
  return (
    <div className="app-container">
      <CarouselComponent className="carousel" />
      <TwoSections className="two-sections" />
      <BackgroundVideo className="background-video" />
      <FourCards className="four-cards" />
      <ThreeCards className="three-cards" />
    </div>
  );
}

export default App;
