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
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{char.name}</h3>
        <p className="text-gray-500 text-sm mb-3 italic">{char.species}</p>
        <div className="flex flex-col gap-1 text-sm text-gray-600">
          <span>Gender: {char.gender}</span>
          <span>Origin: {char.origin.name}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;