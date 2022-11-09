import "animate.css";
import Details from "../Components/Details";
import CallToAction from "../Components/CallToAction";
import CallToAction2 from "../Components/CallToAction2";
// import Carousel2 from "../Components/Carousel";
import Waves from "../Components/Waves";

function Home() {
  // create scroll button down
  const scrollDown = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Waves />
      <section className="dark:bg-gray-800 dark:text-gray-100 bg-blue-gray-200 ">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-22 md:px-10 lg:px-32 xl:max-w-3xl ">
          {/* <img src={logo} alt="logo" className="animate__animated animate__fadeInDown animate__delay-1s" /> */}
          <h1 className="animate__animated animate__fadeInDown text-4xl  leading-none sm:text-5xl text-[#2FCB75]">
            20 años de experiencia en el mercado de la distribución de productos
            de limpieza
          </h1>

          <button
            onClick={scrollDown}
            className="animate__animated animate__fadeInUp animate__delay-1s px-8 py-3 text-lg font-semibold text-white bg-[#2FCB75] rounded-lg shadow-lg hover:bg-[#1D8049] transition ease-in duration-200 hover:shadow-none mt-60"
          >
            Ver más
          </button>
        </div>
      </section>
      <Details />
      <CallToAction />
      <CallToAction2 />
    </div>
  );
}

export default Home;
