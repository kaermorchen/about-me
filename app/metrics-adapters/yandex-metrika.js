import { assign } from '@ember/polyfills';
import BaseAdapter from 'ember-metrics/metrics-adapters/base';

export default BaseAdapter.extend({
  toStringExtension() {
    return 'YandexMetrika';
  },

  init() {
    const config = assign({}, this.config);
    const { id } = config;

    if (typeof FastBoot === 'undefined') {
      /* eslint-disable */
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      /* eslint-enable */

      window.ym(id, 'init', {});
    }
  },

  // identify() {

  // },

  // trackEvent() {

  // },

  trackPage(options = {}) {
    window.ym(this.config.id, 'hit', options.page);
  },

  // alias() {

  // },

  willDestroy() {
    let { document } = window;
    let script = document.querySelector('script[src*="mc.yandex.ru"]');

    if (script) {
      script.remove();
    }

    delete window.ym;
  }
});
