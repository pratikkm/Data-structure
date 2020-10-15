const numbers=[99,44,6,2,1,5,63,87,283,4,0];

function InsertionSort(array){
    
    const length=array.length;
    for(let i=0;i<length;i++){
        //loop over array and move number to first position
        if(array[i]<array[0]){
            array.unshift(array.splice(i,1)[0])
        }else{
            //find where should it go
            for(let j=1;j<i;j++){
                if(array[i]>array[j-1] && array[i] < array[j]){
                    //move it to right spot
                    array.splice(j,0,array.splice(i,1)[0]);
                }

            }
        }
    }
}
InsertionSort(numbers);
console.log(numbers);