module.exports = {
  putFirstLetterUpper: (name) => {
    return name[0].toUpperCase() + name.substr(1);
  },
  setSumOfNumbers: (numbers) => {
    return numbers.reduce((acc, curr) => acc + curr);
  },
  removeRepeat: (values) => {
    return values.filter((item, index) => values.indexOf(item) === index);
  },
};
