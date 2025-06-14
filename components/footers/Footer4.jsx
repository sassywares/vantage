"use client";
import { footerLinks2, navigationLinks, socialMediaLinks } from "@/data/footer";
import React from "react";

export default function Footer4() {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Linear easing replacement
    });
  };

  return (
    <div className="container position-relative">
      {/* Back to Top Link */}
      <div
        className="local-scroll position-relative z-index-1"
        onClick={scrollToTop}
      >
        <a
          href="#top"
          className="link-to-top color position-absolute top-0 end-0 translate-middle-y"
        >
          <i className="mi-arrow-up size-24" />
          <span className="visually-hidden">Scroll to top</span>
        </a>
      </div>
      {/* End Back to Top Link */}
      <div className="page-section">
        <div className="row">
          <div className="col-lg-6 mb-md-60">
            <h2 className="section-title mb-60 mb-sm-40">
              Ready to transform your marketing with AI?
            </h2>
            <div className="local-scroll">
              <a
                href="#contact"
                className="btn btn-mod btn-color btn-large btn-round btn-hover-anim"
              >
                <span>Get AI Analysis</span>
              </a>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 pt-10">
            <div className="row">
              <div className="col-md-6 mb-sm-40">
                <ul className="fw-menu-large clearlist local-scroll">
                  {navigationLinks.map((elm, i) => (
                    <li key={i}>
                      <a href={elm.href}>{elm.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="fw-menu-large clearlist">
                  {footerLinks2.map((elm, i) => (
                    <li key={i}>
                      <a href={elm.href}>{elm.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Text */}
      <div className="row align-items-end">
        <div className="col-md-6 mb-sm-40">
          Empowering businesses with AI-driven marketing. <br />© Vantage{" "}
          {new Date().getFullYear()}
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <div className="d-flex gap-2 align-items-center justify-content-end">
            Site by
            <a href="https://sassywares.com" target="_blank" rel="noopener">
              <img
                src="https://storage.sassywares.com/badge.png"
                alt="sassywares creative web design development agency"
                width="150"
                className="mt-2"
              />
            </a>
          </div>
        </div>
        {/* Social Links */}
        {/* <div className="col-md-6 footer-2-social-links text-md-end mb-md-40">
          {socialMediaLinks.map((elm, i) => (
            <React.Fragment key={i}>
              <a
                href={elm.href}
                title="Facebook"
                rel="noopener nofollow"
                target="_blank"
              >
                <span className="visually-hidden">{elm.name}</span>
                <i className={elm.iconClass} />
              </a>{" "}
            </React.Fragment>
          ))}
        </div> */}
        {/* End Social Links */}
      </div>
      {/* End Footer Text */}
    </div>
  );
}
