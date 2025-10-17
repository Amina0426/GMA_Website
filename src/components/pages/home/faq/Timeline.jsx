import React from "react";
import "./timeline.css";

export default function Timeline() {
  const timelineData = [
    {
      step: 1,
      title: "Planning & Design",
      description:
        "Initial consultation, architectural design, and securing necessary permits.",
    },
    {
      step: 2,
      title: "Site Preparation",
      description:
        "Clearing the land, excavation, and setting up the foundation.",
    },
    {
      step: 3,
      title: "Framing",
      description:
        "Building the skeleton of the structure, including floors, walls, and roof.",
    },
    {
      step: 4,
      title: "Utilities Installation",
      description: "Installing plumbing, electrical wiring, and HVAC systems.",
    },
    {
      step: 5,
      title: "Interior & Exterior Finishes",
      description:
        "Drywall, painting, flooring, roofing, and siding are completed.",
    },
    {
      step: 6,
      title: "Fixtures & Landscaping",
      description:
        "Installing lights, cabinets, and appliances, followed by final landscaping.",
    },
    {
      step: 7,
      title: "Final Walk-through & Handover",
      description:
        "Final inspection with the client and official handover of the property.",
    },
  ];

  return (
    <div className="container py-5">
      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            key={item.step}
          >
            <div className="timeline-bubble">{item.step}</div>
            <div className="timeline-content">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
