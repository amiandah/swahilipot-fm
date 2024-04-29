import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-info overflow-hidden">
      <div className="container position-relative content-space-1 content-space-md-2">
        <div className="w-md-65 w-lg-50 mx-md-auto">
          {/* Heading */}
          <div className="text-center mb-5">
            <h1 className="text-white">SwahilipotFM</h1>
            <p className="lead text-white">
              <i>
                Where the Coastal Vibes breeze through your ears !! HII NI YETU
              </i>
            </p>
          </div>
          {/* End Heading */}

          {/* <form>
            <div className="input-card input-card-sm mb-10">
              <div className="input-card-form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your email address"
                  aria-label="Your email address"
                />
              </div>
              <button type="button" className="btn btn-primary">
                Subscribe now
              </button>
            </div>
          </form> */}
        </div>

        {/* Background Shapes */}
        <div
          className="position-absolute"
          style={{ top: "-6rem", left: "-6rem" }}
        >
          <img
            src="../assets/svg/components/shape-1-soft-light.svg"
            alt="SVG"
            width="500"
            style={{ width: "12rem" }}
          />
        </div>
        <div
          className="position-absolute"
          style={{ bottom: "-6rem", right: "-7rem" }}
        >
          <img
            src="../assets/svg/components/shape-7-soft-light.svg"
            alt="SVG"
            width="250"
          />
        </div>
        {/* End Background Shapes */}
      </div>
    </div>
  );
};

export default HeroSection;
