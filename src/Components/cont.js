import React, { useState, useEffect } from "react";
import bubbleSort from "./Algorithms/bubbleSort";
import heapSort from "./Algorithms/heapSort";
import insertionSort from "./Algorithms/insertionSort";
import mergeSort from "./Algorithms/mergeSort";
import quickSort from "./Algorithms/quickSort";

let continueFlag = true;
let running = false;
let skip = false;
const waitTime = 69;

const getRandomArray = (cap) => {
  return Array.from({ length: cap }, () => Math.floor(Math.random() * 100) + 1);
};

//style = {{margin : '50px', minWidth : '1200px' , minHeight : '500px'}
const Container = () => {
  const [boundArray, setboundArray] = useState(getRandomArray(25));

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const resetArray = () => {
    skip = true;
    setboundArray(getRandomArray(25));
  };
  const startStop = () => (continueFlag = !continueFlag);

  const playSort = async (func) => {
    let i = 0;
    let StateContainer = func(boundArray);
    console.log(StateContainer);
    continueFlag = true;
    if (running) {
      skip = true;
      while (running) {
        await sleep(50);
      }
    }
    skip = false;
    running = true;
    while (i < StateContainer.length) {
      if (skip) {
        running = false;
        return;
      }
      if (!continueFlag) {
        await sleep(100);
        continue;
      }
      setboundArray(StateContainer[i]);
      await sleep(waitTime);
      i++;
    }
    running = false;
  };

  return (
    <div
      className='container '
      style={{ margin: "50px ", minWidth: "1200px", minHeight: "500px" }}
    >
      <div className='row'>
        <div className='col s2 ' style={{ margin: "20px", padding: "20px" }}>
          <div className='row' onClick={resetArray}>
            <div className='waves-effect waves-light btn green'>
              Create New Array
            </div>
          </div>
          <div className='row' onClick={startStop}>
            <div className='waves-effect waves-light btn black'>Pause/Play</div>
          </div>
          <div className='row' onClick={() => playSort(bubbleSort)}>
            <div className='waves-effect waves-light btn black'>
              Bubble Sort
            </div>
          </div>
          <div className='row' onClick={() => playSort(insertionSort)}>
            <div className='waves-effect waves-light btn black'>
              Insertion Sort
            </div>
          </div>
          <div className='row' onClick={() => playSort(quickSort)}>
            <div className='waves-effect waves-light btn black'>Quick Sort</div>
          </div>
          <div className='row' onClick={() => playSort(heapSort)}>
            <div className='waves-effect waves-light btn black'>Heap Sort</div>
          </div>
          <div className='row' onClick={() => playSort(mergeSort)}>
            <div className='waves-effect waves-light btn black'>Merge Sort</div>
          </div>
        </div>
        <div className='col s9 grey' style={{ padding: "10px" }}>
          <div style={{ minWidth: "1000px", minHeight: "500px" }}>
            {boundArray.map((val, index) => (
              <div key={index}>
                <div style={{ height: "1px" }}></div>
                <div
                  className='bar black'
                  style={{ height: "15px", width: val * 8 }}
                >
                  {" "}
                </div>
                <div style={{ height: "1px" }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
