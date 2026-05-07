import { useEffect, useState } from "react";
import Card from "../components/Card";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import "../App.css";

function Home() {

  // 🔥 Read values from URL
  const query = new URLSearchParams(window.location.search);

  const [search, setSearch] = useState(query.get("name") || "");
  const [status, setStatus] = useState(query.get("status") || "");
  const [gender, setGender] = useState(query.get("gender") || "");

  // Pagination state
  const [page, setPage] = useState(1);

  // Character data
  const [characters, setCharacters] = useState([]);

  // Fetch API data
  const fetchData = async () => {

    let url = `https://rickandmortyapi.com/api/character/?page=${page}`;

    // 🔥 Add filters dynamically
    if (search) url += `&name=${search}`;
    if (status) url += `&status=${status}`;
    if (gender) url += `&gender=${gender}`;

    // 🔥 Update browser URL (without page)
    window.history.pushState(
      {},
      "",
      `?name=${search}&status=${status}&gender=${gender}`
    );

    // API call
    const res = await fetch(url);
    const data = await res.json();

    // Store data
    setCharacters(data.results || []);
  };

  // Run whenever filters/page changes
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