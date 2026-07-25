/*
  KESMO Starter Kit
  Version: 1.0.0

  Shared page components for KESMO web tools.
*/

"use strict";

/*
  Central KESMO configuration.

  Update these values when the permanent KESMO Home address
  or shared brand paths change.
*/
const KESMO_CONFIG = Object.freeze({
  homeUrl: "https://kesmoworks.github.io/",
  organizationUrl: "https://github.com/KESMOWorks",
  brandName: "KESMO",
  tagline: "Precision made simple.",
  logoPath: "assets/branding/logo.svg"
});

/**
 * Returns the filename for the current page.
 *
 * GitHub Pages may serve the project homepage with either an empty
 * pathname segment or index.html, so both are normalized to index.html.
 *
 * @returns {string}
 */
function getCurrentPageName() {
  const pathSegments = window.location.pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];

  return lastSegment || "index.html";
}

/**
 * Determines whether a navigation link represents the current page.
 *
 * @param {string} pageName
 * @returns {boolean}
 */
function isCurrentPage(pageName) {
  return getCurrentPageName() === pageName;
}

/**
 * Returns aria-current markup for the active navigation link.
 *
 * @param {string} pageName
 * @returns {string}
 */
function getAriaCurrent(pageName) {
  return isCurrentPage(pageName)
    ? ' aria-current="page"'
    : "";
}

/**
 * Creates the shared KESMO site header.
 *
 * @returns {string}
 */
function createSiteHeader() {
  return `
    <a class="skip-link" href="#main-content">
      Skip to main content
    </a>

    <header class="site-header">
      <div class="page-container">
        <a
          class="site-name"
          href="${KESMO_CONFIG.homeUrl}"
          aria-label="Visit the KESMO home page"
        >
          <img
            class="site-logo"
            src="${KESMO_CONFIG.logoPath}"
            alt=""
            width="42"
            height="42"
            aria-hidden="true"
          >

          <span>${KESMO_CONFIG.brandName}</span>
        </a>

        <nav
          class="site-navigation"
          aria-label="Main navigation"
        >
          <a
            href="index.html"${getAriaCurrent("index.html")}
          >
            Home
          </a>

          <a
            href="about.html"${getAriaCurrent("about.html")}
          >
            About
          </a>

          <a
            href="privacy.html"${getAriaCurrent("privacy.html")}
          >
            Privacy
          </a>
        </nav>
      </div>
    </header>
  `;
}

/**
 * Creates the shared KESMO site footer.
 *
 * The year is calculated when the component is rendered, so the
 * footer does not require a separate year-update function.
 *
 * @returns {string}
 */
function createSiteFooter() {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="site-footer">
      <div class="page-container footer-container">
        <div class="footer-brand">
          <a
            class="footer-site-brand"
            href="${KESMO_CONFIG.homeUrl}"
            aria-label="Visit the KESMO home page"
          >
            <img
              class="footer-logo"
              src="${KESMO_CONFIG.logoPath}"
              alt=""
              width="36"
              height="36"
              aria-hidden="true"
            >

            <span>${KESMO_CONFIG.brandName}</span>
          </a>

          <p>
            ${KESMO_CONFIG.tagline}
          </p>
        </div>

        <nav
          class="footer-navigation"
          aria-label="Footer navigation"
        >
          <a href="index.html">
            Home
          </a>

          <a href="about.html">
            About
          </a>

          <a href="privacy.html">
            Privacy
          </a>

          <a href="${KESMO_CONFIG.homeUrl}">
            All KESMO Tools
          </a>

          <a href="${KESMO_CONFIG.organizationUrl}">
            GitHub
          </a>
        </nav>

        <p class="copyright">
          &copy; ${currentYear}
          ${KESMO_CONFIG.brandName}. All rights reserved.
        </p>
      </div>
    </footer>
  `;
}

/**
 * Inserts a shared component into an existing page placeholder.
 *
 * @param {string} elementId
 * @param {string} markup
 */
function renderComponent(elementId, markup) {
  const element = document.getElementById(elementId);

  if (!element) {
    return;
  }

  element.innerHTML = markup;
}

/**
 * Initializes all shared KESMO components.
 */
function initializeComponents() {
  renderComponent("site-header", createSiteHeader());
  renderComponent("site-footer", createSiteFooter());
}

initializeComponents();
