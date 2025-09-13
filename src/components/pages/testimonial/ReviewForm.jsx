import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

// Function returning the style element
const getFormStyles = () => (
  <style type="text/css">{`
        .star-rating .star {
            cursor: pointer;
            color: #e4e5e9;
            font-size: 1.5rem;
            transition: color 0.2s;
        }
        .star-rating .star:hover,
        .star-rating .star.selected {
            color: #ffc107;
        }
    `}</style>
);

// Reusable Star Rating Component
const StarRating = ({ rating, setRating }) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <span
            key={ratingValue}
            className="star"
            style={{
              color: ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9",
            }}
            onClick={() => setRating(ratingValue)}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(0)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default function ReviewForm({ show, handleClose, addTestimonial }) {
  const [newReview, setNewReview] = useState({
    name: "",
    review: "",
    stars: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rate) => {
    setNewReview((prev) => ({ ...prev, stars: rate }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.review && newReview.stars > 0) {
      addTestimonial(newReview);
      setNewReview({ name: "", review: "", stars: 0 });
      handleClose();
    } else {
      alert("Please fill out all fields and provide a rating.");
    }
  };

  return (
    <>
      {getFormStyles()} {/* call the function here */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Share Your Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formReviewName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={newReview.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formReviewText">
              <Form.Label>Review</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="How was your experience?"
                name="review"
                value={newReview.review}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formReviewRating">
              <Form.Label>Your Rating</Form.Label>
              <StarRating
                rating={newReview.stars}
                setRating={handleRatingChange}
              />
            </Form.Group>
            <div className="d-grid mt-4">
              <Button variant="primary" type="submit">
                Add My Review
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
