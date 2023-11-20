import { useFeedback } from "../context/FeedbackContext";
import Button from "./Button";

function Input({ onChange, value }) {
  const { addFeedback } = useFeedback();

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedbackArray = value.split(" ");
    const companyName = feedbackArray.find((word) => word.startsWith("#"));

    if (companyName === undefined) {
      alert("Debes ingresar el nombre de una empresa iniciando con #");
      return;
    }

    addFeedback({
      companyName,
      comment: value,
      date: new Date().getTime(),
      votes: 0
    });
    onChange({ target: { value: "" } });
  };

  return (
    <form
      className="w-3/5 h-2/3 mx-auto bg-zinc-900 rounded-md p-2"
      onSubmit={handleSubmit}
    >
      <textarea
        className="bg-zinc-900 text-xs w-full h-4/5"
        type="text"
        placeholder="Enter your feedback here, remember to #hashtag the company"
        onChange={onChange}
        value={value}
      ></textarea>
      <div className="flex justify-between">
        <span className="text-xs text-slate-400">{150 - value.length}</span>
        <Button type="Submit" />
      </div>
    </form>
  );
}

export default Input;
