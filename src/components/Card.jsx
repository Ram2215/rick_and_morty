function Card({ char }) {
  const statusColor = 
    char.status === "Alive" ? "bg-green-500" : 
    char.status === "Dead" ? "bg-red-500" : "bg-gray-500";

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <div className="relative overflow-hidden">
        <img 
          src={char.image} 
          alt={char.name} 
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
        <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-white uppercase ${statusColor}`}>
          {char.status}
        </span>
      </div>
      <div className="p-5 text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{char.name}</h3>
        <p className="text-gray-600 text-sm">Gender: {char.gender}</p>
      </div>
    </div>
  );
}

export default Card;