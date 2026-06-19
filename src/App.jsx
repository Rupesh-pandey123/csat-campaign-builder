import { useState } from "react";
import { CampaignProvider } from "./context/CampaignContext";
import ContentTab from "./components/ContentTab/ContentTab";
import StylingControls from "./components/StylingTab/StylingControls";
import MobilePreview from "./components/Preview/MobilePreview";

export default function App() {
  const [activeTab, setActiveTab] = useState("content");
  const [showPreview, setShowPreview] = useState(false);

  return (
    <CampaignProvider>
      <div className="flex flex-col lg:flex-row h-screen bg-gray-50 overflow-hidden">

        {/* LEFT PANEL */}
        <div className={`${showPreview ? "hidden" : "flex"} lg:flex flex-col w-full lg:w-1/2 overflow-hidden border-r border-gray-200 bg-white`}>

          {/* Sticky Header */}
          <div className="sticky top-0 z-10 bg-white px-4 lg:px-6 pt-4 lg:pt-5 pb-3 lg:pb-4 border-b border-gray-100 shadow-sm">
            <h1 style={{ fontSize: "20px", fontWeight: "700", color: "#1f2937", margin: "0 0 12px 0" }}>
              CSAT Campaign Builder
            </h1>

            {/* Tab + Preview Toggle Row */}
            <div className="flex items-center justify-between">
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

              {/* Mobile pe Preview button */}
              <button
                onClick={() => setShowPreview(true)}
                className="lg:hidden px-3 py-2 rounded-lg text-sm font-medium bg-indigo-50 text-indigo-600"
              >
                Preview →
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-4 lg:px-6 py-4 lg:py-5">
            {activeTab === "content" ? <ContentTab /> : <StylingControls />}
          </div>

        </div>

        {/* RIGHT PANEL — Live Preview */}
        <div className={`${showPreview ? "flex" : "hidden"} lg:flex flex-col w-full lg:w-1/2 items-center justify-center bg-gray-50`}>

          {/* Mobile pe Back button */}
          <button
            onClick={() => setShowPreview(false)}
            className="lg:hidden mb-4 px-4 py-2 rounded-lg text-sm font-medium bg-white border border-gray-200 text-gray-600 shadow-sm"
          >
            ← Back to Editor
          </button>

          <MobilePreview />
        </div>

      </div>
    </CampaignProvider>
  );
}