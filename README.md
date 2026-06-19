# CSAT Campaign Builder

A simplified real-time CSAT Campaign Builder built as part of a Frontend Internship Assignment.

## 🔗 Live Demo
https://csat-campaign-builder-nu.vercel.app/

## 🛠️ Tech Stack
- React.js + Vite
- Tailwind CSS
-javascript
- Context API

## Deploment 
-vercel 

## 🚀 Setup Instructions
npm install
npm run dev

## 📁 Folder Structure
src/
  components/
    ContentTab/    → InitialFeedback, FeedbackPage, ThankYouPage
    StylingTab/    → StylingControls
    Preview/       → MobilePreview
  context/         → CampaignContext.jsx
  App.jsx

## ✨ Features
- Real-time mobile preview (no save/refresh needed)
- Content tab: Initial, Feedback, Thank You screen config
- Styling tab: colors, typography, border radius, button size
- Dynamic options add/delete
- Star and number rating toggle
- Additional comment toggle
- Media upload (PNG, JPG, GIF, Lottie)
## 📱 Responsive Design

The application is fully optimized for both desktop and mobile devices.

- **Desktop:** Side-by-side layout — editor on the left, live mobile preview on the right
- **Mobile:** Single panel view with a **"Preview →"** button to switch to the live preview and **"← Back to Editor"** button to return to the editor

No content merging or overflow issues on smaller screens.