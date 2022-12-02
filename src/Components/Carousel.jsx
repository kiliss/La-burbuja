import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Jabondemanosconi from "../assets/Carousel/Jabondemanosconi.jpg";
import Jabondemanosdove from "../assets/Carousel/Jabondemanosdove.jpg";
import Jabondemanoslimon from "../assets/Carousel/Jabondemanoslimon.jpg";
import JabonliquidoAzul from "../assets/Carousel/JabonliquidoAzul.jpg";
import JabonLiquidoVerde from "../assets/Carousel/JabonLiquidoVerde.jpg";
import Lavandina from "../assets/Carousel/Lavandina.jpg";
import LavandinaRopaColor from "../assets/Carousel/LavandinaRopaColor.jpg";
import SuavizanteBlanco from "../assets/Carousel/SuavizanteBlanco.jpg";
import SuavizanteCeleste from "../assets/Carousel/SuavizanteCeleste.jpg";
import SuavizanteRosa from "../assets/Carousel/SuavizanteRosa.jpg";

function Carousel2() {
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
          src={Jabondemanosconi}
          loading="lazy"
          className="mx-auto rounded-lg shadow-lg bg-gray-500 overflow-hidden"
        />
        <p className="legend">Jabón De Manos Coni</p>
      </div>
      <div>
        <img
          src={Jabondemanosdove}
          loading="lazy"
          className="mx-auto rounded-lg shadow-lg bg-gray-500 overflow-hidden"
        />
        <p className="legend">Jabón De Manos Dove</p>
      </div>
      <div>
        <img
          src={Jabondemanoslimon}
          loading="lazy"
          className="mx-auto rounded-lg shadow-lg bg-gray-500 overflow-hidden"
        />
        <p className="legend">Jabón De Manos Limón</p>
      </div>
      <div>
        <img
          src={JabonliquidoAzul}
          loading="lazy"
          className="mx-auto rounded-lg shadow-lg bg-gray-500 overflow-hidden"
        />
        <p className="legend">Jabón Liquido Azul</p>
      </div>
      <div>
        <img
          src={JabonLiquidoVerde}
          loading="lazy"
          className="mx-auto rounded-lg shadow-lg bg-gray-500 overflow-hidden"
        />
        <p className="legend">Jabón Liquido Verde</p>
      </div>
      <div>
        <img
          src={Lavandina}
          loading="lazy"
          className="mx-auto rounded-lg shadow-lg bg-gray-500 overflow-hidden"
        />
        <p className="legend">Lavandina</p>
      </div>
      <div>
        <img
          src={LavandinaRopaColor}
          loading="lazy"
          className="mx-auto rounded-lg shadow-lg bg-gray-500 overflow-hidden"
        />
        <p className="legend">Lavandina Ropa Color</p>
      </div>
      <div>
        <img
          src={SuavizanteBlanco}
          loading="lazy"
          className="mx-auto rounded-lg shadow-lg bg-gray-500 overflow-hidden"
        />
        <p className="legend">Suavizante Blanco</p>
      </div>
      <div>
        <img
          src={SuavizanteCeleste}
          loading="lazy"
          className="mx-auto rounded-lg shadow-lg bg-gray-500 overflow-hidden"
        />
        <p className="legend">Suavizante Celeste</p>
      </div>
      <div>
        <img
          src={SuavizanteRosa}
          loading="lazy"
          className="mx-auto rounded-lg shadow-lg bg-gray-500 overflow-hidden"
        />
        <p className="legend">Suavizante Rosa</p>
      </div>
    </Carousel>
  );
}

export default Carousel2;
