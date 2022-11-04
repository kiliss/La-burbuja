import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import a from "../assets/a.jpg";


function Carousel2() {
  return (
<Carousel showStatus={false} swipeable={true} emulateTouch={true} infiniteLoop={true} autoPlay={true} interval={3000} stopOnHover={false} width={"100%"} >
<div>
    <img src={a} className/>
    <p className="legend">Legend 1</p>
</div>
<div>
    <img src={a} className/>
    <p className="legend">Desodorante</p>
</div>
<div>
    <img src={a} className/>
    <p className="legend">Legend 3</p>
</div>
</Carousel>
  )
}

export default Carousel2