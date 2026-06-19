import { useCampaign } from "../../context/CampaignContext";

export default function ThankYouPage() {
  const { content, setContent } = useCampaign();

  const update = (key, val) =>
    setContent((prev) => ({
      ...prev,
      thankYou: { ...prev.thankYou, [key]: val },
    }));

  const handleMedia = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    update("media", { url, type: file.type, name: file.name });
  };

  return (
    <div className="space-y-5 mt-6">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
        Thank You Screen
      </h3>

      {/* Media Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Upload Media
        </label>
        <input
          type="file"
          accept=".png,.jpg,.jpeg,.gif,.json"
          onChange={handleMedia}
          className="w-full text-sm text-gray-500 file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
        />
        {content.thankYou.media && (
          <p className="text-xs text-green-600 mt-1">
            ✓ {content.thankYou.media.name}
          </p>
        )}
        <p className="text-xs text-gray-400 mt-1">PNG, JPG, JPEG, GIF, Lottie (.json)</p>
      </div>

      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
        <input
          type="text"
          value={content.thankYou.title}
          onChange={(e) => update("title", e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {/* Subtitle */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
        <input
          type="text"
          value={content.thankYou.subtitle}
          onChange={(e) => update("subtitle", e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {/* Button Text */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Button Text</label>
        <input
          type="text"
          value={content.thankYou.buttonText}
          onChange={(e) => update("buttonText", e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>
    </div>
  );
}