# Shriya Narsai - Portfolio Website

**Live Site:** https://narsaishriya.github.io/Shriya-Narsai/

A modern, responsive portfolio website showcasing my CV, projects, and contact information.

## Features

- **Multi-page Navigation**: Home, CV, Projects, and Contact sections
- **Dark Mode Toggle**: Easy switching between light and dark themes (preference saved to browser)
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Professional Styling**: Clean, modern design with smooth transitions
- **Print-to-PDF**: CV page includes a print option to generate a PDF
- **Contact Form**: Integrated contact form (ready for Formspree integration)

## File Structure

```
├── index.html              # Home page
├── cv.html                 # Full CV page
├── projects.html           # Projects showcase
├── assets/
│   ├── css/
│   │   └── style.css       # Shared stylesheet (light & dark mode)
│   └── js/
│       └── script.js       # Dark mode toggle & form handling
├── Shriya_Narsai_CV.md     # Original markdown CV
└── README.md               # This file
```

## How to Run Locally

### Option 1: Direct in Browser
1. Open `index.html` in your web browser
2. Or run: `Start-Process index.html` (PowerShell)

### Option 2: Local Server (Recommended)
```powershell
cd c:\CV
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

## Deployment to GitHub Pages

1. **Create a GitHub repository**:
   - Go to GitHub and create a new repo (e.g., `portfolio` or `CV`)
   - Make it public

2. **Push your files**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repo Settings → Pages
   - Source: Select `main` branch
   - Save

4. **Your site is live at**: `https://yourusername.github.io/your-repo-name/`

## Customization

### Update Contact Form
The contact form currently has a placeholder. To enable it:
1. Sign up at [Formspree](https://formspree.io) (free tier available)
2. Create a form and get your form ID
3. Replace `YOUR_FORM_ID` in `assets/js/script.js` with your actual ID

### Modify Styling
- Edit `assets/css/style.css` to change colors, fonts, or layout
- CSS variables at the top make it easy to adjust the color scheme

### Update Content
- Edit HTML files directly to update text and project descriptions
- Add new projects to `projects.html` by copying a `.project-card` div

## Features

- ✨ **Dark Mode**: Click "Dark Mode" button, preference is saved
- 📱 **Mobile Responsive**: Optimized for all screen sizes
- 🎨 **Modern Design**: Professional gradient headers and smooth animations
- 🔗 **Navigation**: Sticky header for easy page navigation
- 📄 **Print Ready**: CV page formats beautifully for PDF printing

## Technologies Used

- HTML5
- CSS3 (with CSS Variables for theming)
- Vanilla JavaScript (no frameworks)
- Pure static site (no backend required)

## License

Personal portfolio - feel free to adapt for your own use.

---

**Questions or issues?** Check the browser console for any JavaScript errors.
