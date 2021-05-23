const createArray = () => {
  let array = [];
  let i = 0;
  while (i < 25) {
    let number = Math.random() * 100;
    array.push(number);
    i++;
  }
  return array;
};
export default createArray;
