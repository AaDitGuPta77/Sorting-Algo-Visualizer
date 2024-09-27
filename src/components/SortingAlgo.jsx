import React from 'react';
import AlgoComponent from './AlgoComponent';
import '../component-css/SortingAlgo.css';

function SortingAlgo({ bubbleSort, insertionSort, selectionSort, mergeSort, quickSort, isSorting }) {
  return (
    <div className="algoNames">
      <AlgoComponent Name="Bubble Sort" onSort={bubbleSort} isSorting={isSorting} />
      <AlgoComponent Name="Insertion Sort" onSort={insertionSort} isSorting={isSorting} />
      <AlgoComponent Name="Selection Sort" onSort={selectionSort} isSorting={isSorting} />
      <AlgoComponent Name="Merge Sort" onSort={mergeSort} isSorting={isSorting} />
      <AlgoComponent Name="Quick Sort" onSort={quickSort} isSorting={isSorting} />
    </div>
  );
}

export default SortingAlgo;
