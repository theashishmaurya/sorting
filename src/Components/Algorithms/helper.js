//Helper file for Algorithms

export const Merge = (array, mid, l, h) => {
  let i, j;
  i = l;
  j = mid + 1;
  let temp = [];
  while (i < mid + 1 && j < h) {
    if (array[i] < array[j]) {
      temp.push(array[i]);
      i++;
    } else {
      temp.push(array[j]);
      j++;
    }
  }
  for (; i < mid + 1; i++) {
    temp.push(array[i]);
  }
  for (; j < h; j++) {
    temp.push(array[j]);
  }
  for (let i = 0; i < temp.length; i++) {
    array[i] = temp[i];
  }
};

// Tester Code
const mergeAlgoTester = () => {
  const array = [10, 35, 3, 5, 34, 93, 40];
  const mid = array.length / 2;
  const low = 0;
  const high = array.length;
  const result = Merge(array, mid, low, high);
  console.log(result);
};
