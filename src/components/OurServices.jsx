const OurServices = ({ services }) => (
  <section className="py-12">
    <h2 className="text-3xl font-semibold text-center mb-10">Our Services</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {services.map((item, i) => (
        <div
          key={i}
          className="border p-6 rounded-lg text-center shadow hover:shadow-md"
        >
          <img
            src={item.icon.url}
            alt={item.title}
            className="w-12 h-12 mx-auto mb-4"
          />
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default OurServices;
