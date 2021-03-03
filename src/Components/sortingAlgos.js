import React from "react";

export const BubbleSort = (array, setSteps) => {
  let funarray = new Array();
  funarray = [...array];
  let temp = [];
  setSteps([]);
  for (let i = 0; i < funarray.length - 1; i++) {
    for (let j = 0; j < funarray.length - 1; j++) {
      if (funarray[j] > funarray[j + 1]) {
        [funarray[j], funarray[j + 1]] = [funarray[j + 1], funarray[j]];
        temp.push(funarray.slice());
      }
    }
  }
  console.log("qorking");
  console.log(temp);
  setSteps(temp);

  return funarray;
};

export const InsertionSort = (array, setSteps) => {
  let funarray = [...array];
  let temp = [];
  for (let i = 1; i < funarray.length() - 1; i++) {
    let j = i - 1;
    let x = funarray[i];
    while (j > -1 && funarray[j] < x) {
      funarray[j + 1] = funarray[j];
    }
  }
};
export const SelectionSorrt = () => {};
export const HeapSort = () => {};
export const MergeSort = () => {};
export const QuickSort = () => {};
