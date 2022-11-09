import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Waves from "../Components/Waves";

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
    <Waves />
      <div className="flex justify-center bg-[#8FE6B6] py-12 items-center flex-col">
        <h1 className="animate__animated animate__slideInLeft text-4xl font-bold leading-none sm:text-5xl text-[#2FCB75]">
          Contacto
        </h1>
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
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
