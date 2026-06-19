import { useCampaign } from "../../context/CampaignContext";

export default function StylingControls() {
  const { styling, setStyling } = useCampaign();

  const update = (key, val) =>
    setStyling((prev) => ({ ...prev, [key]: val }));

  const ColorField = ({ label, stateKey }) => (
    <div className="flex items-center justify-between">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-400">{styling[stateKey]}</span>
        <input
          type="color"
          value={styling[stateKey]}
          onChange={(e) => update(stateKey, e.target.value)}
          className="w-9 h-9 rounded-lg border border-gray-300 cursor-pointer p-0.5"
        />
      </div>
    </div>
  );

  return (
    <div className="space-y-5">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
        Colors
      </h3>

      <ColorField label="Background Color" stateKey="bgColor" />
      <ColorField label="Title Color" stateKey="titleColor" />
      <ColorField label="Subtitle Color" stateKey="subtitleColor" />
      <ColorField label="Button Color" stateKey="buttonColor" />
      <ColorField label="Button Text Color" stateKey="buttonTextColor" />
      <ColorField label="Rating Selected" stateKey="ratingSelected" />
      <ColorField label="Rating Unselected" stateKey="ratingUnselected" />

      <hr className="border-gray-200" />
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
        Typography
      </h3>

      {/* Font Size */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Font Size: {styling.fontSize}px
        </label>
        <input
          type="range" min="12" max="24"
          value={styling.fontSize}
          onChange={(e) => update("fontSize", +e.target.value)}
          className="w-full accent-indigo-500"
        />
      </div>

      {/* Font Weight */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Font Weight</label>
        <select
          value={styling.fontWeight}
          onChange={(e) => update("fontWeight", e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="400">Regular (400)</option>
          <option value="500">Medium (500)</option>
          <option value="600">Semi Bold (600)</option>
          <option value="700">Bold (700)</option>
        </select>
      </div>

      <hr className="border-gray-200" />
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
        Layout
      </h3>

      {/* Border Radius */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Border Radius: {styling.borderRadius}px
        </label>
        <input
          type="range" min="0" max="32"
          value={styling.borderRadius}
          onChange={(e) => update("borderRadius", +e.target.value)}
          className="w-full accent-indigo-500"
        />
      </div>

      {/* Button Width */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Button Width: {styling.buttonWidth}%
        </label>
        <input
          type="range" min="40" max="100"
          value={styling.buttonWidth}
          onChange={(e) => update("buttonWidth", +e.target.value)}
          className="w-full accent-indigo-500"
        />
      </div>

      {/* Button Height */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Button Height: {styling.buttonHeight}px
        </label>
        <input
          type="range" min="32" max="64"
          value={styling.buttonHeight}
          onChange={(e) => update("buttonHeight", +e.target.value)}
          className="w-full accent-indigo-500"
        />
      </div>
    </div>
  );
}