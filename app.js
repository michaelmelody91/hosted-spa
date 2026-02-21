const view = document.getElementById('view');

const routes = {
  '/': `
    <h2>Your local plumber in the west of Ireland</h2>
    <p>
      Whether it's an urgent leak, a bathroom upgrade, or routine maintenance,
      I provide friendly and dependable plumbing support with clear pricing.
    </p>
    <p>
      I also service domestic heat pump systems to keep your home efficient and comfortable all year.
    </p>
  `,
  '/services': `
    <h2>Services</h2>
    <ul>
      <li>Heat pump checks, servicing, and troubleshooting</li>
      <li>General plumbing repairs and maintenance</li>
      <li>Pipework, taps, toilets, and shower installations</li>
      <li>Leak detection and emergency call-outs</li>
      <li>Hot water cylinder and radiator plumbing work</li>
    </ul>
  `,
  '/contact': `
    <h2>Contact Me</h2>
    <p>
      Need help quickly? Get in touch for a free estimate or to arrange a call-out.
    </p>
    <ul class="contact-list">
      <li><strong>Phone:</strong> <a href="tel:+353871234567">+353 87 123 4567</a></li>
      <li><strong>Email:</strong> <a href="mailto:info@westcoastplumbing.ie">info@westcoastplumbing.ie</a></li>
      <li><strong>Service area:</strong> West of Ireland (including Galway, Mayo, and Clare)</li>
    </ul>
  `
};

function render() {
  const hash = window.location.hash || '#/';
  const path = hash.replace(/^#/, '');
  view.innerHTML = routes[path] || '<h2>Page not found</h2><p>Please choose a page from the menu.</p>';
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);
