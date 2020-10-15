const nemo=['nemo','dora']

const large= new Array(1000).fill('nemo');

function FindNemo(array){
	
	for(let i=0;i<array.length ;i++){
	if(array[i]=='nemo'){
	console.log('nemo found at position: ',i);}
	}
	
	
}

FindNemo(large); //O(n)---> Linear time