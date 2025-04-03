import React from "react";
import Image from "next/image";

export default function Hero1Dark() {
  return (
    <div className="container position-relative d-flex align-items-center">
      {/* Home Section Content */}
      <div className="home-content text-start mt-n40">
        <div className="row">
          {/* Home Section Text */}
          <div className="col-lg-6 col-xl-5 offset-xl-1 d-flex align-items-center order-first order-lg-last mb-md-60">
            <div className="w-100 text-center text-lg-start">
              <h1
                className="hs-title-9 mb-40 mb-sm-20 wow fadeInUp animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                Marketing made easy with AI
              </h1>
              <p
                className="hs-descr mb-50 mb-sm-40 wow fadeInUp animated"
                data-wow-delay="0.15s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.15s",
                  animationName: "fadeInUp",
                }}
              >
                Vantage empowers businesses with AI-driven marketing solutions
                that deliver measurable results and drive sustainable growth
              </p>
              <div
                className="wow fadeInUp wch-unset animated"
                data-wow-delay="0.3s"
                data-wow-offset={0}
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="local-scroll mb-60 mb-sm-50">
                  <a
                    href="/#contact"
                    className="btn btn-mod btn-color btn-large btn-round btn-hover-anim"
                  >
                    <span>Get a Consultation</span>
                  </a>
                </div>
                {/* Features List */}
                <div className="mt-n10">
                  {/* Features List Item */}
                  <div className="d-flex justify-content-center justify-content-lg-start mt-10">
                    <div className="features-list-icon features-list-color-1">
                      <i className="mi-check" aria-hidden="true" />
                    </div>
                    <div className="features-list-text">
                      No credit card required
                    </div>
                  </div>
                  {/* End Features List Item */}
                  {/* Features List Item */}
                  <div className="d-flex justify-content-center justify-content-lg-start mt-10">
                    <div className="features-list-icon features-list-color-1">
                      <i className="mi-check" aria-hidden="true" />
                    </div>
                    <div className="features-list-text">
                      Data-driven strategy development
                    </div>
                  </div>
                  {/* End Features List Item */}
                  {/* Features List Item */}
                  <div className="d-flex justify-content-center justify-content-lg-start mt-10">
                    <div className="features-list-icon features-list-color-1">
                      <i className="mi-check" aria-hidden="true" />
                    </div>
                    <div className="features-list-text">
                      Automated campaign optimization
                    </div>
                  </div>
                  {/* End Features List Item */}
                </div>
                {/* End Features List */}
              </div>
            </div>
          </div>
          {/* End Home Section Text */}
          {/* Images */}
          <div className="col-lg-6">
            <div className="composition-8">
              {/* Decorative Dots */}
              <div
                className="composition-8-decoration-1 mt-n90 mt-md-n60 opacity-075"
                data-wow-duration="1.3s"
              >
                <Image
                  src="/assets/images/demo-corporate/decoration-1-dark.svg"
                  width={253}
                  height={304}
                  alt=""
                />
              </div>
              {/* End Decorative Dots */}
              {/* Main Image */}
              <div className="composition-8-image bg-dark-3">
                <Image
                  src="/assets/images/demo-corporate/hs-image-2.jpg"
                  width={706}
                  height={800}
                  alt="Image Description"
                  className="wow fadeScaleOutIn animated"
                  data-wow-duration="1.3s"
                  style={{
                    visibility: "visible",
                    animationDuration: "1.3s",
                    animationName: "fadeScaleOutIn",
                  }}
                />
              </div>
              {/* End Main Image */}
              {/* Overlay Buttons */}
              <div
                className="composition-8-decoration-2 local-scroll wow fadeIn animated"
                data-wow-duration="1.3s"
                data-wow-offset={0}
                style={{
                  visibility: "visible",
                  animationDuration: "1.3s",
                  animationName: "fadeIn",
                }}
              >
                <div className="mt-10">
                  <a
                    href="/#services"
                    className="btn btn-mod btn-dark btn-with-icon btn-circle"
                  >
                    <span className="btn-icon color-3">
                      <i className="mi-user" aria-hidden="true" />
                    </span>
                    <span data-btn-animate="y">
                      <span className="btn-animate-y">
                        <span className="btn-animate-y-1">
                          AI Strategy Consulting
                        </span>
                        <span className="btn-animate-y-2" aria-hidden="true">
                          AI Strategy Consulting
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="mt-10">
                  <a
                    href="/#services"
                    className="btn btn-mod btn-dark btn-with-icon btn-circle"
                  >
                    <span className="btn-icon color-2">
                      <i className="mi-search" aria-hidden="true" />
                    </span>
                    <span data-btn-animate="y">
                      <span className="btn-animate-y">
                        <span className="btn-animate-y-1">
                          Search Engine Optimization
                        </span>
                        <span className="btn-animate-y-2" aria-hidden="true">
                          Search Engine Optimization
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="mt-10">
                  <a
                    href="/#services"
                    className="btn btn-mod btn-dark btn-with-icon btn-circle"
                  >
                    <span className="btn-icon color-4">
                      <i className="mi-message" aria-hidden="true" />
                    </span>
                    <span data-btn-animate="y">
                      <span className="btn-animate-y">
                        <span className="btn-animate-y-1">
                          Social Media Marketing
                        </span>
                        <span className="btn-animate-y-2" aria-hidden="true">
                          Social Media Marketing
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              {/* End Overlay Buttons */}
            </div>
          </div>
          {/* End Images */}
        </div>
      </div>
      {/* End Home Section Content */}
    </div>
  );
}
