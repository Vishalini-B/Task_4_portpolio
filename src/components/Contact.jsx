import React, { useState, useRef } from "react";
import {
  Mail,
  Linkedin,
  MapPin,
  Send,
  MessageSquare,
  Loader2,
  CheckCircle,
  AlertCircle,
  Bookmark,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formRef = useRef(null);

  const [status, setStatus] = useState("idle");

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "Portfolio Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.user_name || !formData.user_email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setStatus("loading");

    try {
      const SERVICE_ID = "service_st3m6yd";
      const TEMPLATE_ID = "template_5u76etv";
      const PUBLIC_KEY = "3lOJYX-jqfWObC51e";

      /**
       * Based on user template configuration:
       * {{from_email}}
       * {{ffrom_message}} (Note the double 'f' as per user template screenshot)
       */
      const templateParams = {
        name: formData.user_name,
        from_name: formData.user_name,
        from_email: formData.user_email,
        email: formData.user_email,
        subject: formData.subject,
        message: formData.message,
        ffrom_message: formData.message,
        reply_to: formData.user_email,
      };

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus("success");
        setFormData({
          user_name: "",
          user_email: "",
          subject: "Portfolio Inquiry",
          message: "",
        });
      } else {
        throw new Error("Response status not 200");
      }

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="glass p-10 md:p-24 rounded-[4rem] shadow-2xl border border-white dark:border-gray-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
            <div className="space-y-16">
              <div className="space-y-6">
                <h4 className="text-accent font-black uppercase tracking-[0.3em] text-xs">
                  Collaboration
                </h4>
                <h2 className="text-5xl md:text-7xl font-outfit font-extrabold leading-tight text-slate-900 dark:text-white">
                  Let's Build <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
                    Together.
                  </span>
                </h2>
                <p className="text-xl text-slate-500 dark:text-slate-400 font-light max-w-md leading-relaxed">
                  Have an exciting project in mind or an internship opportunity?
                  My inbox is always open.
                </p>
              </div>

              <div className="space-y-10">
                {[
                  {
                    icon: <Mail />,
                    label: "Email Address",
                    value: "vishalinibasu1055@gmail.com",
                    link: "mailto:vishalinibasu1055@gmail.com",
                  },
                  {
                    icon: <Linkedin />,
                    label: "Professional Network",
                    value: "Vishalini B",
                    link: "https://www.linkedin.com/in/vishalini-b-7820062a4/",
                  },
                  {
                    icon: <MapPin />,
                    label: "Current Base",
                    value: "Chennai, India",
                    link: null,
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 group">
                    <div className="bg-slate-100 dark:bg-gray-800 text-accent p-5 rounded-[1.5rem] group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
                      {React.cloneElement(item.icon, {
                        size: 24,
                        strokeWidth: 1.5,
                      })}
                    </div>

                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                        {item.label}
                      </p>

                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          className="text-xl font-bold hover:text-accent transition-colors block text-slate-900 dark:text-white"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-xl font-bold text-slate-900 dark:text-white">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-gray-900/50 p-8 md:p-14 rounded-[3.5rem] border border-slate-200 dark:border-gray-800">
              <div className="mb-10 flex items-center gap-4 text-accent">
                <MessageSquare size={24} />
                <h3 className="text-2xl font-outfit font-extrabold text-slate-900 dark:text-white">
                  Quick Message
                </h3>
              </div>

              <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full px-6 py-4 bg-white dark:bg-gray-800 rounded-2xl border border-transparent focus:border-accent outline-none transition-all shadow-sm font-medium text-slate-900 dark:text-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full px-6 py-4 bg-white dark:bg-gray-800 rounded-2xl border border-transparent focus:border-accent outline-none transition-all shadow-sm font-medium text-slate-900 dark:text-white"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">
                    Subject
                  </label>
                  <div className="relative">
                    <Bookmark
                      size={16}
                      className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      className="w-full pl-14 pr-6 py-4 bg-white dark:bg-gray-800 rounded-2xl border border-transparent focus:border-accent outline-none transition-all shadow-sm font-medium text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full px-6 py-4 bg-white dark:bg-gray-800 rounded-2xl border border-transparent focus:border-accent outline-none transition-all shadow-sm font-medium resize-none text-slate-900 dark:text-white"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`group w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-4 transition-all transform shadow-2xl active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed
                    ${
                      status === "success"
                        ? "bg-emerald-500 text-white shadow-emerald-500/20"
                        : status === "error"
                        ? "bg-rose-500 text-white shadow-rose-500/20"
                        : "bg-accent hover:bg-accent-dark text-white shadow-accent/20 hover:scale-[1.01]"
                    }`}
                >
                  {status === "loading" ? (
                    <>
                      Sending... <Loader2 size={16} className="animate-spin" />
                    </>
                  ) : status === "success" ? (
                    <>
                      Message Sent! <CheckCircle size={16} />
                    </>
                  ) : status === "error" ? (
                    <>
                      Failed to Send <AlertCircle size={16} />
                    </>
                  ) : (
                    <>
                      Send Message{" "}
                      <Send
                        size={16}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </>
                  )}
                </button>

                {status === "success" && (
                  <p className="text-emerald-500 text-[10px] font-bold text-center animate-pulse">
                    Thank you! I'll be in touch very soon.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-rose-500 text-[10px] font-bold text-center">
                    Oops! Please check your connection or try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
