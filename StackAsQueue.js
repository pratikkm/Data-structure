class node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class stack{
    constructor(){
        this.top=null;
        this.bottom=null;
        this.length=0;
    }
    push(value){
        const newNode= new node(value);
        newNode.next=this.top;
        if(this.bottom==null){
            this.bottom=this.top
        }else{
            this.bottom=this.top.next;
        }
        this.top=newNode;
        this.length++
    }
    peek(){
        const newNode= new node(this.top.value);
        console.log(newNode);
        return newNode;
    }
    pop(){
        if(this.top==null){
            
            return console.log('empty stack'); 
        }
        if(this.top==this.bottom){
            this.bottom=null;
        }

        //this.head.next=this.head;
        this.top=this.top.next;
        this.length--;
        return this;
    }
    enqueue(value){
        this.push(value)
        
    }
    dequeue(){
        
    }
}
const Mystack= new stack();
Mystack.push('google');
Mystack.push('facebook');
Mystack.push('id');
Mystack.push('login');
//Mystack.peek();
Mystack.pop();
console.log(Mystack);



    
