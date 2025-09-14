export default function Services() {
  const services = [
    {
      title: "Structural Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
      image: "/images/img-1.jpg",
    },
    {
      title: "Construction Management",
      description: "Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
      image: "/images/img-1.jpg",
    },
    {
      title: "Seismic Retrofitting",
      description:
        "Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.",
      image: "/images/img-1.jpg",
    },
    {
      title: "Building Permits",
      description: "Praesent mauris. Fusce nec tellus sed augue semper porta.",
      image: "/images/img-2.jpg",
    },
    {
      title: "Foundation Engineering",
      description: "Mauris massa. Vestibulum lacinia arcu eget nulla.",
      image: "/images/img-2.jpg",
    },
    {
      title: "Site Inspection",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
      image: "/images/img-3.jpg",
    },
  ];

  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Services</h2>
          <p className="lead text-muted">
            We provide a wide range of structural engineering services.
          </p>
        </div>

        {/* Services */}
        {services.map((service, index) => (
          <div
            key={index}
            className={`d-flex flex-column flex-md-row align-items-stretch mb-5 ${
              index % 2 !== 0 ? "flex-md-row-reverse" : ""
            }`}
            style={{ gap: "5vw" }}
          >
            {/* Image (no card) */}
            <div className="d-flex justify-content-center align-items-center">
              <div
                className="bg-secondary text-white d-flex justify-content-center align-items-center"
                style={{
                  width: "180px",
                  height: "180px",
                  borderRadius: "10px",
                  flexShrink: 0,
                  backgroundImage: `url(${service.image})`,
                  width: "200px",
                  height: "150px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "8px",
                }}
              ></div>
            </div>

            {/* Text (in a card) */}
            <div
              className="card shadow-sm border-0 flex-grow-1 d-flex"
              style={{ height: "185px" }}
            >
              <div className="card-body d-flex flex-column justify-content-center">
                <h4 className="fw-bold">{service.title}</h4>
                <p className="text-muted mb-0">{service.description}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Call to Action */}
        <div className="text-center mt-5">
          <a className="btn btn-primary btn-lg" href="#projects">
            View Our Works
          </a>
        </div>
      </div>
    </section>
  );
}
