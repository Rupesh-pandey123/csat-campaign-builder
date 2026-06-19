import { useCampaign } from "../../context/CampaignContext";

export default function InitialFeedback() {
  const { content, setContent } = useCampaign();

  const update = (key, val) =>
    setContent((prev) => ({
      ...prev,
      initial: { ...prev.initial, [key]: val },
    }));

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
        Initial Feedback Screen
      </h3>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
        <input
          type="text"
          value={content.initial.title}
          onChange={(e) => update("title", e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
        <input
          type="text"
          value={content.initial.subtitle}
          onChange={(e) => update("subtitle", e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>
    </div>
  );
}