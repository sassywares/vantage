"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NewsLetter() {
  async function onFormSubmit(e) {
    e.preventDefault();

    const email = e.target["newsletter-email"].value;

    if (!email) {
      alert("Please enter your email");
      return;
    }

    alert(
      "Thank you for subscribing, be prepared for new AI-powered marketing insights in your inbox every week."
    );

    try {
      await fetch("https://api.sassywares.com/newsletter", {
        body: JSON.stringify({ email }),
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
    <div className="row">
      <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 wow fadeInUp">
        <div className="row">
          <div className="col-md-10 col-xl-8 d-flex mb-50 mb-sm-30">
            <div className="flex-sm-shrink-0 me-3 me-sm-4">
              <Image
                src="/assets/images/demo-corporate/section-image-1.png"
                width={100}
                height={100}
                alt="Image Description"
              />
            </div>
            <div className="d-flex align-items-center">
              <h2 className="section-title-small w-100 mb-0">
                Get AI marketing insights and updates.
              </h2>
            </div>
          </div>
        </div>
        <form onSubmit={onFormSubmit} id="mailchimp" className="form">
          <div className="d-sm-flex justify-content-between mb-3">
            <label htmlFor="newsletter-email" className="visually-hidden">
              Your email
            </label>
            <input
              placeholder="Enter your email"
              className="newsletter-field input-lg round"
              id="newsletter-email"
              name="newsletter-email"
              type="email"
              pattern=".{5,100}"
              required
              aria-required="true"
            />
            <button
              type="submit"
              aria-controls="subscribe-result"
              className="newsletter-button btn btn-mod btn-color btn-large btn-round btn-hover-anim"
            >
              <span>Get Insights</span>
            </button>
          </div>
          <div className="form-tip">
            <i className="icon-info size-16" /> By sending the form you agree to
            the <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>{" "}
            and <Link href="/privacy-policy">Privacy Policy</Link>.
          </div>
          <div
            id="subscribe-result"
            role="region"
            aria-live="polite"
            aria-atomic="true"
          />
        </form>
      </div>
    </div>
  );
}
