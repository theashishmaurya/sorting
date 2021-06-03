const bubbleSort = (arrO) => {
  const arr = [...arrO];

  const swap = (arr, xp, yp) => {
    let temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
  };

  const n = arr.length;
  let StateContainer = [];
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        StateContainer.push([...arr]);
      }
    }
  }

  return StateContainer;
};

export default bubbleSort;
