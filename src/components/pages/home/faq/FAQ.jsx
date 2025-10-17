import { Accordion } from "react-bootstrap";
import Timeline from "./Timeline";
import "./faq.css";

export default function FAQ() {
  const faqs = [
    {
      question: "What types of construction projects does GMA handle?",
      answer:
        "We undertake a wide range of construction projects — including residential, commercial, industrial, and renovation works. Whether it’s a home, office space, or a large-scale development, our team delivers solutions tailored to your goals and budget.",
    },
    {
      question: "How long does a typical construction project take?",
      answer:
        "Project timelines vary depending on the size, scope, and complexity of the build. On average, smaller residential projects take a few months, while larger commercial or custom builds can extend to a year or more. We provide a detailed project schedule during the planning phase so you’re always informed.",
    },

    {
      question: "Can I make design changes during construction?",
      answer:
        "We understand that design ideas may evolve as the project progresses. Minor modifications can usually be accommodated depending on the stage of construction. However, major design changes may impact the timeline or cost — we always review and approve any adjustments together before implementation.",
    },
    {
      question: "Do you provide cost estimates or quotations?",
      answer:
        "Absolutely. After our initial consultation and site inspection, we provide a transparent, itemized quotation covering materials, labor, and estimated timelines. We ensure there are no hidden fees — everything is discussed upfront for complete clarity.",
    },
    {
      question: "What does GMA’s construction process look like?",
      answer:
        "Our process is structured to ensure quality, safety, and transparency from start to finish. Here’s a quick overview of the key stages involved in a typical construction project:",
      showTimeline: true,
    },
  ];

  return (
    <section className="py-5 bg-light" id="faq">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Frequently Asked Questions</h2>
          <p className="text-muted">
            Answers to the most common questions about GMA
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10 bg-light">
            <Accordion flush>
              {faqs.map((faq, idx) => (
                <Accordion.Item
                  eventKey={idx.toString()}
                  key={idx}
                  className="faq-item"
                >
                  <Accordion.Header className="fw-semibold">
                    {faq.question}
                  </Accordion.Header>
                  <Accordion.Body className="text-muted">
                    <p>{faq.answer}</p>
                    {faq.showTimeline && (
                      <div className="mt-4">
                        <Timeline />
                      </div>
                    )}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
