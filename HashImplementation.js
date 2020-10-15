class HashTable{
    constructor(size){
        this.data=new Array(size);
    }

    _hash(key){
        let hash=0;
        for(let i=0;i<key.length;i++){
            hash=(hash + key.charCodeAt(i)*i ) % this.data.length 
        }
        //console.log(hash);
        return hash;
    }
    set(key,value){
        let address= this._hash(key);
        if(!this.data[address]){
            this.data[address]=[];   
        }
        this.data[address].push([key,value]);
        //console.log(this.data[address]);
        return this.data;
    }
    get(key){
        let address=this._hash(key);
        let CurrentBucket=this.data[address];
        //console.log(CurrentBucket)
        if(CurrentBucket){
            for(let i =0;i<CurrentBucket.length;i++){
                if(CurrentBucket[i][0]==key){
                    console.log(CurrentBucket[i][1]);
                    return CurrentBucket[i][1];
                }
            }
        }
        return undefined;
    }
    keys(){
        const KeysArray=[];
        for(let i=0;i<this.data.length;i++){
            if(this.data[i]){
                //console.log(this.data[i]);
                //KeysArray.push(this.data[i]);//return [[ [ 'Orange', 500 ] ], [ [ 'mango', 1000 ],[ [ 'grapes', 200 ] ],[ [ 'chco', 3000 ] ]]
                //KeysArray.push(this.data[i][0]);  //return [ [ 'Orange', 500 ] ,  [ 'mango', 1000 ], [ 'grapes', 200 ] , [ 'chco', 3000 ] ]
                KeysArray.push(this.data[i][0][0]); //return 1st item in array i.e [ 'Orange', 'mango', 'grapes', 'chco' ]
            }
        }
        console.log(KeysArray);
        return KeysArray;
    }
    values(){
        const ValuesArray=[];
        for(let i=0;i<this.data.length;i++){
            if(this.data[i]){
                
                ValuesArray.push(this.data[i][0][1]); //return 1st item in array i.e [ 'Orange', 'mango', 'grapes', 'chco' ]
            }
        }
        console.log(ValuesArray);
        return ValuesArray;
    }
}
const myHashtable= new HashTable(50);
myHashtable.set('grapes',200);
myHashtable.set('mango',1000);
myHashtable.set('Orange',500);
myHashtable.set('chco',3000);

myHashtable.keys();
myHashtable.values();
