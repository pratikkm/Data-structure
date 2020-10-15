class node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class Queue{
    constructor(){
        this.first=null;
        this.last=null;
        this.length=0;
    }
    peek(){
        console.log(this.first);
        return this.first;
    }
    enqueue(value){
        const newNode=new node(value);
        if(this.first==null){
        this.first=newNode;
        this.last=newNode;
        }else{
            this.first=this.first;
            this.last.next=newNode;
            this.last=newNode;
            
        }
        this.length++;
        return this;
    }
    dequeue(){
        
        this.first=this.first.next;
        this.length--
        if(this.first==null){
            this.last=null;
            return this;
        }
        return this;
        
    }
} 

const Myqueue=new Queue();
Myqueue.enqueue('joy');
Myqueue.enqueue('matt');
Myqueue.enqueue('pavel');
Myqueue.enqueue('samir');
Myqueue.enqueue('patrick');
Myqueue.peek();

console.log(Myqueue);