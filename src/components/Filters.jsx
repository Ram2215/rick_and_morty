function Filters({ search, setSearch, setStatus, setGender, setPage }) {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => {
          setPage(1);
          setSearch(e.target.value);
        }}
      />

      <select onChange={(e) => setStatus(e.target.value)}>
        <option value="">Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <select onChange={(e) => setGender(e.target.value)}>
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
}

export default Filters;