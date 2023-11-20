import { useFeedback } from "../context/FeedbackContext";
import Likes from "./Likes";
import { formatDistanceToNowStrict } from "date-fns";
import _ from "lodash";

const colors = ["32a852", "a85032", "32a4a8", "4232a8", "9432a8", "a83242"];

function getPosition(firts, last) {
  return Math.floor(Math.random() * (last - firts) + firts);
}

function displayDate(date) {
  const dateString = formatDistanceToNowStrict(new Date(date))
  const timeValue = dateString.split(" ")[0]
  const timeUnit = dateString.split(" ")[1].substring(0,3)
  return `${timeValue}${timeUnit}`
}

function Feedback() {
  const { feedbackList, updateVotes, companyFilter } = useFeedback();

  const feedbackListByVotes = _.orderBy(feedbackList, ["votes"], ["desc"]);

  const getFilteredList = () => {
    if (companyFilter === null) {
      return feedbackListByVotes;
    }

    return feedbackListByVotes.filter((feedback) => {
      return (
        feedback.companyName?.toLowerCase() === companyFilter?.toLowerCase()
      );
    });
  };

  return (
    <div className="py-6 h-3/4 overflow-y-auto">
      <ul>
        {getFilteredList().map((feedback) => {
          const companyName = feedback.companyName.replace("#", "");

          return (
            <li key={feedback.date} className="flex items-center mx-10">
              <div className="flex-1 flex justify-center">
                <Likes
                  votes={feedback.votes}
                  onClick={() => updateVotes(feedback.date)}
                />
              </div>
              <img
                src={`https://ui-avatars.com/api/?length=1&bold=true&name=${companyName}&background=${
                  colors[getPosition(0, colors.length)]
                }&color=fff`}
                alt=""
                className="w-12 h-12 rounded mx-3 my-5 flex-1"
              />
              <div className="flex-8">
                <p className="uppercase text-slate-400 font-bold text-sm">
                  {companyName}
                </p>
                <p className="w-4/5 text-gray-700 leading-none text-sm">
                  {feedback.comment}
                </p>
              </div>
              <p className="flex-1 text-center text-sm">
                {displayDate(feedback.date)}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Feedback;
