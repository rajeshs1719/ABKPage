import React from "react";
import "./Contact.css";

/* replace these with your actual assets */
import ChapterImg from "../../assets/CUBgCp.png";
import Thumb1 from "../../assets/CuSamplePic.png";
import Thumb2 from "../../assets/CuSamplePic.png";
import Thumb3 from "../../assets/CuSamplePic.png";
import ZoomMeet from "../../assets/CUMeet.png";

import IconPerson from "../../assets/Icons/Person.png";
import IconMail from "../../assets/Icons/Email.png";
import IconPhone from "../../assets/Icons/Phone.png";
import IconLocation from "../../assets/Icons/Vector.png";

interface ChapterCardProps {
  image: string;
  title1: string;
  title2: string;
  address: string;
  director: string;
  email: string;
  phone1: string;
  phone2: string;
  gallery?: string[];
}

function ChapterCard({
  image,
  title1,
  title2,
  address,
  director,
  email,
  phone1,
  phone2,
  gallery = [],
}: ChapterCardProps) {
  return (
    <article className="chapter-card">
      <div className="card-top">
        <img
          src={image}
          alt={`${title1} ${title2}`}
          className="chapter-image"
        />

        <div className="chapter-title-wrap">
          <h2 className="chapter-title">
            {title1} <br /> {title2}
          </h2>
        </div>
      </div>

      <p className="chapter-address">{address}</p>

      <button className="btn direction">
        Get Direction
        <img src={IconLocation} className="icon-small" alt="location" />
      </button>

      <div className="contact-box">
        <div className="contact-row">
          <div>
            <img src={IconPerson} className="contact-icon-img" alt="director" />
            <strong> Director : </strong>
            {director}
          </div>
        </div>

        <div className="contact-row">
          <img src={IconMail} className="contact-icon-img" alt="email" />
          <div className="mono">{email}</div>
        </div>

        <div className="contact-row">
          <img src={IconPhone} className="contact-icon-img" alt="phone" />
          <div className="mono">
            {phone1} / {phone2}
          </div>
        </div>
      </div>

      <div className="action-row">
        <button className="btn primary">Book Demo Class</button>
        <button className="btn outline">Explore Courses</button>
      </div>

      <div className="thumbs">
        {gallery.map((g, i) => (
          <img key={i} src={g} alt={`thumb-${i}`} className="thumb" />
        ))}
      </div>
    </article>
  );
}

export default function Contact() {
  const gallery = [Thumb1, Thumb2, Thumb3];

  return (
    <main className="contact-page">
      <header className="contact-hero" aria-hidden></header>

      <section className="cards-row">
        <ChapterCard
          image={ChapterImg}
          title1="Bangalore"
          title2="Chapter"
          address="44, 100 Feet Road, Double Decker Flyover, Vysya Bank Colony, BTM 2nd Stage, Bengaluru 560 076."
          director="Uma Ramasubramanian"
          email="abkaots.blr@gmail.com"
          phone1="+91 9500 777 330"
          phone2="+91 98940 74375"
          gallery={gallery}
        />

        <ChapterCard
          image={ChapterImg}
          title1="Coimbatore"
          title2="Chapter"
          address="44, 100 Feet Road, Double Decker Flyover, Vysya Bank Colony, BTM 2nd Stage, Bengaluru 560 076."
          director="Uma Ramasubramanian"
          email="abkaots.cbe@gmail.com"
          phone1="+91 9500 777 330"
          phone2="+91 98940 74375"
          gallery={gallery}
        />
      </section>

      {/* LEARN JAPANESE ONLINE SECTION */}
      <section className="learn-section">
        <div className="learn-box">
          <h2>Learn Japanese Online</h2>

          <p className="sub">Anytime, Anywhere !</p>

          <p className="desc">
            Become part of the ABK–AOTS WhatsApp and Zoom communities
          </p>

          <div className="learn-item">
            <img src={IconPhone} className="learn-icon" alt="live" />
            <div>
              <h4>Live Interactive Classes</h4>
              <span>Join real-time sessions with expert instructors.</span>
            </div>
          </div>

          <div className="learn-item">
            <img src={IconPhone} className="learn-icon" alt="live" />
            <div>
              <h4>Live Interactive Classes</h4>
              <span>Join real-time sessions with expert instructors.</span>
            </div>
          </div>

          <div className="learn-action-row">
            <button className="btn primary">Book Demo Class</button>
            <button className="btn outline">Explore Courses</button>
          </div>
        </div>

        <div className="learn-image-box">
          <img src={ZoomMeet} alt="Zoom preview" />
        </div>
      </section>

      {/* SEND US A MESSAGE */}
      <section className="contact-form-section">
        <h2 className="form-title">Send Us a Message</h2>

        <div className="form-wrapper">
          {/* Circle Phone Icon */}
          <div className="form-icon-circle">
            <img src={IconPhone} alt="phone" />
          </div>

          {/* Top Dark Bar */}
          <div className="form-top-bar"></div>

          {/* Form */}
          <form className="form-body">
            <div className="form-row">
              <div className="form-field">
                <label>Name</label>
                <input type="text" />
              </div>

              <div className="form-field">
                <label>Email</label>
                <input type="text" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label>Mobile Number</label>
                <input type="text" />
              </div>

              <div className="form-field">
                <label>City</label>
                <input type="text" />
              </div>
            </div>

            <div className="form-row full">
              <div className="form-field full">
                <label>Course</label>
                <input type="text" />
              </div>
            </div>

            <div className="form-row full">
              <div className="form-field full">
                <label>Message</label>
                <textarea></textarea>
              </div>
            </div>

            <div className="form-submit">
              <button className="btn-submit">Get Started</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
