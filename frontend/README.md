# Valu Carz Frontend

React.js application for Valu Carz - Car Price Prediction System

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── pages/          # Page components
├── components/     # Reusable components
├── styles/        # Global styles
├── assets/        # Images and icons
├── App.jsx        # Main app component
└── index.jsx      # Entry point
```

## Pages

- **Home**: Landing page with features and overview
- **PredictPrice**: Form for car price prediction
- **CarExplorer**: Browse and search vehicles
- **About**: Team and company information
- **PrivacyPolicy**: Data protection terms
- **TermsOfUse**: Usage terms and conditions

## Components

- **Navigation**: Top navigation bar
- **Footer**: Bottom footer with links
- **Button**: Reusable button component
- **Card**: Reusable card component

## Dependencies

- react
- react-router-dom
- axios
- framer-motion
- tailwindcss
- lucide-react

## Environment Variables

Create `.env` file:
```
VITE_API_URL=http://localhost:8000
```

## API Integration

The frontend communicates with the FastAPI backend at `http://localhost:8000`

Endpoints:
- `POST /predict` - Make price prediction
- `GET /options` - Get available options
- `GET /health` - Health check

## Car Explorer Images

- Folder path: `public/images/explorer/`
- Naming format: `car-1.png`, `car-2.png`, ..., `car-200.png`
- Auto-fetch behavior: explorer first tries `/images/explorer/car-{id}.png`
- Fallback behavior: remote image URL → `/images/car-placeholder.svg`
