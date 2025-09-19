import { useParams } from "react-router-dom";

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

export default function SP1() {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);

  if (!service) return <div className="container py-5">Service not found.</div>;

  return (
    <div className="container-fluid p-5 bg-light">
      <h1 className="fw-bold mb-4">{service.title}</h1>
      <img
        src={service.image}
        alt={service.title}
        className="img-fluid rounded mb-4"
      />
      <p className="lead">{service.description}</p>
    </div>
  );
}
