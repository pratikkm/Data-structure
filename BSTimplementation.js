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
    lookup(value){
        let currentNode=this.root;
            while(true){
                if(value < currentNode.value){
                    //left
                    if(currentNode.value==value){
                        console.log('node found ')
                        console.log(currentNode)
                        return currentNode;
                    }
                    currentNode=currentNode.left;  

                }else{
                    // right
                    if(currentNode.value==value){
                        console.log('node Found');
                        console.log(currentNode);
                        return currentNode; 
                    }
                    currentNode=currentNode.right;
                }
            }
       // console.log(currentNode);    
    }
    remove(value){
        if(!this.root){
            return false;
        }
        let currentNode=this.root
        while(currentNode){
            if(value < currentNode.value){
                currentNode=currentNode.left;
            }else if(value > currentNode.value){
                currentNode=currentNode.right;
            }else if(value==currentNode.value){
                nextNode=currentNode.left;
                currentNode=nextNode;
                if(currentNode < currentNode.left){
                    currentNode=currentNode.left;
                    currentNode.left=currentNode;
                }
            }
        }
    }
    



}
const tree=new BinarySearchTree()
tree.insert('9');
tree.insert('4');
tree.insert('6');
tree.insert('20');
tree.insert('170');
tree.insert('15')
tree.insert('1')

//tree.lookup('15')
JSON.stringify(traverse(tree.root));
console.log(JSON.stringify(traverse(tree.root)));

function traverse(node){
    const tree={value:node.value};
    tree.left=node.left==null?null:traverse(node.left);
    tree.right=node.right==null?null:traverse(node.right);
    //console.log(tree)
    return tree;

}