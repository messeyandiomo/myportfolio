const Work = () => {
  return (
    <main className="vh-100 mt-md-0 container-fluid wrapper d-flex align-items-center justify-content-center">
      <div className="row">
        <div className="col-sm-8 offset-sm-2 col-md-5 offset-md-1 d-flex justify-content-center">
          <img
            src={require("../imgs/freelance-web-developer.png")}
            srcSet={`
                  ${require("../imgs/freelance-web-developer-sm.png")} 481w,
                  ${require("../imgs/freelance-web-developer.png")} 768w
                `}
            sizes="(max-width: 481px) 481px, 768px"
            className="img-fluid rounded shadow"
            alt=""
          />
        </div>
        <div className="col-md-5 offset-md-1 d-flex align-items-center">
          <div className="row mt-4 mt-md-0">
            <div className="row mb-md-4">
              <h1 className="text-center text-dark text-md-start">WORK</h1>
              <h4 className="text-center text-dark text-md-start">
                Dig into my Universe
              </h4>
            </div>
            <div className="row mb-md-4">
              <p className="text-secondary text-center text-md-start">
                This is a collection of apps, websites i have made.
              </p>
            </div>
            <div className="row">
              <div className="text-center text-md-start">
                <a
                  role="button"
                  className="btn btn-primary col-md-4"
                  href="https://cm.linkedin.com/in/messey-a-ndiomo-andre-ebenezer-7547bb98"
                >
                  EXPLORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Work;
