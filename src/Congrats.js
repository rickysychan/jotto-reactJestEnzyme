import React from 'react';

/**
 * @function
 * @param {object} props
 * @returns {JSX}
 */
export const Congrats = ({ success }) => {
  if (success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! you guessed the word
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};
