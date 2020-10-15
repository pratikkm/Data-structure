const numbers=[99,44,6,2,1,5,63,87,283,4,0];

function RadixSort(array){
    let length=array.length;

    let max=GetMax(array,length)

    for(let exp=1;max/exp>0;exp*=10){
        CountSort(array,length,exp)
    }
}
function GetMax(array,length){
    let max=array[0]
    for(let i=0;i<length-1;i++){
        if(array[i]>max){
            max=array[i];
        }
    }
    return max;
}
function CountSort(array,length,exp){
    const output=[];
    //something is wrong here
    const count= [...Array(10)].map(() => []);

    for(let i=0;i<length;i++){
        count[(array[i]/exp)%10]++;
        console.log(count[(array[i]/exp)%10])
    }

    for(let i=1;i<10;i++){
        count[i]+=count[i-1];
    }
    for(let i=length-1;i>=0;i--){
        output[count[(array/exp)%10]-1]=array[i];
        count[(array[i]/exp)%10]--;

    }

    for(let i=0;i<length;i++){
        array[i]=output[i];
    }
}

//RadixSort(numbers);
//console.log(numbers)

function radixSort(arr) {
    // Find the max number and multiply it by 10 to get a number
    // with no. of digits of max + 1
    const maxNum = Math.max(...arr) * 10;
    let divisor = 10;
    while (divisor < maxNum) {
       // Create bucket arrays for each of 0-9
       let buckets = [...Array(10)].map(() => []);
       // For each number, get the current significant digit and put it in the respective bucket
       for (let num of arr) {
          buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
       }
       // Reconstruct the array by concatinating all sub arrays
       arr = [].concat.apply([], buckets);
       // Move to the next significant digit
       divisor *= 10;
    }
    return arr;
 }
 console.log(radixSort(numbers))