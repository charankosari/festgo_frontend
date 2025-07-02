# FestGo Landing Page

A modern, responsive landing page for FestGo - an event management and booking platform. Built with HTML, Tailwind CSS, and SASS for a beautiful and functional user experience.

## 🚀 Features

- **Responsive Design** - Fully responsive across all devices
- **Modern UI/UX** - Clean, modern design with smooth animations
- **Fast Loading** - Optimized for performance
- **Interactive Elements** - Engaging hover effects and animations
- **Contact Form** - Functional contact form with validation
- **Newsletter Signup** - Email subscription functionality
- **Mobile App Promotion** - App download section with store links
- **Service Showcase** - Highlighting key services offered
- **SEO Optimized** - Structured for search engine optimization

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework
- **SASS/SCSS** - CSS preprocessor for enhanced styling
- **JavaScript** - Interactive functionality
- **Google Fonts** - Inter font family

## 📁 Project Structure

```
FestGo/
├── index.html          # Main HTML file
├── styles.css          # Compiled CSS
├── styles.scss         # SASS source file
├── script.js           # JavaScript functionality
├── package.json        # Project dependencies and scripts
├── README.md           # Project documentation
└── Images/             # Image assets
    ├── System/
    ├── Interface/
    └── Warning/
```

## 🎨 Design Features

### Color Scheme
- **Primary**: #FF6B35 (Orange)
- **Secondary**: #2ECC71 (Green)
- **Accent**: #F39C12 (Yellow)
- **Text Dark**: #2C3E50
- **Text Light**: #7F8C8D

### Sections
1. **Header** - Navigation with sticky behavior
2. **Hero Section** - Main call-to-action with engaging visuals
3. **Services** - Top services offered by FestGo
4. **Features** - Why choose FestGo
5. **Contact** - Contact information and form
6. **Mobile App** - App download promotion
7. **Footer** - Newsletter signup and links

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/festgo/landing-page.git
cd FestGo
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

### Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Watch SASS files for changes
npm run watch:css

# Compile SASS to CSS
npm run build:css

# Minify JavaScript
npm run minify:js

# Serve production build
npm run serve

# Lint CSS
npm run lint:css

# Lint JavaScript
npm run lint:js

# Format code
npm run format

# Optimize for production
npm run optimize
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎭 Animations

The landing page includes various CSS animations:
- Fade in animations for sections
- Hover effects on cards and buttons
- Floating animations for decorative elements
- Scroll-triggered animations
- Loading animations for forms

## 🔧 Customization

### Colors
Update the color scheme in `styles.scss`:
```scss
$primary-color: #FF6B35;
$secondary-color: #2ECC71;
$accent-color: #F39C12;
```

### Fonts
The project uses Inter font. To change fonts, update the Google Fonts link in `index.html` and the font-family in CSS.

### Content
- Update text content in `index.html`
- Replace images in the `Images/` directory
- Modify contact information in the contact section

## 📈 Performance Optimizations

- **Minified CSS and JavaScript**
- **Optimized images**
- **Lazy loading for images**
- **Debounced scroll events**
- **Reduced motion support**
- **Service Worker ready**

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email support@festgo.com or create an issue in the repository.

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [Google Fonts](https://fonts.google.com) for the Inter font family
- [Heroicons](https://heroicons.com) for the SVG icons
- Design inspiration from modern SaaS landing pages

---

**FestGo** - Where every event begins with a click! 🎉
