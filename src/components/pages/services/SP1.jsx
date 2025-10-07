import { useParams, useNavigate } from "react-router-dom";
import servicesData from "./servicesData";

export default function SP1() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find((s) => s.id === serviceId);

  if (!service)
    return (
      <div className="container-fluid py-5 text-center">
        <h2>Service not found.</h2>
      </div>
    );

  return (
    <div className="container-fluid py-5 d-flex flex-column align-items-center text-center bg-light">
      {/* Title */}
      <h1 className="fw-bold mb-4">{service.title}</h1>

      {/* Image */}
      <img
        src={service.image}
        alt={service.title}
        className="img-fluid rounded shadow-sm mb-4"
        style={{
          maxWidth: "700px",
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
        }}
      />

      {/* Description */}
      <p
        className="lead text-muted mb-5"
        style={{ maxWidth: "800px", whiteSpace: "pre-line" }}
      >
        {service.longDescription || service.shortDescription}
      </p>

      {/* Back Button
      <button
        onClick={() => navigate("/services")}
        className="btn btn-outline px-4 py-2 rounded-pill"
      >
        ← Back to Services
      </button> */}
    </div>
  );
}
