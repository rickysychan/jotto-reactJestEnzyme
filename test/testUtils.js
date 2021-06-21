/**
 * factory function to create a shallowWrapper for the congrats component
 * @function
 * @param {object} props - component props specific to this set up
 * @returns {shallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};
