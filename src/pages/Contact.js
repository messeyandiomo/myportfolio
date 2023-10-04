import { useEffect, useRef, useState } from "react";
import ContactModal from "./ContactModal";
import LoadingModal from "./LoadingModal";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fillName, setFillName] = useState(false);
  const [goodEmail, setGoodEmail] = useState(false);
  const [fillMessage, setFillMessage] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const buttonSubmit = useRef();

  useEffect(() => {
    if (fillName && goodEmail && fillMessage) {
      buttonSubmit.current.className = "btn btn-light active";
    } else {
      buttonSubmit.current.className = "btn btn-light disabled";
    }
  });

  const requestBody = {
    name: "",
    from: "",
    subject: "Contact Submission",
    message: "",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    requestBody.name = name;
    requestBody.from = email;
    requestBody.message = message;

    setShowLoadingModal(true);

    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      setShowLoadingModal(false);
      if (response.status === 200) {
        console.log("Email sent!. \nResponse:", response);
        setModalMessage("Your Email has been sent !");
      } else {
        console.log("Email not sent. \nResponse:", response);
        setModalMessage("Email not sent !\nResponse:" + response);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setShowLoadingModal(false);
      setModalMessage("Error sending email !\n" + error);
    }
    setShowMessageModal(true);
    //setTimeout(window.location.reload(), 10000);
  };

  return (
    <main className="vh-100 mt-md-0 container-fluid wrapper d-flex align-items-center bg-dark text-white">
      {showLoadingModal && <LoadingModal />}
      {showMessageModal && <ContactModal contactModalMessage={modalMessage} />}
      <div className="row mt-sm-5 mt-md-0">
        <div className="d-md-inline-flex justify-content-center">
          <div className="col-sm-12 col-md-5 d-md-flex align-items-center">
            <div className="row">
              <div className="row">
                <h1 className="col-12">CONTACT</h1>
                <h4 className="col-12">You Got A Problem To Solve ?</h4>
              </div>
              <div className="row">
                <p className="col-12 text-secondary">
                  Get your space suit ready and tell me your ideas to develop
                  your dream application.
                </p>
              </div>
              <div className="row mb-3">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                  <span className="ms-1">messey.bilal@gmail.com</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-5">
            <div className="row">
              <form onSubmit={handleSubmit}>
                <div className="mb-1">
                  <label htmlFor="idInputName" className="form-label">
                    NAME
                  </label>
                  <input
                    type="text"
                    className="form-control bg-dark text-white"
                    id="idInputName"
                    name="user_name"
                    onChange={(e) => {
                      const val = e.target.value.trim();
                      setName(val);
                      val.length !== 0 ? setFillName(true) : setFillName(false);
                    }}
                  />
                </div>
                <div className="mb-1">
                  <label htmlFor="idInputEmail" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control bg-dark text-white"
                    id="idInputEmail"
                    aria-describedby="emailHelp"
                    name="user_email"
                    onChange={(e) => {
                      const val = e.target.value.trim();
                      setEmail(val);
                      /\S+@\S+\.\S+/.test(val)
                        ? setGoodEmail(true)
                        : setGoodEmail(false);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="idFormControlTextarea" className="form-label">
                    MESSAGE
                  </label>
                  <textarea
                    className="form-control bg-dark text-white"
                    id="idFormControlTextarea"
                    rows="3"
                    name="message"
                    onChange={(e) => {
                      const val = e.target.value.trim();
                      setMessage(val);
                      val.length !== 0
                        ? setFillMessage(true)
                        : setFillMessage(false);
                    }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-light disabled"
                  ref={buttonSubmit}
                >
                  HIT ME UP
                  <span> </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
