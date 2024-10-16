import React, { useState } from "react";
import Style from "../assets/styles/contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  send to server
    console.log(formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div>
      <main className={Style.main}>
        <h1>CONTACT US</h1>
        <section className={Style.sec2}>
          <div className={Style.left}>
            <p>
              <strong>SAY HELLO</strong> <br /> support@pixellabltd.com
            </p>
            <p>
              <strong>OUR ADDRESS</strong> <br /> Plot. 37, Road 11, Block H,
              Level 3, Ventura Iconia <br /> Banani, Dhaka.
            </p>
          </div>

          <form className={Style.right} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">NAME</label> <br />
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email">EMAIL</label> <br />
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="phone">PHONE</label> <br />
              <input
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Ph. Number"
                required
              />
            </div>
            <div>
              <label htmlFor="message">MESSAGE</label> <br />
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell Something"
              ></textarea>
            </div>
            <button type="submit">
              <a href="mailto:tanjid3656@gmail.com">SEND</a>
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Contact;
