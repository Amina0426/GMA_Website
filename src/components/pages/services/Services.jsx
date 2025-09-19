import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      id: "structural-design",
      title: "Structural Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
      image: "/images/img-1.jpg",
    },
    {
      id: "construction-management",
      title: "Construction Management",
      description: "Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
      image: "/images/img-1.jpg",
    },
    {
      id: "seismic-retrofitting",
      title: "Seismic Retrofitting",
      description:
        "Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.",
      image: "/images/img-1.jpg",
    },
    {
      id: "building-permits",
      title: "Building Permits",
      description: "Praesent mauris. Fusce nec tellus sed augue semper porta.",
      image: "/images/img-2.jpg",
    },
    {
      id: "foundation-engineering",
      title: "Foundation Engineering",
      description: "Mauris massa. Vestibulum lacinia arcu eget nulla.",
      image: "/images/img-2.jpg",
    },
    {
      id: "site-inspection",
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

        {/* Services Grid */}
        <div className="row g-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="col-12 col-md-6"
              onClick={() => navigate(`/service/${service.id}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="card shadow-sm border-0 h-100">
                <div className="row g-0 h-100">
                  {/* Image */}
                  <div className="col-4 d-flex align-items-center">
                    <div
                      className="w-100 h-100 rounded-start"
                      style={{
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        minHeight: "150px",
                      }}
                    ></div>
                  </div>

                  {/* Text */}
                  <div className="col-8">
                    <div className="card-body d-flex flex-column justify-content-center">
                      <h5 className="fw-bold">{service.title}</h5>
                      <p className="text-muted mb-0">{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
