import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send("service_ahps34k", "template_c7hu6xb", formData, "OsTbuE5PqYH0yc7Jy")
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => toast.error("Failed to send message."))
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="md:py-28 max-w-7xl mx-auto px-6">
      <Toaster />
      
      {/* Universal Heading */}
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
          Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">Touch</span>
        </h2>
        <div className="h-[2px] w-20 bg-gradient-to-r from-cyan-400 to-transparent mb-6"></div>
        <p className="text-neutral-500 dark:text-neutral-400 font-mono text-xs uppercase tracking-widest">// START A CONVERSATION</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.form 
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          onSubmit={handleSubmit} className="space-y-6"
        >
          <input type="text" name="name" placeholder="Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-neutral-900/5 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500 outline-none transition" />
          <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-neutral-900/5 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500 outline-none transition" />
          <textarea name="message" placeholder="Message" required rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-neutral-900/5 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500 outline-none transition" />
          
          <button type="submit" disabled={isSending} className="w-full flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-black py-4 rounded-xl font-bold hover:opacity-90 transition">
            {isSending ? "Sending..." : "Send Message"} <FiSend size={16} />
          </button>
        </motion.form>

        {/* Contact Info Cards */}
        <div className="space-y-4">
          {[
            { icon: <FiMail />, title: "Email", value: "sajaltiwari437@gmail.com", link: "mailto:sajaltiwari437@gmail.com" },
            { icon: <FiPhone />, title: "Phone", value: "+91 8303532784", link: "tel:+918303532784" },
            { icon: <FiMapPin />, title: "Location", value: "Unnao, UP, India", link: "#" }
          ].map((item, i) => (
            <motion.a 
              key={i} href={item.link} 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 p-6 bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-white/5 rounded-2xl hover:border-cyan-500/50 transition-all"
            >
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl">{item.icon}</div>
              <div>
                <p className="text-[10px] uppercase font-mono text-neutral-500">{item.title}</p>
                <p className="font-semibold text-gray-800 dark:text-white">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;