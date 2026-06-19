import { createContext, useContext, useState } from "react";

const CampaignContext = createContext();

export function CampaignProvider({ children }) {
  const [content, setContent] = useState({
    initial: {
      title: "How are you?",
      subtitle: "Rate your experience with us",
    },
    feedback: {
      ratingType: "stars",
      options: ["Too slow", "Bugs found", "Great experience"],
      showComment: true,
      submitText: "Submit Feedback",
    },
    thankYou: {
      media: null,
      title: "Thank You!",
      subtitle: "Your feedback helps us improve",
      buttonText: "Close",
    },
  });

  const [styling, setStyling] = useState({
    bgColor: "#ffffff",
    titleColor: "#111111",
    subtitleColor: "#555555",
    buttonColor: "#6366f1",
    buttonTextColor: "#ffffff",
    fontSize: 16,
    fontWeight: "400",
    borderRadius: 12,
    buttonWidth: 100,
    buttonHeight: 44,
    ratingSelected: "#f59e0b",
    ratingUnselected: "#d1d5db",
  });

  return (
    <CampaignContext.Provider value={{ content, setContent, styling, setStyling }}>
      {children}
    </CampaignContext.Provider>
  );
}

export const useCampaign = () => useContext(CampaignContext);