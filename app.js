const view = document.getElementById('view');

const routes = {
  '/': 'This is a tiny single-page app ready for GitHub Pages hosting.',
  '/about': 'Built as a starter SPA with hash-based routing and zero build tooling.'
};

function render() {
  const hash = window.location.hash || '#/';
  const path = hash.replace(/^#/, '');
  view.textContent = routes[path] || 'Page not found.';
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);
