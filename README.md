# KESMO Starter Kit

**Version 1.0.0**

The reusable website foundation for KESMO web tools.

> Precision made simple.

## Overview

The KESMO Starter Kit provides the shared structure, design system, branding, accessibility features, search metadata, supporting pages, and documentation used by future KESMO projects.

Every new KESMO tool begins with this repository instead of being built from scratch.

The KESMO Pricing Calculator was the first completed KESMO product and served as the original design and quality benchmark. The Starter Kit now becomes the single source of truth for shared KESMO improvements.

## Purpose

The Starter Kit exists to make future KESMO tools:

- Faster to build
- Easier to maintain
- Visually consistent
- Accessible by default
- Search friendly
- Responsive across devices
- Ready for GitHub Pages
- Professional from the first release

The Starter Kit is a development template. It is not intended to be promoted as a public KESMO tool.

## Technology

The Starter Kit uses:

- HTML5
- CSS3
- Vanilla JavaScript
- SVG branding assets
- GitHub Pages

It does not require:

- A framework
- A package manager
- A build process
- Paid hosting
- Third-party runtime dependencies

## Repository Structure

```text
KESMO Starter Kit
│
├── index.html
├── about.html
├── privacy.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── styles.css
├── script.js
├── components.js
├── README.md
│
└── assets/
    ├── branding/
    │   ├── logo.svg
    │   ├── favicon.svg
    │   └── kesmo-social-share.png
    │
    ├── images/
    ├── icons/
    └── screenshots/



## Required Before Publishing

Before releasing a KESMO tool built from this Starter Kit:

- [ ] Change `robots.txt` to allow search indexing.
- [ ] Update `sitemap.xml` with the new tool's URLs.
- [ ] Replace all `KESMO-Starter-Kit` URLs with the new repository URL.
- [ ] Update the `<base>` tag in `404.html`.
- [ ] Replace the homepage content with the tool interface.
- [ ] Review the Privacy Policy for tool-specific features.
- [ ] Verify the custom 404 page.
- [ ] Test GitHub Pages deployment.
