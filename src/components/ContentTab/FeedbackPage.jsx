import { useCampaign } from "../../context/CampaignContext";

export default function FeedbackPage() {
  const { content, setContent } = useCampaign();

  const update = (key, val) =>
    setContent((prev) => ({
      ...prev,
      feedback: { ...prev.feedback, [key]: val },
    }));

  const addOption = () =>
    update("options", [...content.feedback.options, "New Option"]);

  const deleteOption = (index) =>
    update(
      "options",
      content.feedback.options.filter((_, i) => i !== index)
    );

  const updateOption = (index, val) => {
    const updated = [...content.feedback.options];
    updated[index] = val;
    update("options", updated);
  };

  return (
    <div className="space-y-5 mt-6">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
        Feedback Screen
      </h3>

      {/* Rating Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Rating Type</label>
        <select
          value={content.feedback.ratingType}
          onChange={(e) => update("ratingType", e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="stars">Stars</option>
          <option value="numbers">Numbers</option>
        </select>
      </div>

      {/* Dynamic Options */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Options</label>
        <div className="space-y-2">
          {content.feedback.options.map((opt, i) => (
            <div key={i} className="flex gap-2 items-center">
              <input
                type="text"
                value={opt}
                onChange={(e) => updateOption(i, e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button
                onClick={() => deleteOption(i)}
                className="text-red-500 hover:text-red-700 text-lg font-bold px-2"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={addOption}
          className="mt-2 text-sm text-indigo-600 hover:text-indigo-800 font-medium"
        >
          + Add Option
        </button>
      </div>

      {/* Comment Toggle */}
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700">Additional Comment</label>
        <div
          onClick={() => update("showComment", !content.feedback.showComment)}
          className={`w-11 h-6 rounded-full cursor-pointer transition-colors duration-200 ${
            content.feedback.showComment ? "bg-indigo-500" : "bg-gray-300"
          } relative`}
        >
          <div
            className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all duration-200 ${
              content.feedback.showComment ? "left-6" : "left-1"
            }`}
          />
        </div>
      </div>

      {/* Submit Button Text */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Submit Button Text
        </label>
        <input
          type="text"
          value={content.feedback.submitText}
          onChange={(e) => update("submitText", e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>
    </div>
  );
}