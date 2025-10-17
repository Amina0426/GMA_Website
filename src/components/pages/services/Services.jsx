import { useNavigate } from "react-router-dom";
import SlideUp from "../../layout/SlideUp";
import servicesData from "./servicesData";

export default function Services() {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <SlideUp>
          {/* Section Header */}
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Services</h2>
            <p className="lead text-muted">
              We provide a wide range of structural engineering services.
            </p>
          </div>

          {/* Services Grid */}
          <div className="row g-4">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                className={`col-12 col-md-6 ${
                  index === servicesData.length - 1 ? "last-card" : ""
                }`}
                style={{
                  cursor: "pointer",
                }}
                onClick={() => navigate(`/service/${service.id}`)}
              >
                <div className="card card-hover shadow-sm border-0 h-100">
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
                        <p className="text-muted mb-0">
                          {service.shortDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SlideUp>
      </div>
    </section>
  );
}
