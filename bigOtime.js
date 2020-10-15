const nemo=['nemo','dora']

const large= new Array(1000).fill('nemo');

function FindNemo(array){
	
	for(let i=0;i<array.length ;i++){
	if(array[i]=='nemo'){
	console.log('nemo found at position: ',i);}
	}
	
	
}

//FindNemo(large); //O(n)---> Linear time

const boxes=['chocolate','candy','strawberry','mangoes'];

function OutTwoBoxes(array){
    console.log(array[0]);
    console.log(array[1]);
}
OutTwoBoxes(boxes); // O(1)----> Constant time

//console.log(Math.pow(9,1000));