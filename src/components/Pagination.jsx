function Pagination({ page, setPage }) {
  return (
    <div className="flex justify-center items-center gap-6 mt-10 p-6">
      <button 
        className="px-6 py-3 bg-pink-500 text-white rounded-xl font-medium hover:bg-pink-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        disabled={page === 1} 
        onClick={() => setPage(page - 1)}
      >
        ← Previous
      </button>
      <span className="px-5 py-2 bg-white rounded-lg text-gray-700 font-medium">
        Page {page}
      </span>
      <button 
        className="px-6 py-3 bg-pink-500 text-white rounded-xl font-medium hover:bg-pink-600 transition-colors"
        onClick={() => setPage(page + 1)}
      >
        Next →
      </button>
    </div>
  );
}

export default Pagination;