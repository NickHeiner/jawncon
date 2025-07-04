# JawnCon

Welcome to JawnCon - The world's most in-depth, cross-sector gathering celebrating the international jawn community.

## 🚀 About

JawnCon is Philadelphia's premier jawn trading convention, featuring:

- 🎲 Dice & gaming jawns
- 🪙 Vintage coins and currency
- 🔩 Industrial salvage (nails, hardware)
- 📎 Office supplies exchange
- 🎫 Memorabilia and ticket stubs
- 🍗 Culinary jawns (including wet boneless wings)

## 🛠️ Built with Astro

This site is built using [Astro](https://astro.build/), a modern static site builder.

## 📁 Project Structure

```
jawncon/
├── public/
│   ├── assets/           # Images and static assets
│   ├── jawncon_files/    # Legacy files from original site
│   └── styles/           # Global CSS
├── src/
│   ├── layouts/          # Layout components
│   ├── pages/            # Site pages (routes)
│   └── styles/           # Source stylesheets
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project:

| Command           | Action                                     |
| :---------------- | :----------------------------------------- |
| `npm install`     | Install dependencies                       |
| `npm run dev`     | Start local dev server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`         |
| `npm run preview` | Preview build locally before deploying     |

## 🚀 Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:4321](http://localhost:4321) in your browser

## 📝 Adding Content

- **Pages**: Add new `.astro` files in `src/pages/`
- **Images**: Place images in `public/assets/images/`
- **Styles**: Edit global styles in `src/styles/global.css`

## 🌐 Deployment

Build the site for production:

```bash
npm run build
```

The static site will be generated in the `dist/` folder, ready to be deployed to any static hosting service.

## 📜 License

MIT License - Feel free to use this code for your own jawn-related endeavors!
