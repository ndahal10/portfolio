# Portfolio Setup Guide

Your personal portfolio is now ready! Here's how to customize it:

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:5173`

## Customization Checklist

### 1. Profile Picture
- Add your profile picture to `/public/profile.jpg`
- Recommended size: 600x600px or larger (square aspect ratio)

### 2. Personal Information

**Hero Section** (`src/components/Hero.jsx`):
- Replace `[Your Name]` with your actual name
- Update the intro and description text

**Navigation** (`src/components/Navigation.jsx`):
- Replace `[Your Name]` in the logo

**Footer** (`src/components/Footer.jsx`):
- Update social media links (GitHub, LinkedIn, Twitter, Email)
- Replace `[Your Name]` in the copyright text

**Page Title** (`index.html`):
- Update `[Your Name]` in the title tag

### 3. Education Section
Edit `src/components/Education.jsx`:
- Update the education array with your schools, degrees, and achievements
- Add multiple education entries if needed
- Customize achievements and coursework

### 4. Experience Section
Edit `src/components/Experience.jsx`:
- Add your work experience, internships, or projects
- Update company names, roles, and periods
- Modify highlights and technologies used
- Add as many experiences as you like

### 5. Interests Section
Edit `src/components/Interests.jsx`:
- The default interests are: Traveling, Pinterest, Reading Substack, and Building & Learning
- Customize the descriptions to reflect your personal interests
- Update the highlights for each interest
- Change emojis if desired

### 6. Substack Reading List
Edit `src/components/SubstackList.jsx`:
- Replace the placeholder articles with your actual Substack favorites
- For each article, provide:
  - Title
  - Author name
  - Publication name
  - Article URL
  - Brief description of why it resonated with you
  - Relevant tags

Example:
```javascript
{
  title: "The Future of Remote Work",
  author: "Jane Doe",
  publication: "Tech Thoughts",
  url: "https://techthoughts.substack.com/p/remote-work-future",
  description: "Insightful analysis on how distributed teams are reshaping tech culture.",
  tags: ["Remote Work", "Culture", "Tech"]
}
```

### 7. Color Scheme
If you want to customize colors, edit `src/vars.css`:
```css
:root {
    --color-text: #fff;
    --color-primary: #576cbc;      /* Main accent color */
    --color-secondary: #19376d;     /* Secondary accent */
    --color-dark: #0b2447;          /* Dark accent */
    --color-bg: #04152d;            /* Background color */
}
```

## Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized build in the `dist` folder that you can deploy to:
- GitHub Pages
- Vercel
- Netlify
- Any static hosting service

## Tips

1. Keep descriptions concise but meaningful
2. Use the "learning and growth" theme throughout your content
3. Update the Substack list regularly with new articles
4. Add real project links in the Experience section
5. Make sure all external links work before deploying

## Need Help?

- Check the React documentation: https://react.dev
- Vite documentation: https://vitejs.dev
- CSS Modules: https://github.com/css-modules/css-modules

Enjoy your new portfolio!
