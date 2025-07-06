# 🚀 Deployment Guide for Zim Connect

This guide will help you deploy your Zim Connect website to GitHub Pages.

## 📋 Prerequisites

- A GitHub account
- Git installed on your computer
- Your Zim Connect project files

## 🔧 Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `zim-connect`)
5. Make sure it's set to "Public"
6. Check "Add a README file"
7. Click "Create repository"

### 2. Clone Your Repository

```bash
# Clone your new repository
git clone https://github.com/yourusername/zim-connect.git

# Navigate to the project directory
cd zim-connect
```

### 3. Add Your Project Files

Copy all your Zim Connect files to the cloned repository folder:
- `index.html`
- `style.css`
- `script.js`
- Any other assets

### 4. Commit and Push Your Files

```bash
# Add all files to git
git add .

# Commit your changes
git commit -m "Initial commit: Add Zim Connect website"

# Push to GitHub
git push origin main
```

### 5. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch
6. Select "/ (root)" folder
7. Click "Save"

### 6. Access Your Live Website

After a few minutes, your website will be available at:
```
https://yourusername.github.io/zim-connect/
```

## 🔄 Updating Your Website

To update your website:

```bash
# Make your changes to the files
# Then commit and push:

git add .
git commit -m "Update: Description of your changes"
git push origin main
```

Your changes will automatically be deployed to GitHub Pages within a few minutes.

## 🛠️ Troubleshooting

### Common Issues:

1. **404 Error**: Make sure your main file is named `index.html`
2. **Images not loading**: Check that image paths are correct and files are committed
3. **CSS not applying**: Verify that `style.css` is in the same directory as `index.html`
4. **JavaScript not working**: Check browser console for errors

### Checking Deployment Status:

1. Go to your repository
2. Click on "Actions" tab
3. Look for "pages build and deployment" workflows
4. Green checkmark = successful deployment
5. Red X = deployment failed (click to see error details)

## 📱 Custom Domain (Optional)

To use a custom domain:

1. In your repository settings, go to "Pages"
2. Under "Custom domain", enter your domain name
3. Create a `CNAME` file in your repository root with your domain name
4. Configure your domain's DNS to point to GitHub Pages

## 🔒 Security Notes

- Never commit sensitive information (API keys, passwords)
- Use environment variables for sensitive data
- Keep your repository public for GitHub Pages (free tier)

## 📞 Support

If you encounter issues:
- Check [GitHub Pages documentation](https://docs.github.com/en/pages)
- Search GitHub Community forums
- Open an issue in your repository

---

**Happy Deploying! 🎉**