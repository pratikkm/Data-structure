class Node{
    constructor(value){
        this.left=null;
        this.right=null;
        this.value=value;
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null;
    }
    insert(value){
        const newNode = new Node(value);
        if (this.root==null) {
            this.root=newNode;
        }else{
            let currentNode=this.root;
            while(true){
                if(value < currentNode.value){
                    //left
                    if(!currentNode.left){
                        currentNode.left=newNode;
                        return this;
                    }
                    currentNode=currentNode.left;  

                } else{
                    // right
                    if(!currentNode.right){
                        currentNode.right=newNode;
                        return this; 
                    }
                    currentNode=currentNode.right;
                }
            }
        }
      
    }

    breathFirstSearch(){
        let currentNode=this.root;
        let list=[];
        let queue=[];
        queue.push(currentNode);

        while(queue.length>0){
            currentNode=queue.shift();
            list.push(currentNode.value);
            if(currentNode.left){
                queue.push(currentNode.left);
            }
            if(currentNode.right){
                queue.push(currentNode.right);
            }
        }
        console.log(list);
    }

    breathFirstSearchRecersive(queue,list){
        if(queue.length==0){
            return queue;
        }
        let currentNode=queue.shift();
        list.push(currentNode.value);
        if(currentNode.left){
            queue.push(currentNode.left);
        }
        if(currentNode.right){
            queue.push(currentNode.right);
        }
        console.log(list);
        return this.breathFirstSearchRecersive(queue,list);
    }

    DFSInorder(){
        return traverseInorder(this.root,[])
    }
    DFSPreorder(){
        return traversePreorder(this.root,[])
    }
    DFSPostorder(){
        return traversePostorder(this.root,[])
    }
        

}
const tree=new BinarySearchTree()
tree.insert('9');
tree.insert('4');
tree.insert('6');
tree.insert('20');
tree.insert('170');
tree.insert('15');
tree.insert('1');
//tree.breathFirstSearch();
//tree.breathFirstSearchRecersive([tree.root],[])
tree.DFSPostorder();

//JSON.stringify(traverse(tree.root));
//console.log(JSON.stringify(traverse(tree.root)));

function traverse(node){
    const tree={value:node.value};
    tree.left=node.left==null?null:traverse(node.left);
    tree.right=node.right==null?null:traverse(node.right);
    //console.log(tree)
    return tree;

}

function traverseInorder(node ,list){

    if(node.left){
        traverseInorder(node.left ,list)
    }
    list.push(node.value);
    if(node.right){
        traverseInorder(node.right,list)
    }
    console.log(list)
    return list
}

function traversePreorder(node,list){
    list.push(node.value);
    if(node.left){
        traversePreorder(node.left,list)
    }
    if(node.right){
        traversePreorder(node.right,list)
    }
    console.log(list);
    return list
    
}

function traversePostorder(node,list){
    if(node.left){
        traversePostorder(node.left,list)
    }
    if(node.right){
        traversePostorder(node.right,list)
    }
    list.push(node.value);
    console.log(list)
    return list
}
