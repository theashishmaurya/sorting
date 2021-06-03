const mergeSort = (arr) => {
  const merge = (left, right) => {
    let arr = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        arr.push(left.shift());
      } else {
        arr.push(right.shift());
      }
    }
    return [...arr, ...left, ...right];
  };

  let StateContainer = [];
  let array = [...arr];

  const actSort = (array) => {
    const half = array.length / 2;

    if (array.length < 2) {
      return array;
    }

    StateContainer.push([...array]);
    const left = array.splice(0, half);
    return merge(actSort(left), actSort(array));
  };
  StateContainer.push([...array]);

  actSort(array);
  StateContainer = StateContainer.sort((a, b) => b.length - a.length);
  return StateContainer;
};

export default mergeSort;
