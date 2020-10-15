class Array{
    constructor(){
        this.len = 0;
        this.data= {};
    }
    get(index){
        return this.data[index];

    }

    push(item){
        this.data[this.len]=item;
        this.len++;
        return this.len ;
    }
    pop(){
        delete this.data[this.len - 1];
        this.len -- ;
        //return this.len;
    }

    delete(index){

        const elemnt = this.data[index];
        delete this.data[index];
        this.shiftItem(index);
        //this.len --;

    }

    //not working 
    add(index,element){
        for(let i =this.len ;i< index; i--){
            this.data[i]=this.data[i+1];
            delete this.data[i];
        }
        this.data[index]=element;
        this.len++;
    }
        
        
    

    shiftItem(item){
        for(let i= item;i<this.len ;i++){
            this.data[i]=this.data[i+1];
        }
        //delete this.data[this.len-1]
        this.len--
    }
    

}
const newArray = new Array();

newArray.push('!!!');
newArray.push('hey');
newArray.push('looks ');
newArray.push('cool');
//newArray.pop();
//newArray.pop();
//newArray.delete(1);
//newArray.add(2,'you')
console.log(newArray);

