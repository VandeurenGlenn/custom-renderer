const charIt = (chars, string) => `${chars[0]}${string}${chars[1]}`;

let offset = 0;

/**
 * @param {object} element HTMLElement
 * @param {function} template custom-html templateResult
 * @param {object} properties {}
 */
export default (element, template, properties) => {
  const result = template(properties);
  if (!element.innerHTML) {
    element.innerHTML = result.template
  }
  const length = element.innerHTML.length;
  result.changes.forEach(change => {
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
