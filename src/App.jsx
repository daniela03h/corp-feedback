import Header from "./components/Header";
import Feedback from "./components/Feedback";
import FeedbackContextProvider from "./context/FeedbackContext";
import CompaniesList from "./components/CompaniesList";


import "./App.css";

function App() {
  return (
    <FeedbackContextProvider>
      <div className="container mx-auto flex justify-center gap-4 py-4 h-screen">
        <div className="border border-slate-950 bg-white rounded-md min-w-[768px]">
          <Header />
          <Feedback />
        </div>
        <div>
          <CompaniesList/>
        </div>
      </div>
    </FeedbackContextProvider>
  );
}

export default App;
