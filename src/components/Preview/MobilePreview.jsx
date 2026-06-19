import { useState } from "react";
import { useCampaign } from "../../context/CampaignContext";

function RatingDisplay({ styling, ratingType }) {
  const [selected, setSelected] = useState(0);

  if (ratingType === "stars") {
    return (
      <div className="flex gap-1 justify-center my-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            onClick={() => setSelected(i)}
            style={{
              color: i <= selected ? styling.ratingSelected : styling.ratingUnselected,
              fontSize: 28,
              cursor: "pointer",
            }}
          >
            ★
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-2 justify-center my-2">
      {[1, 2, 3, 4, 5].map((i) => (
        <button
          key={i}
          onClick={() => setSelected(i)}
          style={{
            backgroundColor:
              i === selected ? styling.ratingSelected : styling.ratingUnselected,
            color: i === selected ? "#fff" : "#333",
            width: 36,
            height: 36,
            borderRadius: 8,
            border: "none",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 14,
          }}
        >
          {i}
        </button>
      ))}
    </div>
  );
}

export default function MobilePreview() {
  const { content, styling } = useCampaign();
  const [screen, setScreen] = useState("initial");

  const popupStyle = {
    backgroundColor: styling.bgColor,
    borderRadius: styling.borderRadius,
    fontSize: styling.fontSize,
    fontWeight: styling.fontWeight,
  };

  const btnStyle = {
    backgroundColor: styling.buttonColor,
    color: styling.buttonTextColor,
    width: `${styling.buttonWidth}%`,
    height: styling.buttonHeight,
    borderRadius: styling.borderRadius,
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: styling.fontSize,
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">
        Live Preview
      </p>

      {/* Phone Frame */}
      <div
        style={{
          width: 300,
          height: 600,
          border: "10px solid #1f2937",
          borderRadius: 40,
          background: "#f3f4f6",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 30px 70px rgba(0,0,0,0.35)",
        }}
      >
        {/* Notch */}
        <div
          style={{
            width: 80,
            height: 20,
            background: "#1f2937",
            borderRadius: "0 0 14px 14px",
            margin: "0 auto",
            position: "relative",
            zIndex: 10,
          }}
        />

        {/* Screen content */}
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "flex-end",
            padding: "0 12px 30px 12px",
          }}
        >
          {/* Popup Card */}
          <div style={{ ...popupStyle, width: "100%", padding: 16, boxShadow: "0 -4px 20px rgba(0,0,0,0.1)" }}>

            {/* INITIAL SCREEN */}
            {screen === "initial" && (
              <div className="flex flex-col items-center text-center gap-3">
                <h2 style={{ color: styling.titleColor, margin: 0, fontSize: styling.fontSize + 4 }}>
                  {content.initial.title}
                </h2>
                <p style={{ color: styling.subtitleColor, margin: 0, fontSize: styling.fontSize - 2 }}>
                  {content.initial.subtitle}
                </p>
                <button style={btnStyle} onClick={() => setScreen("feedback")}>
                  Rate Now
                </button>
              </div>
            )}

            {/* FEEDBACK SCREEN */}
            {screen === "feedback" && (
              <div className="flex flex-col items-center gap-2">
                <RatingDisplay styling={styling} ratingType={content.feedback.ratingType} />

                {/* Options */}
                <div className="flex flex-wrap gap-1 justify-center">
                  {content.feedback.options.map((opt, i) => (
                    <span
                      key={i}
                      style={{
                        border: `1px solid ${styling.buttonColor}`,
                        color: styling.buttonColor,
                        borderRadius: styling.borderRadius,
                        padding: "3px 10px",
                        fontSize: styling.fontSize - 3,
                        cursor: "pointer",
                      }}
                    >
                      {opt}
                    </span>
                  ))}
                </div>

                {/* Comment Box */}
                {content.feedback.showComment && (
                  <textarea
                    placeholder="Add a comment..."
                    rows={2}
                    style={{
                      width: "100%",
                      border: "1px solid #d1d5db",
                      borderRadius: styling.borderRadius,
                      padding: "6px 8px",
                      fontSize: styling.fontSize - 3,
                      resize: "none",
                      outline: "none",
                    }}
                  />
                )}

                <button style={btnStyle} onClick={() => setScreen("thankyou")}>
                  {content.feedback.submitText}
                </button>
              </div>
            )}

            {/* THANK YOU SCREEN */}
            {screen === "thankyou" && (
              <div className="flex flex-col items-center text-center gap-3">
                {content.thankYou.media && (
                  <img
                    src={content.thankYou.media.url}
                    alt="thank you"
                    style={{ width: 80, height: 80, objectFit: "contain", borderRadius: 8 }}
                  />
                )}
                <h2 style={{ color: styling.titleColor, margin: 0, fontSize: styling.fontSize + 4 }}>
                  {content.thankYou.title}
                </h2>
                <p style={{ color: styling.subtitleColor, margin: 0, fontSize: styling.fontSize - 2 }}>
                  {content.thankYou.subtitle}
                </p>
                <button style={btnStyle} onClick={() => setScreen("initial")}>
                  {content.thankYou.buttonText}
                </button>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Screen switcher dots */}
      <div className="flex gap-2">
        {["initial", "feedback", "thankyou"].map((s) => (
          <button
            key={s}
            onClick={() => setScreen(s)}
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              backgroundColor: screen === s ? "#6366f1" : "#d1d5db",
            }}
          />
        ))}
      </div>
    </div>
  );
}