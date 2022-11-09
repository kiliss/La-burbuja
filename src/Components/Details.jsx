import { useState, useEffect } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { BsEmojiLaughing } from "react-icons/bs";
import { TfiMoney } from "react-icons/tfi";
import { BsEmojiWink } from "react-icons/bs";
import { useScroll } from "../eventslisteners";

function Details() {
  // enable animate.css on scroll down
  const [animate, setAnimate] = useState(false);
  useScroll(() => {
    console.log(window.scrollY);
    if (window.scrollY > 200) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  });
  return (
    <div className="bg-[#8FE6B6] block w-full py-1">
      <div className="p-6 my-6 dark:bg-gray-800 dark:text-gray-100">
        <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4 ">
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100 flex-col mt-6">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
              <BsEmojiSmile size={60} color="black" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p
                className={`text-2xl leading-none text-[#2FCB75] text-center font-bold  ${
                  animate && "animate__animated animate__zoomIn"
                }`}
              >
                20 años de experiencia en el rubro de los productos de limpieza
                sueltos y tratamiento de aguas para piscinas.
              </p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100 flex-col mt-6">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
              <BsEmojiLaughing size={60} color="black" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p
                className={`text-2xl leading-none text-[#2FCB75] text-center font-bold  ${
                  animate && "animate__animated animate__zoomIn"
                }`}
              >
                Atendemos el comercio con productos de limpieza suelto y entrega
                propia.
              </p>
            </div>
          </div>

          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100 flex-col mt-6">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
              <BsEmojiWink size={60} color="black" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p
                className={`text-2xl leading-none text-[#2FCB75] text-center font-bold  ${
                  animate && "animate__animated animate__zoomIn"
                }`}
              >
                Atención a instituciones y empresas con productos de limpieza.
              </p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100 flex-col mt-6">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
              <TfiMoney size={60} color="black" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p
                className={`text-2xl leading-none text-[#2FCB75] text-center font-bold  ${
                  animate && "animate__animated animate__zoomIn"
                }`}
              >
                Atendemos grandes piscinas con productos y asesoramiento para el
                tratamiento y la conservación de las aguas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
