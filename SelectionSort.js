const number=[99,44,6,2,1,5,63,87,283,4,0];

function SelectionSort(number){
    for(let i=0;i<number.length ;i++){
        //set reference to the min element
        let min=i;
        let temp=number[i];
        for(let j=i+1; j<number.length;j++){
            if(number[j]<number[min]){
                min=j;



            }
        }
        number[i]=number[min];
        number[min]=temp;
    }
    console.log(number)
}

SelectionSort(number)