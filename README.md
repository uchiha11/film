# Cinematographer Portfolio

A modern, responsive portfolio website for cinematographers built with React, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

Visit the live site: [https://uchiha11.github.io/film](https://uchiha11.github.io/film)

🚀 **Status**: Ready for deployment!

## 📋 Features

- Modern, responsive design
- Smooth animations with Framer Motion
- Video background integration
- Portfolio showcase
- Client testimonials
- Contact form
- Music toggle functionality

## 🛠️ Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React Icons
- React Intersection Observer

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/uchiha11/film.git
cd film
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🚀 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment (Recommended)

1. **Push to GitHub**: Simply push your changes to the `main` or `master` branch
2. **GitHub Actions**: The workflow will automatically build and deploy your site
3. **Enable GitHub Pages**: Go to your repository settings → Pages → Source → GitHub Actions

### Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
npm run deploy
```

### Repository Settings Required

1. Go to your GitHub repository settings
2. Navigate to **Pages** section
3. Under **Source**, select **GitHub Actions**
4. The site will be available at: `https://uchiha11.github.io/film`

## 📁 Project Structure

```
src/
├── components/
│   ├── AboutSection.tsx
│   ├── ClientsSection.tsx
│   ├── ContactSection.tsx
│   ├── HeroSection.tsx
│   ├── MusicToggle.tsx
│   ├── Navigation.tsx
│   ├── PortfolioSection.tsx
│   └── ShowreelSection.tsx
├── App.tsx
├── App.css
└── index.tsx
```

## 🔧 Configuration

The project is pre-configured with:
- **Homepage URL**: `https://uchiha11.github.io/film`
- **Build Output**: `build/` directory
- **GitHub Actions**: Automatic deployment workflow

## 📝 Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run deploy` - Manual deployment to GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.