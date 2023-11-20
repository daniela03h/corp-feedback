import Input from "./Input";
import { useState } from "react";

function Header() {
  const [inputValue, setInputVale] = useState("");

  const handleChangeValue = (e) => {
    if (e.target.value.length > 150) return;
    setInputVale(e.target.value);
  };

  return (
    <header className="border border-slate-950 bg-black text-white h-1/4 py-3">
      <h6 className="text-center text-sm">CapComment</h6>
      <h1 className="text-center text-4xl pb-2">Give Feedback. Publicly.</h1>
      <Input value={inputValue} onChange={handleChangeValue} />
    </header>
  );
}

export default Header;
