function Card({ char }) {
  return (
    <div className="card">
      <img src={char.image} alt={char.name} />
      <h3>{char.name}</h3>
      <p>Status: {char.status}</p>
      <p>Gender: {char.gender}</p>
    </div>
  );
}

export default Card;