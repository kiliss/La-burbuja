import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


const validate = (values) => {
  let errors = {};
  if (!values.user_name) {
    errors.name = "El nombre es obligatorio";
  }
  if (!values.user_lastname) {
    errors.lastname = "El apellido es obligatorio";
  }
  if (!values.user_email) {
    errors.email = "El email es obligatorio";
  }
  if (/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "El email no es válido";
  }
  if (!values.message) {
    errors.message = "El mensaje es obligatorio";
  }
  return errors;
};

function Contact() {
  const navigate = useNavigate();
  
  const form = useRef();

  const [error, setError] = useState({});
  const [value, setValue] = useState({
    user_name: "",
    user_lastname: "",
    user_email: "",
    message: "",
  });

  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const errors = validate(value);
    setError(errors);
    console.log(errors);
    if (Object.keys(errors).length === 0) {
      // navigate to / if close toast notification
      toast.success("Enviado Correctamente.", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Algo salio mal.", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    //   if (Object.keys(errors).length === 0) {
    //   emailjs
    //     .sendForm( "service_dggwwbn", "template_k3mouyu", form.current, "i0JmX0Ql5V-R4r_co" )
    //     .then(
    //       (result) => {
    //         console.log(result.text);
    //         setValue({
    //           user_name: "",
    //           user_lastname: "",
    //           user_email: "",
    //           message: "",
    //         });
    //       },
    //       (error) => {
    //         console.log(error.text);
    //       }
    //     );
    // } else {
    //   console.log("error");
    // }
  };

  return (
    <>
      <div className="custom-shape-divider-top-1667585818">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="flex justify-center bg-[#8FE6B6] py-12 items-center flex-col">
        <h1 className="animate__animated animate__slideInLeft text-4xl font-bold leading-none sm:text-5xl text-[#2FCB75]">Contacto</h1>
        <form
          className="animate__animated animate__fadeIn w-full max-w-lg p-5 rounded bg-[#26a65f]/30 mt-5 mb-5"
          ref={form}
          onSubmit={(e) => sendEmail(e)}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Nombre
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border  ${
                  error.name && "border-red-500"
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                type="text"
                placeholder="Jane"
                name="user_name"
                value={value.user_name}
                onChange={handleChange}
              />
              <p className="text-red-500 text-xs italic">
                {error.name && "Por favor ingrese su nombre."}
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Apellido
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border  ${
                  error.lastname && "border-red-500"
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                type="text"
                placeholder="Doe"
                name="user_lastname"
                value={value.user_lastname}
                onChange={handleChange}
              />
              <p className="text-red-500 text-xs italic">
                {error.lastname && "Por favor ingrese su apellido."}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                E-mail
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border  ${
                  error.email && "border-red-500"
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                id="email"
                type="email"
                name="user_email"
                placeholder="ejemplo@gmail.com"
                value={value.user_email}
                onChange={handleChange}
              />
              <p className="text-red-500 text-xs italic">
                {error.email && "Por favor ingrese un email valido."}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Mensaje
              </label>
              <textarea
                className={`no-resize appearance-none block w-full bg-gray-200 text-gray-700 border  ${
                  error.message && "border-red-500"
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none`}
                id="message"
                name="message"
                placeholder="Escriba su mensaje..."
                value={value.message}
                onChange={handleChange}
              ></textarea>
              <p className="text-red-500 text-xs italic">
                {error.message && "Por favor ingrese un mensaje."}
              </p>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              <button
                className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Send
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
