const ExpertTeam = ({ team }) => (
  <section className="py-12">
    <h2 className="text-3xl font-semibold text-center mb-10">Expert Team</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {team.map((person, i) => (
        <div key={i} className="text-center p-4 border rounded-lg shadow">
          <img
            src={person.photo.url}
            alt={person.name}
            className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-lg font-semibold">{person.name}</h3>
          <p className="text-gray-500">{person.position}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ExpertTeam;
