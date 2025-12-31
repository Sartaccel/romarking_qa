import React, { useState } from "react";
import "./chatbot.css";
import botIcon from "../../images/chat.png";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi 👋 I’m Romarking Assistant! How can I help you today?",
    },
  ]);

  const faqList = [
    {
      question: "What is Romarking?",
      answer:
        "Romarking is a leading provider of sustainable FRP-based Dome Houses and lifestyle products designed for tourism, housing, and industrial use.",
    },
    {
      question: "What does FRP stand for?",
      answer:
        "FRP stands for Fiber Reinforced Polymer — a lightweight, durable, and weather-resistant material used to build long-lasting structures.",
    },
    {
      question: "Why choose FRP over traditional materials?",
      answer:
        "FRP offers strength, portability, corrosion resistance, and eco-friendliness, making it ideal for fast and sustainable construction.",
    },
    {
      question: "What types of FRP houses do you offer?",
      answer:
        "We offer prefabricated Dome Houses and cottages for resorts, retreats, CSR housing, and industrial applications.",
    },
    {
      question: "Do you make customized FRP products?",
      answer:
        "Yes, our FRP houses, tanks, and lifestyle products can be customized in design, size, and color based on your needs.",
    },
    {
      question: "What other FRP products are available?",
      answer:
        "We manufacture FRP Swimming Pools, Water Tanks, Septic Tanks, Flower Pots, Planters, and landscaping materials.",
    },
    {
      question: "Are your products termite-proof and corrosion-resistant?",
      answer:
        "Absolutely! All our FRP products are termite-proof, corrosion-resistant, and suitable for all weather conditions.",
    },
    {
      question: "Do you provide installation and setup services?",
      answer:
        "Yes, we provide complete delivery and installation of all FRP houses and products.",
    },
    {
      question: "What is HomieFix and SimpleGo?",
      answer:
        "HomieFix provides on-call services like cleaning, food, and maintenance. SimpleGo helps guests book cabs and travel nearby.",
    },
    {
      question: "Do you offer maintenance or after-sales support?",
      answer:
        "Yes, we provide ongoing maintenance and support through our HomieFix platform to ensure customer satisfaction.",
    },
    {
      question: "Are your FRP houses eco-friendly?",
      answer:
        "Yes! FRP materials are sustainable, recyclable, and designed to minimize environmental impact.",
    },
    {
      question: "How do Romarking’s products support eco-tourism?",
      answer:
        "Our modular, zero-footprint Dome Houses blend naturally into the landscape — ideal for eco-resorts and green retreats.",
    },
    {
      question: "Do you offer solutions for medical tourism or healthcare?",
      answer:
        "Yes, we build FRP-based recovery villas, diagnostic centers, and wellness retreats for healthcare and medical tourism.",
    },
    {
      question: "Are your Dome Houses suitable for emergency or CSR housing?",
      answer:
        "Definitely. Our FRP Dome Houses are fast to install, durable, and perfect for community housing or disaster relief.",
    },
    {
      question: "Where can I see your Dome Houses in use?",
      answer:
        "You can explore our Dome House Locations section on the website for pictures and project details.",
    },
    {
      question: "Do you provide information about NI Property locations?",
      answer:
        "Yes — we share FAQs like distance from highways, parking, restrooms, food service, and emergency facilities for each property.",
    },
{
  question: "How can I contact Romarking?",
  answer: (
    <>
      You can reach us at{" "}
      <a href="tel:+917092777277" className="phone-link">
        +91 7092777277
      </a>{" "}
      or visit our offices in Coimbatore and Nagercoil, Tamil Nadu.
      You can also use the contact form on our website.
    </>
  ),
},

{
  question: "How can I partner with Romarking?",
  answer: (
    <>
      We collaborate with resort developers, housing project owners, industrial clients,
      and CSR missions. Visit our{" "}
      <a href="/reachout" className="reachout-link">
        Reachout
      </a>{" "}
      page to book a consultation.
    </>
  ),
},
    {
      question: "Can I download your product and service brochures?",
      answer:
        "Yes, you can download them from the Home or Contact pages of our website.",
    },
    {
      question: "Do you have social media or LinkedIn presence?",
      answer: (
        <>
          Yes — follow us on LinkedIn at{" "}
          <a
            href="https://www.linkedin.com/company/romarking/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0077b5", fontWeight: "400" }}
          >
            https://www.linkedin.com/company/romarking/
          </a>{" "}
          for updates and insights.
        </>
      ),
    },
  ];

  const handleUserQuestion = (question, answer) => {
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: question },
      { sender: "bot", text: answer },
    ]);
  };

  return (
    <div>
      <div className="chatbot-wrapper">
        {!isOpen && (
          <div className="chatbot-hint">Ask your question here 💬</div>
        )}
        <div className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
          <img src={botIcon} alt="Chatbot Icon" />
        </div>
      </div>

      {isOpen && (
        <div className="chatbot-container animate-popup">
          <div className="chatbot-header">
            <h4>Romarking Assistant 🤖</h4>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ✕
            </button>
          </div>

          <div className="chatbot-body">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-msg ${msg.sender === "bot" ? "bot" : "user"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="faq-section">
            <h5>Quick Questions</h5>
            {faqList.map((faq, i) => (
              <button
                key={i}
                className="faq-btn"
                onClick={() => handleUserQuestion(faq.question, faq.answer)}
              >
                {faq.question}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
