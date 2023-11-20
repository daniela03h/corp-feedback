import { useFeedback } from "../context/FeedbackContext";
import Company from "./Company";

function CompaniesList() {
  const { feedbackList, setCompanyFilter } = useFeedback();

  const nameCompany = feedbackList.map((feedback) => {
    return feedback.companyName;
  });

  function removeDuplicates(company) {
    return company.filter((e, i) => company.indexOf(e) === i);
  }

  const nameCompanyFilters = removeDuplicates(nameCompany);

  return (
    <ul>
      {nameCompanyFilters.map((company) => {
        return (
          <Company key={company} onClick={() => setCompanyFilter(company)}>
            {company}
          </Company>
        );
      })}
    </ul>
  );
}

export default CompaniesList;
