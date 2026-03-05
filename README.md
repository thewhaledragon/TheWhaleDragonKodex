# TheWhaleDragonKodex
**TheWhaleDragonKodex**

A clean, minimal static blog. No build tools. No JavaScript framework. Just HTML files.

---

## 📁 File structure

```
blog/
├── index.html              ← homepage (list of all posts)
├── about.html              ← about page
└── posts/
    ├── post-template.html  ← COPY THIS to write a new post
    ├── example-post-1.html
    └── example-post-2.html
```

---

## ✏️ How to write a new post

### Step 1 — Duplicate the template
Copy `posts/post-template.html` and rename it:
```
posts/my-new-post-title.html
```
Use lowercase letters and hyphens (no spaces).

### Step 2 — Edit the post file
Open your new file and look for the ✏️ comments. Change:
- `<title>` tag at the top
- Date and tag in `.post-meta`
- `<h1 class="post-title">` — your post title
- `<p class="post-subtitle">` — a one-line description (or delete it)
- Everything inside `<div class="post-body">` — your actual writing

### Step 3 — Add it to the homepage
Open `index.html` and find the `<ul class="post-list">`.

Copy one of the existing `<li class="post-item">` blocks, paste it at the **top** of the list, and update:
- The date
- The tag label
- The title text
- The excerpt
- Both `href` links → `posts/my-new-post-title.html`

That's it. No build step needed.

---

## 🚀 Publishing to GitHub Pages

1. [Create a new GitHub repository](https://github.com/new)
   - Name it `yourusername.github.io` for a personal site, or any name for a project site

2. Upload all the blog files (drag & drop works fine in the GitHub web interface)

3. Go to your repo **Settings → Pages**

4. Under **Source**, select `main` branch and `/ (root)` folder → click **Save**

5. Your site will be live at:
   - `https://yourusername.github.io` (personal repo)
   - `https://yourusername.github.io/repo-name` (project repo)

> **Note for project repos:** If your site is at `/repo-name/`, update the links in `header` and `footer` to include the subfolder, e.g. `href="/repo-name/index.html"`.

---

## 🎨 Customising the look

All styles use CSS variables defined at the top of each file:

```css
:root {
  --bg:      #f4f9f4;   /* page background */
  --accent:  #2e7d4f;   /* green accent colour */
  --text:    #1e2e22;   /* body text */
  --muted:   #5a7a62;   /* dates, meta, footer */
}
```

Change these values to retheme the entire site instantly.

To change the site name or tagline, edit the `<header>` block in each HTML file.
(Find & Replace in your text editor makes this fast.)

---

## 💡 Tips

- **Keep filenames short and descriptive**: `posts/writing-habit.html` not `posts/post-june-12-2025-v2-final.html`
- **Tags**: Pick 3–5 consistent tags (Learning, Productivity, etc.) and reuse them so posts feel organised
- **Draft posts**: Just don't add them to `index.html` yet — the file can exist in `posts/` without being linked
