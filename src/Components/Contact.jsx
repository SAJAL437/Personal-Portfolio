import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
      setError({});
      setIsSending(true);

      emailjs
        .send(
          "service_ahps34k",
          "template_c7hu6xb",
          formData,
          "OsTbuE5PqYH0yc7Jy"
        )
        .then((response) => {
          toast.success("Message sent successfully");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.error("FAILED...", error);
          toast.error("Failed to send message. Please try again later");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <>
      <div className="justify-center lg:w-4/4  rounded-3xl" id="contact">
        <Toaster />
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="my-8 text-center text-4xl font-semibold tracking-tighter mt-20"
        >
          Let's Connect
        </motion.h2>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          onSubmit={handleSubmit}
        >
          <div className="flex space-x-4">
            <div className="lg:w-1/4">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="Enter Your Name"
                onChange={handleChange}
                className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
              />
              {error.name && (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-sm text-rose-800"
                >
                  {error.name}
                </motion.p>
              )}
            </div>

            <div className="lg:w-1/4">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Enter Your Email"
                onChange={handleChange}
                className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
              />
              {error.email && (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-sm text-rose-800"
                >
                  {error.email}
                </motion.p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              placeholder="Drop your Message Here..."
              onChange={handleChange}
              className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
              rows={6}
            />
            {error.message && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-sm text-rose-800"
              >
                {error.message}
              </motion.p>
            )}
          </div>

          <button
            type="submit"
            className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 ${
              isSending ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={isSending}
          >
            <div className="flex items-center justify-center gap-2">
              {isSending ? "Sending..." : "Send"} <FiSend />
            </div>
          </button>
        </motion.form>

        {/* <div className=" lg:w-1/2 mt-5 sm:flex items-center align-middle">
            <div className="  justify-center m-auto  mt-10">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="border m-auto w-2/4  mt-5 mb-3 px-2 py-2 rounded-lg bg-white text-gray-600"
              >
                <p className="flex font-semibold gap-1">
                  <SiGmail className="mt-1 " />
                  Email :
                </p>
                <a href="mailto:jim@example.com"> sajaltiwari9364@gmail.com</a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="border m-auto w-2/4 mt-5 mb-3 px-2 py-2 rounded-lg bg-white text-gray-600"
              >
                <p className="flex font-semibold gap-1">
                  <IoCall className="mt-1 " />
                  Contact No :
                </p>
                <a href="mailto:jim@example.com"> +91 9555715453</a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="border m-auto w-2/4 mt-5 mb-3 px-2 py-2 rounded-lg bg-white text-gray-600"
              >
                <p className="flex font-semibold gap-1">
                  <IoMdHome className="mt-1 " />
                  Address :
                </p>
                <a href="mailto:jim@example.com">
                  {" "}
                  715 Vrindavan Colony, Shekhpur, Unnao, 209801, UP, INDIA{" "}
                </a>
              </motion.div>
            </div>
          </div> */}
      </div>
    </>
  );
};

export default Contact;
