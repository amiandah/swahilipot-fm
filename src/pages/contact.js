import React from "react";
import { Image } from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <div className="container content-space-1 mt-3">
        <div className="mx-auto" style={{ maxWidth: "37.5rem" }}>
          {/* Card */}
          <div className="card card-lg">
            <div className="card-body">
              {/* Heading */}
              <div className="w-lg-85 text-center mx-lg-auto mb-7">
                <h4>How can we help?</h4>
                <p className="fs-6">
                  Need help, have questions or want to suggest a feature? Send
                  us a message here.
                </p>
              </div>
              {/* End Heading */}

              <form>
                <div className="row">
                  <div className="col-sm-6">
                    {/* Form */}
                    <div className="mb-4">
                      <label
                        className="form-label visually-hidden"
                        htmlFor="contactName"
                      >
                        Your name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="name"
                        id="contactName"
                        placeholder="Your name"
                        aria-label="Your name"
                        required
                      />
                    </div>
                    {/* End Form */}
                  </div>
                  {/* End Col */}

                  <div className="col-sm-6">
                    {/* Form */}
                    <div className="mb-4">
                      <label
                        className="form-label visually-hidden"
                        htmlFor="contactEmail"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        name="email"
                        id="contactEmail"
                        placeholder="Your email"
                        aria-label="Your email"
                        required
                      />
                    </div>
                    {/* End Form */}
                  </div>
                  {/* End Col */}

                  <div className="col-sm-12">
                    {/* Form */}
                    <div className="mb-4">
                      <label
                        className="form-label visually-hidden"
                        htmlFor="contactDetails"
                      >
                        Detail
                      </label>
                      <textarea
                        className="form-control form-control-lg"
                        id="contactDetails"
                        rows="5"
                        placeholder="Tell us more about detail"
                        aria-label="Tell us more about detail"
                      ></textarea>
                    </div>
                    {/* End Form */}
                  </div>
                  {/* End Col */}
                </div>
                {/* End Row */}

                <div className="d-grid">
                  <button type="submit" className="btn btn-lg btn-info">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* End Card */}
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-info">
        <div className="container content-space-b-1">
          <div className="row col-sm-divider col-divider-light">
            <div className="col-sm-4">
              {/* Info */}
              <div className="text-center py-sm-5">
                {/* Placeholder Icon */}
                <span className="svg-icon text-white mb-3">Icon 1</span>
                <h5 className="text-white">Visit us:</h5>
                <p className="text-white-70 mb-0">
                  153 Williamson Plaza, Maggieberg
                </p>
              </div>
              {/* End Info */}
            </div>
            {/* End Col */}

            <div className="col-sm-4">
              {/* Info */}
              <div className="text-center py-sm-5">
                {/* Placeholder Icon */}
                <span className="svg-icon text-white mb-3">Icon 2</span>
                <h5 className="text-white">Call us:</h5>
                <p className="text-white-70 mb-0">+1 (062) 109-9222</p>
              </div>
              {/* End Info */}
            </div>
            {/* End Col */}

            <div className="col-sm-4">
              {/* Info */}
              <div className="text-center py-sm-5">
                {/* Placeholder Icon */}
                <span className="svg-icon text-white mb-3">Icon 3</span>
                <h5 className="text-white">Email us:</h5>
                <p className="text-white-70 mb-0">example@site.com</p>
              </div>
              {/* End Info */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
      </div>
      {/* End Contact Info */}
    </>
  );
};

export default Contact;
