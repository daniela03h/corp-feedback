import { FaAngleUp } from "react-icons/fa6";

function Likes({ votes, onClick }) {
  return (
    <button onClick={onClick} className="text-xs text-slate-400">
      <FaAngleUp />
      <p>{votes}</p>
    </button>
  );
}

export default Likes;
