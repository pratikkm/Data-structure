
class MyDoublyLinkedList{
    constructor(value){
        this.head={
            value:value,
            next:null,
            prev:null
        };
        this.tail=this.head;
        this.length=1;
    }

// Another method to create this const newNode is that we can create the class 
//i.e class node 


    append(value){
        //const newNode=new node(value)
        const newNode={
            value:value,
            next:null,
            prev:null
        };
        this.tail.next=newNode;
        newNode.prev=this.tail;
        this.tail=newNode;
        this.length++;
        return this;
    }
    prepend(value){
        const newNode={
            value:value,
            next:null,
            prev:null
        };
        newNode.next=this.head;
        this.head.prev=newNode;
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
            next:null,
            prev:null
        };

        Leader.next=newNode;
        newNode.prev=Leader;
        newNode.next=Holding;
        Holding.prev=newNode;
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
        Holding.prev=Leader;
        this.length--;

    }
}

const LinkedList = new MyDoublyLinkedList(10);

LinkedList.append(5);
LinkedList.append(16);
LinkedList.prepend(20);
LinkedList.insert(2,99);
LinkedList.remove(2)
LinkedList.PrintList();
console.log(LinkedList);