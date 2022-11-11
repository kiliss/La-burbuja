import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import DetergenteVerde from "../assets/Carousel2/DetergenteVerde.jpg";
import DetergenteUltra from "../assets/Carousel2/DetergenteUltra.jpg";
import DetergenteLimon from "../assets/Carousel2/DetergenteLimon.jpg";
import Desodorantepino from "../assets/Carousel2/Desodorantepino.jpg";
import DesodoranteMisterio from "../assets/Carousel2/DesodoranteMisterio.jpg";
import DesodoranteLisoform from "../assets/Carousel2/DesodoranteLisoform.jpg";
import Desodorantelimon from "../assets/Carousel2/Desodorantelimon.jpg";
import DesodoranteLavanda from "../assets/Carousel2/DesodoranteLavanda.jpg";
import DesodoranteArpege from "../assets/Carousel2/DesodoranteArpege.jpg";
import Cloro from "../assets/Carousel2/Cloro.jpg";
import CeraRoja from "../assets/Carousel2/CeraRoja.jpg";
import CeraIncolora from "../assets/Carousel2/CeraIncolora.jpg";

function Carousel3() {
  return (
    <Carousel
      showStatus={false}
      swipeable={true}
      emulateTouch={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      stopOnHover={true}
      // width={"100%"}
      showThumbs={false}
      className="md:w-3/4 w-full"
    >
      <div>
        <img
          src={DetergenteVerde}
          className="mx-auto rounded-lg shadow-lg bg-gray-500 overflow-hidden"
        />
        <p className="legend">Detergente Verde</p>
      </div>
      <div>
        <img
          src={DetergenteUltra}
          className="mx-auto rounded-lg shadow-lg bg-gray-500 overflow-hidden"
        />
        <p className="legend">Detergente Ultra</p>
      </div>
      <div>
        <img
          src={DetergenteLimon}
          className="mx-auto rounded-lg shadow-lg bg-gray-500 overflow-hidden"
        />
        <p className="legend">Detergente Limón</p>
      </div>
      <div>
        <img
          src={Desodorantepino}
          className="mx-auto rounded-lg shadow-lg bg-gray-500 overflow-hidden"
        />
        <p className="legend">Desodorante Pino</p>
      </div>
      <div>
        <img
          src={DesodoranteMisterio}
          className="mx-auto rounded-lg shadow-lg bg-gray-500 overflow-hidden"
        />
        <p className="legend">Desodorante Misterio</p>
      </div>
      <div>
        <img
          src={DesodoranteLisoform}
          className="mx-auto rounded-lg shadow-lg bg-gray-500 overflow-hidden"
        />
        <p className="legend">Desodorante Lisoform</p>
      </div>
      <div>
        <img
          src={Desodorantelimon}
          className="mx-auto rounded-lg shadow-lg bg-gray-500 overflow-hidden"
        />
        <p className="legend">Desodorante Limón</p>
      </div>
      <div>
        <img
          src={DesodoranteLavanda}
          className="mx-auto rounded-lg shadow-lg bg-gray-500 overflow-hidden"
        />
        <p className="legend">Desodorante Lavanda</p>
      </div>
      <div>
        <img
          src={DesodoranteArpege}
          className="mx-auto rounded-lg shadow-lg bg-gray-500 overflow-hidden"
        />
        <p className="legend">Desodorante Arpege</p>
      </div>
      <div>
        <img
          src={Cloro}
          className="mx-auto rounded-lg shadow-lg bg-gray-500 overflow-hidden"
        />
        <p className="legend">Cloro</p>
      </div>
      <div>
        <img
          src={CeraRoja}
          className="mx-auto rounded-lg shadow-lg bg-gray-500 overflow-hidden"
        />
        <p className="legend">Cera Roja</p>
      </div>
      <div>
        <img
          src={CeraIncolora}
          className="mx-auto rounded-lg shadow-lg bg-gray-500 overflow-hidden"
        />
        <p className="legend">Cera Incolora</p>
      </div>
    </Carousel>
  );
}

export default Carousel3;
