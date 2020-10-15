//Merge Sorted array [0,3,4,31] [4,6,30]
//[0,3,4,4,6,30,31]

const array1=[0,3,4,31];
const array2=[4,6,25,30,61];
const total=[];
let i=0;
let j=0;

let FirstItem1=array1[i];
let FirstItem2=array2[j];

while(FirstItem1|| FirstItem2){
    console.log(FirstItem1,FirstItem2)
    if(!FirstItem2||FirstItem1<FirstItem2){
        total.push(FirstItem1);
        i++
        FirstItem1=array1[i]
    }
    else{
        total.push(FirstItem2)
        j++;
        FirstItem2=array2[j];
    }
}

console.log(total)



