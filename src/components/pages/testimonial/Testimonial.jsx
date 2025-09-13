import React, { useState } from "react";
import TestiCard from "./TestiCard";
import ReviewForm from "./ReviewForm";
import { Button } from "react-bootstrap";

export default function Testimonial() {
  const initialTestimonials = [
    {
      name: "Jane Doe",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
      stars: 5,
    },
    {
      name: "John Smith",
      review:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque.",
      stars: 5,
    },
    {
      name: "Samantha Lee",
      review:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet.",
      stars: 4,
    },
  ];

  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  // Function to add a new testimonial to the list
  const addTestimonial = (newReview) => {
    setTestimonials((prevTestimonials) => [...prevTestimonials, newReview]);
  };

  return (
    <>
      <section id="testimonials" className="py-5 bg-light">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-5">
            <h2 className="fw-bold">What Our Clients Say</h2>
            <p className="lead text-muted">
              Real stories from businesses we've helped build.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col">
                <TestiCard
                  name={testimonial.name}
                  review={testimonial.review}
                  stars={testimonial.stars}
                />
              </div>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="text-center mt-5">
            <Button variant="outline-primary" size="lg" onClick={handleShow}>
              Worked with us? Leave a Review
            </Button>
          </div>
        </div>
      </section>

      {/* The Form Modal Component */}
      <ReviewForm
        show={showModal}
        handleClose={handleClose}
        addTestimonial={addTestimonial}
      />
    </>
  );
}
