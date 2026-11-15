// Initialize Mermaid for MkDocs Material pages.
// This file is referenced from mkdocs.yml via extra_javascript.

window.addEventListener('DOMContentLoaded', () => {
  if (window.mermaid) {
    window.mermaid.initialize({ startOnLoad: true });
  }
});
