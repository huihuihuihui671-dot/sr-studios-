# SR STUDIOS - Portfolio Website Setup Guide 🚀

Welcome to your new premium portfolio! This website is built using purely HTML, CSS, and JavaScript, meaning it is blazing fast, easy to edit, and free to host.

## 📂 1. Folder Structure Explained
* `assets/`: Put ALL your images here. Thumbnails go in `assets/thumbnails/`, icons go in `assets/icons/`, etc.
* `css/`: Controls how the website looks (colors, sizes, layout).
* `js/`: Controls the animations, smooth scrolling, and filtering.
* `data/`: Contains `portfolio.json`. **This is your database.**

## 🎨 2. How to Add Your Projects (The Easy Way)
Since this site doesn't use a complicated backend or database, it relies on a simple JSON file.

1. Open your browser and go to `yourwebsite.com/admin/dashboard.html` (or open it locally).
2. Type in your Project Title, select the Category, and type the image path (e.g., `assets/thumbnails/my-new-thumb.jpg`).
3. Click **Add Project**.
4. The dashboard will generate a block of code. Copy ALL of that text.
5. Open `data/portfolio.json` in your code editor.
6. Delete everything inside, paste the new code you copied, and save!

## ✨ 3. How to Edit Text on the Homepage
1. Open `index.html`.
2. Look for the white text between the tags. 
   * Example: Change `<h1 class="hero-title">SR STUDIOS</h1>` to `<h1 class="hero-title">UK STUDIOS</h1>`.
3. Save the file.

## 🌐 4. How to Host on Railway (Free & Easy)
Railway makes it incredibly simple to host static websites.

1. Create a free account at [GitHub.com](https://github.com) and download GitHub Desktop.
2. Upload this entire `SR-STUDIOS` folder to a new GitHub repository.
3. Go to [Railway.app](https://railway.app) and create an account.
4. Click **New Project** -> **Deploy from GitHub repo**.
5. Select your newly created repository.
6. Railway will automatically detect it's an HTML site and deploy it.
7. Go to the "Settings" tab in Railway to generate a custom domain name (e.g., `sr-studios.up.railway.app`).

## 🛠️ Need to change colors?
Open `css/style.css`. At the very top, you will see `:root`. You can change `--bg-color`, `--primary-color`, and `--accent-color` here, and it will update across the entire website instantly!