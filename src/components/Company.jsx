function Company({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="h-7 rounded-xl px-4 bg-indigo-300 text-slate-200 flex flex-col my-2"
    >
      {children}
    </button>
  );
}

export default Company;
