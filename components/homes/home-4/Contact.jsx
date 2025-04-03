"use client";

import Link from "next/link";
import React from "react";

export default function Contact() {
  async function onFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name) {
      alert("Please enter your name");
      return;
    }

    if (!email) {
      alert("Please enter your email");
      return;
    }

    if (!message) {
      alert("Please enter your message");
      return;
    }

    alert(
      "Thank you for reaching out, a member of our team will get back to you soon."
    );

    try {
      await fetch("https://api.sassywares.com/v1/contact", {
        body: JSON.stringify({
          name,
          email,
          message,
        }),
        method: "POST",
        headers: {
          "X-Source": "vantage-marketing-agency",
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="row wow fadeInUp justify-content-center">
        {/* Right Column */}
        <div className="col col-lg-8 d-flex align-items-strech">
          <div className="border-color-primary-1 round w-100 px-4 px-sm-5 py-5">
            <h3 className="section-title-small mt-n10 mb-40 mb-sm-30">
              We'd love to hear from you
            </h3>
            {/* Contact Form */}
            <form
              onSubmit={onFormSubmit}
              className="form contact-form"
              id="contact_form"
            >
              <div className="row">
                <div className="col-md-6">
                  {/* Name */}
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="input-lg round form-control"
                      placeholder="Enter your name"
                      pattern=".{3,100}"
                      required
                      aria-required="true"
                    />
                  </div>
                  {/* End Name */}
                </div>
                <div className="col-md-6">
                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="input-lg round form-control"
                      placeholder="Enter your email"
                      pattern=".{5,100}"
                      required
                      aria-required="true"
                    />
                  </div>
                  {/* End Email */}
                </div>
              </div>
              {/* Message */}
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  className="input-lg round form-control"
                  style={{ height: 132 }}
                  placeholder="Enter your message"
                  defaultValue={""}
                />
              </div>
              <div className="row">
                <div className="col-md-6 col-xl-7 d-flex align-items-center">
                  {/* Inform Tip */}
                  <div className="form-tip w-100 pt-3">
                    <i className="icon-info size-16" />
                    All the fields are required. By sending the form you agree
                    to the{" "}
                    <Link href="/terms-and-conditions">
                      Terms &amp; Conditions
                    </Link>{" "}
                    and <Link href="/privacy-policy">Privacy Policy</Link>.
                  </div>
                  {/* End Inform Tip */}
                </div>
                <div className="col-md-6 col-xl-5 mt-sm-20">
                  {/* Send Button */}
                  <div className="pt-3 text-md-end">
                    <button
                      id="submit_btn"
                      type="submit"
                      className="submit_btn btn btn-mod btn-color btn-large btn-round btn-hover-anim"
                      aria-controls="result"
                    >
                      <span>Send Message</span>
                    </button>
                  </div>
                  {/* End Send Button */}
                </div>
              </div>
              <div
                id="result"
                role="region"
                aria-live="polite"
                aria-atomic="true"
              />
            </form>
            {/* End Contact Form */}
          </div>
        </div>
        {/* End Right Column */}
      </div>
    </>
  );
}
