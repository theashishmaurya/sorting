const heapSort = (ar) => {
  let array = [...ar];
  let StateContainer = [];

  const heapify = (arr, n, i) => {
    var largest = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2;

    if (l < n && arr[l] > arr[largest]) largest = l;

    if (r < n && arr[r] > arr[largest]) largest = r;

    if (largest != i) {
      var swap = arr[i];
      arr[i] = arr[largest];
      arr[largest] = swap;
      heapify(arr, n, largest);
    }
  };

  const sort = (arr) => {
    var n = arr.length;

    for (var i = n / 2 - 1; i >= 0; i--) heapify(arr, n, i);

    for (var i = n - 1; i > 0; i--) {
      var temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
      heapify(arr, i, 0);
      StateContainer.push([...arr]);
    }
  };

  sort(array);
  StateContainer.push(array);

  return StateContainer;
};

export default heapSort;
