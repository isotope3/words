/**
 * Returns number of words in the argument supplied.
 * Words are seperated by a space.
 */

const count = words => {
  return words ? words.split(' ').length : 0;
};

exports.count = count;
