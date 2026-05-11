function Filters({ search, setSearch, setStatus, setGender, setPage, status, gender }) {
  return (
    <div className="flex flex-wrap justify-center gap-6 mb-10 p-6 bg-white rounded-2xl shadow-md">
      <div className="w-full sm:w-auto">
        <input
          type="text"
          placeholder="Search characters..."
          value={search}
          className="w-full sm:w-72 px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 outline-none focus:border-pink-500 transition-colors"
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="flex gap-4 flex-wrap">
        <select 
          onChange={(e) => setStatus(e.target.value)} 
          value={status || ""}
          className="px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 outline-none focus:border-pink-500 cursor-pointer transition-colors"
        >
          <option value="">All Status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>

        <select 
          onChange={(e) => setGender(e.target.value)} 
          value={gender || ""}
          className="px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 outline-none focus:border-pink-500 cursor-pointer transition-colors"
        >
          <option value="">All Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="genderless">Genderless</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;