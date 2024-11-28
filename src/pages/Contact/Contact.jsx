import React, {
  useState,
  useRef,
  useEffect
} from "react";
import emailjs from "@emailjs/browser";
import MarginWrapper from "../../common/MarginWrapper";
import Aos from "aos";

const YOUR_SERVICE_ID = import.meta.env.VITE_YOUR_SERVICE_ID;
const YOUR_TEMPLATE_ID = import.meta.env.VITE_YOUR_TEMPLATE_ID;
const YOUR_PUBLIC_ID = import.meta.env.VITE_YOUR_PUBLIC_ID;

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-in",
      once: true,
    });

    const updateScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Set breakpoint for mobile (e.g., <= 640px for 'sm')
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const form = useRef();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, message } = formData;

    if (!firstName || !lastName || !email || !message) {
      setError("All fields are required.");
      return;
    }

    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_ID)
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
          form.current.reset();
        },
        (error) => {
          console.log("Failed! Please try again", error.text);
          alert("Failed !");
        }
      );
  };

  return (
    <div className="text-dark">
      <div className="bg-darkOlive flex flex-col justify-center items-center pb-16 pt-32">
        <MarginWrapper>
          <div className="flex flex-col justify-center items-center">
            <h1 className="h3 text-center pt-16 pb-16">Get in Touch</h1>
            <p className="text-center p1 pb-16 w-[75%] sm:w-[50%]">
              We are dedicated to providing exceptional customer service.
              Whether you have a question, need assistance, or just want to say
              hello, we're here for you. Reach out to us via email, live chat,
              or phone – we'd love to hear from you.
            </p>
          </div>
        </MarginWrapper>
      </div>

      <MarginWrapper>
        <div className="flex flex-col sm:flex-row justify-between items-start gap-10 pt-16 pb-32">
          <section data-aos={isMobile ? "fade-up" : "fade-right"} className="">
            <h2 className="h3 pb-16"> Visit Our Store </h2>
            <h3 className="h4 pb-8"> Find Us Here </h3>
            <p className="p1">
              82 PC Sarani, <br /> Darjeeling, West Bengal, 734004
            </p>
          </section>
          <section>
            <img
              data-aos={isMobile ? "fade-up" : "fade-left"}
              className="w-96 mt-8 sm:mt-0 sm:w-[480px] rounded-2xl"
              src="https://images.pexels.com/photos/6387695/pexels-photo-6387695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="contact"
            />
          </section>
        </div>
      </MarginWrapper>

      <form onSubmit={handleSubmit} ref={form}>
        <MarginWrapper>
          <div className="flex flex-col sm:flex-row justify-between items-start gap-10 pb-16">
            <section data-aos={isMobile ? "fade-up" : "fade-right"}>
              <h2 className="h3 pb-8">Customer Support</h2>
              <p className="p1">Phone: +33 556505050</p>
              <p className="p1">Email: info@mysite.com</p>
            </section>

            <section
              data-aos={isMobile ? "fade-up" : "fade-in"}
              className="sm:w-[480px] w-80 flex-col"
            >
              {error && <p className="text-red-500">{error}</p>}

              <div className="flex justify-between sm:flex-row flex-col gap-10 mb-8">
                <div>
                  <label>*First Name</label> <br />
                  <input
                    className="bg-background border-b-[1px] border-dark sm:w-[100%] w-full"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>*Last Name</label> <br />
                  <input
                    className="bg-background border-b-[1px] border-dark sm:w-[100%] w-full"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-8">
                <label>*Email</label> <br />
                <input
                  className="bg-background w-full border-b-[1px] border-dark"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>*Write a Message</label> <br />
                <textarea
                  className="bg-background w-full h-28 border-b-[1px] border-dark"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-primary text-black p-2 rounded mt-4"
              >
                Send Message
              </button>
            </section>
          </div>
        </MarginWrapper>
      </form>
    </div>
  );
};

export default Contact;
