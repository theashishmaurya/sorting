const insertionSort = (arrO) => {
  let arr = [...arrO];
  const n = arr.length;
  let i, key, j;
  let StateContainer = [];
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      StateContainer.push([...arr]);
      j = j - 1;
    }
    arr[j + 1] = key;
    StateContainer.push([...arr]);
  }
  return StateContainer;
};

export default insertionSort;
