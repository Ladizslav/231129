const arr = [];
arr.push("Test",50,true);

arr.forEach((value,index) => {
    console.log(value,index);
})

const fun = function(arg){
    return 0;
}

/*
function sum(a){
    return fun
}
*/

function sum(a){
    return function(b){
        return a + b;
    }
}

//(sum(1))(2);
console.log(sum(1)(2));

console.log(`Array: ${arr.length}`)

function quicksort(arr) {
    if (arr.length <= 1) {
      return arr; //pole s mene nez 1 prvky je povazovano za serazene
    }
  
    const pivot = arr[Math.floor(arr.length / 2)]; //vybere pivotní prvek, který je středem pole
    const left = arr.filter(element => element < pivot); //porovna s pivotem mensi cisla a da je doleva od pivota
    const middle = arr.filter(element => element === pivot); //porovna jestli je stejny jak pivot
    const right = arr.filter(element => element > pivot); //porovna s pivotem vesti cisla a da je doprava od pivota
  
    return quicksort(left).concat(middle, quicksort(right));
  }
  
  const array = [8,4,6,2,5,7,1,3,9,8,1,2,5];
  const sortArray = quicksort(array);
  console.log(sortArray);


  



  function merge(left, right) {
    let result = [];
    let leftIndex = 0; //index pro leve pole
    let rightIndex = 0; //index pro prave pole
  
    while (leftIndex < left.length && rightIndex < right.length) { //porovnava prvky v obou polich a pridava mensi prvek do vysledneho pole.
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]); //pridani prvku z leveho pole
        leftIndex++;
      } else {
        result.push(right[rightIndex]); //pridani prvku z praveho pole
        rightIndex++;
      }
    }
  
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)); //pridani zbylich prvku do vysledneho pole
  }
  
  function mergesort(arr) { // rekurzivne deli pole na mensi casti, spojuje pomoci funkce merge
    if (arr.length <= 1) {
      return arr; //pole s mene nez 1 prvky je povazovano za serazene
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle); //leva polovina pole.
    const right = arr.slice(middle); //prava polovina pole
  
    return merge(mergesort(left), mergesort(right)); //rekurzivní volání Mergesortu na obe poloviny poli, nasledne slouceni vysledku pomoci merge
  }
  
  const unsortedArray = [6,8,1,5,3,4,7,2,9,8,5,1,7]; //implementace nahodnych prvku do nevytrideneho pole
  const sortedArray = mergesort(unsortedArray);
  console.log(sortedArray);
 







