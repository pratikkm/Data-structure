const number=[99,44,6,2,1,5,63,87,283,4,0];

const number1=[2,1,5,3,4];
let count=0;
function BubbleSort(number){
    for(let i=0;i<number.length ;i++){
        for(let j=0; j<number.length;j++){
            if(number[j]>number[j+1]){
                let temp=number[j];
                number[j]=number[j+1];
                number[j+1]=temp;
                count++;
                //number.length--;

            }
        }
    }
    console.log(count);
    console.log(number)
}

BubbleSort(number1)