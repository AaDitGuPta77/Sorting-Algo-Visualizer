import { useState } from 'react'
import './App.css'
import SortingAlgo from './components/SortingAlgo'
import Visualizer from './components/Visualizer'
import Navbar from './components/Navbar'
function App() {

  const [array, setArray] = useState([])
  const [isSorting, setSorting] = useState(false)
  const [compare, setCompare] = useState([-1, -1])
  const [isDarkmode, setIsDarkMode] = useState(false);

  const bubbleSort = async () => {
    if (isSorting) return;
    setSorting(true);

    let arr = [...array];
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {

        setCompare([j, j + 1]);

        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          await new Promise(resolve => setTimeout(resolve, 900));
          setArray([...arr]);
          
          setCompare([-1, -1]);
        }
      }
    }
    setSorting(false);
  };

  const insertionSort = async () => {
    if (isSorting) return;
    setSorting(true);
  
    let arr = [...array];
    const n = arr.length;
    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;
  
      setCompare([i, j]);
      await new Promise(resolve => setTimeout(resolve, 500)); // Delay for the comparison
  
      while (j >= 0 && arr[j] > key) {
        setCompare([j, j + 1]);
        arr[j + 1] = arr[j];
        j = j - 1;
        await new Promise(resolve => setTimeout(resolve, 500));
        setArray([...arr]);
      }
      arr[j + 1] = key;
      setArray([...arr]);
      setCompare([-1, -1]);
    }
  
    setSorting(false);
  };

  const selectionSort = async () => {
    if (isSorting) return;
    setSorting(true);
  
    let arr = [...array];
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < n; j++) {
        setCompare([minIndex, j]);
        await new Promise(resolve => setTimeout(resolve, 500));
  
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        setArray([...arr]);
      }
  
      setCompare([-1, -1]);
    }
  
    setSorting(false);
  };

  const mergeSort = async () => {
    if (isSorting) return;
    setSorting(true);
  
    let arr = [...array];
  
    const mergeSortHelper = async (arr, start, end) => {
      if (start >= end) return;
  
      const mid = Math.floor((start + end) / 2);
      await mergeSortHelper(arr, start, mid);
      await mergeSortHelper(arr, mid + 1, end);
      await merge(arr, start, mid, end);
    };
  
    const merge = async (arr, start, mid, end) => {
      let leftArray = arr.slice(start, mid + 1);
      let rightArray = arr.slice(mid + 1, end + 1);
  
      let i = 0, j = 0, k = start;
  
      while (i < leftArray.length && j < rightArray.length) {
        setCompare([start + i, mid + 1 + j]);
        await new Promise(resolve => setTimeout(resolve, 900));
  
        if (leftArray[i] <= rightArray[j]) {
          arr[k] = leftArray[i];
          i++;
        } else {
          arr[k] = rightArray[j];
          j++;
        }
        k++;
        setArray([...arr]);
      }
  
      while (i < leftArray.length) {
        setCompare([start + i, -1]);
        await new Promise(resolve => setTimeout(resolve, 900));
        arr[k] = leftArray[i];
        i++;
        k++;
        setArray([...arr]);
      }
  
      while (j < rightArray.length) {
        setCompare([-1, mid + 1 + j]);
        await new Promise(resolve => setTimeout(resolve, 900));
        arr[k] = rightArray[j];
        j++;
        k++;
        setArray([...arr]);
      }
  
      setCompare([-1, -1]);
    };
  
    await mergeSortHelper(arr, 0, arr.length - 1);
    setSorting(false);
  };

const quickSort = async () => {
  if (isSorting) return;
  setSorting(true);

  let arr = [...array];

  const partition = async (low, high) => {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      setCompare([j, high]); 
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArray([...arr]); 
        await new Promise(resolve => setTimeout(resolve, 900));
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setArray([...arr]); 
    await new Promise(resolve => setTimeout(resolve, 900));
    setCompare([-1, -1]);
    return i + 1;
  };

  const quickSortRecursive = async (low, high) => {
    if (low < high) {
      let pi = await partition(low, high);

      await quickSortRecursive(low, pi - 1);  
      await quickSortRecursive(pi + 1, high); 
    }
  };

  await quickSortRecursive(0, arr.length - 1);
  setSorting(false);
};



  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode)
  }
  


  return (
    <div className={isDarkmode ? '* dark-mode' : '* light-mode'}>
    <Navbar className="Nav" isDarkmode={isDarkmode} toggleTheme={toggleTheme} />
    <div className='mainBody'>
    <SortingAlgo bubbleSort={bubbleSort} 
                 insertionSort={insertionSort}
                 selectionSort={selectionSort}
                 mergeSort={mergeSort} 
                 quickSort={quickSort}
                isSorting={isSorting}/>
    
     <Visualizer array={array} setArray={setArray} isSorting={isSorting} compare={compare}/>
    </div>
    </div>
  )
}

export default App
