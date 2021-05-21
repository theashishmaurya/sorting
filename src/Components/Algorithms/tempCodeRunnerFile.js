const Merge = (array, mid, l, h) => {
  let i, j;
  i = 0;
  j = mid;
  let temp = [];
  while (i < mid && j < h) {
    if (array[i] < array[j]) {
      temp.push(array[i]);
      i++;
    } else {
      temp.push(array[j]);
      j++;
    }
  }
  for (; i < mid; i++) {
    temp.push(array[i]);
  }
  for (; j < h; j++) {
    temp.push(array[j]);
  }
  return temp;
};

const mergeAlgoTester = () => {
  const array = [10, 35, 3, 5, 34, 93, 40];
  const mid = Math.floor(array.length / 2);
  const low = 0;
  const high = array.length;
  return Merge(array, mid, low, high);
};

console.log(mergeAlgoTester());
