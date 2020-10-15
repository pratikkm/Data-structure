const numbers=[99,44,6,2,1,5,63,87,283,4,0];

function MergeSort(array){
    if(array.length==1){
        return array;
    }
    const length=array.length;
    const mid=Math.round(length/2) ;
    //console.log(mid)
    const left=[];
    for(let i=0;i<mid;i++){
       left.push(array[i]);
    }
    //const left=array.slice(0,mid)
    const right=[];
    for(let i=mid;i<=array.length-1;i++){
        right.push(array[i])
    }
    //const right=array.slice(mid)
    //console.log(left);
    //console.log(right);

    return Merge(
        MergeSort(left),
        MergeSort(right))
    

}
function Merge(left,right){

    //console.log(left);
    //console.log(right);
    const result=[];
    let leftIndex=0;
    let rightIndex=0;
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex ++;
        }else{
            result.push(right[rightIndex]);
            rightIndex ++;
        }
        //console.log(left,right)
       
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))

    

}

const answer=MergeSort(numbers);
console.log(answer)
