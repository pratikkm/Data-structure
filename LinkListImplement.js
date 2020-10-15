// 10-->5-->16

// Reverse a linklist is imp for interviews 

// let LinkedList ={
//    head:{
//        value:
//        next:{
//            value:
//            next:{
//                value:
//                next:null;
//            }
//        }
//    }
//}

//class Node{
//    constructor(value){
//        this.value=value;
//        this.next=null;
//    }
//}

class MyLinkedList{
    constructor(value){
        this.head={
            value:value,
            next:null
        }
        this.tail=this.head;
        this.length=1;
    }

// Another method to create this const newNode is that we can create the class 
//i.e class node 


    append(value){
        //const newNode=new node(value)
        const newNode={
            value:value,
            next:null
        };
        this.tail.next=newNode;
        this.tail=newNode;
        this.length++;
        return this;
    }
    prepend(value){
        const newNode={
            value:value,
            next:null
        };
        newNode.next=this.head;
        this.head=newNode;
        this.length++;
        return this;
    }
    PrintList(){
        const array=[];
        let CurrentNode=this.head;
        while(CurrentNode!=null){
            array.push(CurrentNode.value)
            CurrentNode=CurrentNode.next;
        }
        console.log(array);
        return array;
    }

    insert(index,value){
        
        if(index>=this.length){
            return this.append(value);

        }
        const Leader=this.TraverseToIndex(index);//  * (leader) -----*(Holdingpoint)     
        const Holding=Leader.next;               //       \             /
                                                //              *(new Element to insert)
        const newNode={
            value:value,
            next:null
        }
        Leader.next=newNode;
        newNode.next=Holding;
        this.length++;
        
    }
    TraverseToIndex(index){
        let Counter=0;
        let CurrentNode=this.head;
        //fetching node which is before the given index 
        while(Counter!=index-1){
            CurrentNode=CurrentNode.next;
            Counter++;
        }
        return CurrentNode;
    }
    remove(index){
        if(index>=this.length){
            
            return console.log("No data at this index");
        }
        const Leader=this.TraverseToIndex(index);
        const ToBeDeleted=Leader.next;
        const Holding=ToBeDeleted.next;
        Leader.next=Holding;
        this.length--;

    }
    reverse(){
        if(!this.head.next){
            return this.head;
        }

        let first=this.head;
        this.tail=this.head;
        let second=first.next;

        while(second){
            //console.log(first,second);
            const temp=second.next;
            second.next=first;
            first=second;
            //console.log(first);
            second=temp;
            //console.log(second);
        }
        this.head.next=null;
        this.head=first;
        return this.PrintList();
        
        
    }
}

const LinkedList = new MyLinkedList(10);

LinkedList.append(5);
LinkedList.append(16);
LinkedList.prepend(20);
LinkedList.insert(2,99);
LinkedList.reverse();
//LinkedList.PrintList();
//console.log(LinkedList);