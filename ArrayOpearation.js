const fruits = ['mango','pineapple','banana','orange'];
//lookup
console.log(fruits[3]);//O(1)

//push opeartion

fruits.push('watermelon');
console.log(fruits);

// add at first position...unshift
fruits.unshift('lemon');
console.log(fruits);

// pop element
fruits.pop();
console.log(fruits);

// adding or deleting from specific index
//adding at specific postion 
//fruits.splice(start pos , remove element , 'elemet')

fruits.splice(0,1,'something');
//deleting from specific position
fruits.splice(4,1);

console.log(fruits);




