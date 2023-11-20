import { createContext, useContext, useState, useEffect } from "react";

const FeedbackContext = createContext([]);

// eslint-disable-next-line react-refresh/only-export-components
export const useFeedback = () => useContext(FeedbackContext);

function FeedbackContextProvider({ children }) {
  const feedbackFromStorage = window.localStorage.getItem("feedbacks") || "[]";
  const initialData = JSON.parse(feedbackFromStorage);

  const [feedbackList, setFeedbackList] = useState(initialData);
  const [companyFilter, setCompanyFilter] = useState(null);

  const addFeedback = (feedback) => {
    setFeedbackList([...feedbackList, feedback]);
  };

  const updateVotes = (date) => {
    const feedbackListCopy = JSON.parse(JSON.stringify(feedbackList));
    const position = feedbackListCopy.findIndex(
      (feedback) => feedback.date === date
    );
    feedbackListCopy[position].votes = feedbackListCopy[position].votes + 1;
    setFeedbackList(feedbackListCopy);
  };

  useEffect(() => {
    window.localStorage.setItem("feedbacks", JSON.stringify(feedbackList));
  }, [feedbackList]);

  console.log(companyFilter)

  return (
    <FeedbackContext.Provider
      value={{
        feedbackList,
        addFeedback,
        updateVotes,
        companyFilter,
        setCompanyFilter,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}
export default FeedbackContextProvider;
