import React from "react";
import { Merge } from "./helper";

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
  let funarray = new Array();
  funarray = [...array];
  let temp = [];
  setSteps([]);
  for (let i = 1; i < funarray.length; i++) {
    let j = i - 1;
    let x = funarray[i];
    while (j > -1 && funarray[j] > x) {
      funarray[j + 1] = funarray[j];
      j--;
    }
    funarray[j + 1] = x;
    temp.push(funarray.slice());
  }
  setSteps(temp);
};
export const SelectionSort = (array, setSteps) => {
  let funarray = new Array();
  funarray = [...array];
  let temp = [];
  setSteps([]);
  for (let i = 0; i < funarray.length; i++) {
    let j, k;
    for (j = k = i; j < funarray.length; j++) {
      if (funarray[j] < funarray[k]) {
        k = j;
      }
    }
    [funarray[i], funarray[k]] = [funarray[k], funarray[i]];
    temp.push(funarray.slice());
  }
  setSteps(temp);
};
export const HeapSort = () => {};
// Merge sort Iterative version version
export const MergeSort = (array, setSteps) => {
  let funarray = new Array();
  funarray = [...array];
  let temp = [];
  setSteps([]);
  let p, i, low, mid, high;
  for (p = 2; p <= funarray.length; p = p * 2) {
    for (i = 0; i < i + p - 1; i = i + p) {
      low = i;
      high = i + p - 1;
      mid = Math.floor((low + high) / 2);
      Merge(funarray, mid, low, high);
      temp.push(funarray.slice());
    }
  }
  if (p / 2 < funarray.length) {
    Merge(funarray, mid, low, high);
    temp.push(funarray.slice());
  }

  setSteps(temp);
};
export const QuickSort = () => {};
