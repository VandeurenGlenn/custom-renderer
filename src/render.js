const charIt = (chars, string) => `${chars[0]}${string}${chars[1]}`;

// let offset = 0;

/**
 * @param {object} element HTMLElement
 * @param {function} tagResult custom-renderer-mixin {changes: [], template: ''}
 */
export default (element, tagResult) => {
  let offset = 0;
  if (element.shadowRoot) element = element.shadowRoot;
  if (!element.innerHTML) {
    element.innerHTML = tagResult.template
  }
  const length = element.innerHTML.length;
  tagResult.changes.forEach(change => {
    const position = change.from.position;
    const chars = [
      element.innerHTML.charAt(((position[0] - 1) + offset)),
      element.innerHTML.charAt(((position[1]) + offset))
    ];
    element.innerHTML = element.innerHTML.replace(
      charIt(chars, change.from.value), charIt(chars, change.to.value)
    );
    offset = element.innerHTML.length - length
  })
  return;
}
