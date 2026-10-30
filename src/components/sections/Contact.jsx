import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./sections.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [sending, setSending] = useState(false);
  const form = useRef();
  const sendEmail = async (event) => {
    event.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      await emailjs.sendForm(
        "service_iuwzaut",
        "template_u95efar",
        form.current,
        { publicKey: "-jZ2Fuctdb1E1mzvW" },
      );
      setName("");
      setEmail("");
      setContent("");
      toast.success("Thanks — your message has been sent.");
    } catch (error) {
      console.error("Email send failed", error);
      toast.error("Your message could not be sent. Please email me directly.");
    } finally {
      setSending(false);
    }
  };
  return (
    <div className="section-wrap contact-layout">
      <ToastContainer position="bottom-right" theme="dark" />
      <div className="contact-copy">
        <div className="section-kicker">HAVE A PROJECT IN MIND?</div>
        <h2 className="section-heading">
          Let’s make
          <br />
          <span>something useful.</span>
        </h2>
        <p>
          Have a product idea, a business process that needs improving, or a
          development challenge? Tell me a little about it and let’s start a
          conversation.
        </p>
        <a className="contact-email" href="mailto:rayicon@gmail.com">
          rayicon@gmail.com <span>↗</span>
        </a>
        <div className="contact-socials">
          <a
            href="https://github.com/rayiwobi"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/raymond-iwobi-843785157/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a href="https://www.techlod.com.ng" target="_blank" rel="noreferrer">
            Techlod ↗
          </a>
        </div>
      </div>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="form-title">
          Send a message <span>Usually the start of something good.</span>
        </div>
        <label htmlFor="contact-name">Your name</label>
        <input
          id="contact-name"
          required
          name="user_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="How should I address you?"
        />
        <label htmlFor="contact-email">Email address</label>
        <input
          id="contact-email"
          required
          type="email"
          name="user_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
        />
        <label htmlFor="contact-message">What would you like to build?</label>
        <textarea
          id="contact-message"
          required
          name="message"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="A little about your idea, project or challenge…"
          rows="5"
        />
        <button
          className="button-primary contact-submit"
          type="submit"
          disabled={sending}
        >
          {sending ? "Sending…" : "Send message"} <span>↗</span>
        </button>
        <p className="form-privacy">
          Your details are used only to respond to your message.
        </p>
      </form>
    </div>
  );
}
