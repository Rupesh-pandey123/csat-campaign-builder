import { useState } from "react";
import { CampaignProvider } from "./context/CampaignContext";
import ContentTab from "./components/ContentTab/ContentTab";
import StylingControls from "./components/StylingTab/StylingControls";
import MobilePreview from "./components/Preview/MobilePreview";

export default function App() {
  const [activeTab, setActiveTab] = useState("content");

  return (
    <CampaignProvider>
      <div className="flex h-screen bg-gray-50 overflow-hidden">

        {/* LEFT PANEL */}
        <div className="w-1/2 flex flex-col overflow-hidden border-r border-gray-200 bg-white">

          {/* Sticky Header */}
          <div className="sticky top-0 z-10 bg-white px-6 pt-5 pb-4 border-b border-gray-100 shadow-sm">
            <h1 style={{ fontSize: "22px", fontWeight: "700", color: "#1f2937", margin: "0 0 14px 0" }}>
              CSAT Campaign Builder
            </h1>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("content")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === "content"
                    ? "bg-indigo-500 text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Content
              </button>
              <button
                onClick={() => setActiveTab("styling")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === "styling"
                    ? "bg-indigo-500 text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Styling
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-6 py-5">
            {activeTab === "content" ? <ContentTab /> : <StylingControls />}
          </div>

        </div>

        {/* RIGHT PANEL — Live Preview */}
        <div className="w-1/2 flex items-center justify-center bg-gray-50">
          <MobilePreview />
        </div>

      </div>
    </CampaignProvider>
  );
}