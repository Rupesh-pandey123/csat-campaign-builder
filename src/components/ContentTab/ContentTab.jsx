import InitialFeedback from "./InitialFeedback";
import FeedbackPage from "./FeedbackPage";
import ThankYouPage from "./ThankYouPage";

export default function ContentTab() {
  return (
    <div className="space-y-2">
      <InitialFeedback />
      <hr className="border-gray-200 my-4" />
      <FeedbackPage />
      <hr className="border-gray-200 my-4" />
      <ThankYouPage />
    </div>
  );
}