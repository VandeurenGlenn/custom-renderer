var render = (function () {
  'use strict';

  /**
   * @param {object} element HTMLElement
   * @param {function} tagResult custom-renderer-mixin {changes: [], template: ''}
   */
  var render = (element, {changes, template}) => {
    if (!changes && !template) return console.warn('changes or template expected');
    if (element.shadowRoot) element = element.shadowRoot;
    if (!element.innerHTML) element.innerHTML = template;
    for (const key of Object.keys(changes)) {
      const els = Array.from(element.querySelectorAll(`[render-mixin-id="${key}"]`));
      for (const el of els) {
        el.innerHTML = changes[key];
      }
    }
    return;
  }

  return render;

}());
