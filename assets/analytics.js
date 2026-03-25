(function () {
  function trackEvent(name, params) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, params || {});
    }
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push(Object.assign({ event: name }, params || {}));
    }
  }

  window.trackCta = function (label, location) {
    trackEvent('cta_click', {
      cta_label: label,
      cta_location: location || 'unknown'
    });
  };

  function initCtaTracking() {
    document.addEventListener('click', function (event) {
      var link = event.target.closest('a[data-cta]');
      if (!link) {
        return;
      }
      var label = link.getAttribute('data-cta');
      var location = link.getAttribute('data-location') || (window.location.pathname === '/' || window.location.pathname.endsWith('/index.html') ? 'home' : 'app_page');
      window.trackCta(label, location);
    });
  }

  function init() {
    initCtaTracking();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
