import { useEffect, useState } from "react";
import Card from "../components/Card";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import "../App.css";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    let url = `https://rickandmortyapi.com/api/character/?page=${page}`;

    if (search) url += `&name=${search}`;
    if (status) url += `&status=${status}`;
    if (gender) url += `&gender=${gender}`;

    const res = await fetch(url);
    const data = await res.json();
    setCharacters(data.results || []);
  };

  useEffect(() => {
    fetchData();
  }, [search, status, gender, page]);

  return (
    <div className="container">
      <h1>Rick & Morty Character Explorer</h1>

      <Filters
        search={search}
        setSearch={setSearch}
        setStatus={setStatus}
        setGender={setGender}
        setPage={setPage}
      />

      <div className="grid">
        {characters.map((char) => (
          <Card key={char.id} char={char} />
        ))}
      </div>

      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default Home;