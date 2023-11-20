function Button({ type }) {
  return (
    <button
      className="text-xs text-slate-700  border p-1 bg-white rounded-full h-5 w-16 flex items-center justify-center"
      type={type}
    >
      SUBMIT
    </button>
  );
}

export default Button;
