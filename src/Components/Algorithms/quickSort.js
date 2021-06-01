const quickSort = (ar) => {
    let array = [...ar];
    let StateContainer = [];
  const partition = (arr, startIndex, endIndex) => {
    const pivotVal = arr[endIndex];
    let index = startIndex;

    for (let i = index; i < endIndex; i++) {
      if (arr[i] < pivotVal) {
        [arr[i], arr[index]] = [arr[index], arr[i]];
        index += 1;
      }
    }

    [arr[index], arr[endIndex]] = [arr[endIndex], arr[index]];
    return index;
  };

  const sort = (arr, startIndex, endIndex) => {
    if (startIndex >= endIndex) {
      return;
    }

    let midIndex = partition(arr, startIndex, endIndex);

    StateContainer.push([...arr]);
    sort(arr, startIndex, midIndex - 1);
    sort(arr, midIndex + 1, endIndex);
  };

  sort(array, 0, array.length - 1);
  return StateContainer;
};

export default quickSort;
