class stack{
    constructor(){
        this.array=[]
    }
    push(value){
      this.array.push(value);  
      return this.array
    }
    peek(){
        console.log(this.array[this.array.length-1])
        return this.array[this.array.length-1]
    }
    pop(){
        this.array.pop();
        return this.array;
    }
}
const Mystack=new stack();
Mystack.push('google');
Mystack.push('facebook');
Mystack.push('id');
Mystack.push('login');
//Mystack.peek();
Mystack.pop()

console.log(Mystack);