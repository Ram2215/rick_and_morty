import { useEffect, useState, useCallback } from "react";
import Card from "../components/Card";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";

function Home() {
  const query = new URLSearchParams(window.location.search);

  const [search, setSearch] = useState(query.get("name") || "");
  const [status, setStatus] = useState(query.get("status") || "");
  const [gender, setGender] = useState(query.get("gender") || "");
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    if (search) url += `&name=${search}`;
    if (status) url += `&status=${status}`;
    if (gender) url += `&gender=${gender}`;

    window.history.pushState({}, "", `?name=${search}&status=${status}&gender=${gender}`);

    try {
      const res = await fetch(url);
      const data = await res.json();
      
      if (data.error) {
        setCharacters([]);
        setError("No characters found");
      } else {
        setCharacters(data.results || []);
      }
    } catch {
      setError("Failed to fetch characters");
    } finally {
      setLoading(false);
    }
  }, [page, search, status, gender]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
  }, [fetchData]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Rick & Morty Character Explorer
      </h1>

      <Filters
        search={search}
        setSearch={setSearch}
        setStatus={setStatus}
        setGender={setGender}
        setPage={setPage}
        status={status}
        gender={gender}
      />

      {loading ? (
        <div className="text-center py-16 text-gray-500 text-xl animate-pulse">
          Loading characters...
        </div>
      ) : error ? (
        <div className="text-center py-16 text-pink-500 text-xl">{error}</div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {characters.map((char) => (
              <Card key={char.id} char={char} />
            ))}
          </div>
          <Pagination page={page} setPage={setPage} />
        </>
      )}
    </div>
  );
}

export default Home;