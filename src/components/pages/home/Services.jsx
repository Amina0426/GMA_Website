export default function Services() {
  // Data for the services to be displayed
  const services = [
    {
      title: "Structural Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
    },
    {
      title: "Construction Management",
      description: "Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    },
    {
      title: "Seismic Retrofitting",
      description:
        "Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.",
    },
    {
      title: "Building Permits",
      description: "Praesent mauris. Fusce nec tellus sed augue semper porta.",
    },
    {
      title: "Foundation Engineering",
      description: "Mauris massa. Vestibulum lacinia arcu eget nulla.",
    },
    {
      title: "Site Inspection",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
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
          {services.map((service, index) => (
            <div key={index} className="col-lg-6 col-md-12">
              <div className="card h-100 border-0 shadow-sm p-3">
                <div className="card-body">
                  <h4 className="card-title fw-bold">{service.title}</h4>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-5">
          <button className="btn btn-primary btn-lg">View Our Works</button>
        </div>
      </div>
    </section>
  );
}
