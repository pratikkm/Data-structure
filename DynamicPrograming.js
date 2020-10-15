//fibonacci using dynamic programing


let steps=0;
function FibonacciRecursive(n){
    steps++
    if(n <2 ){
        return n
    } else {
        
        return FibonacciRecursive(n-1) + FibonacciRecursive(n-2)
    }

}

function FibonacciDynamic(){
    let cache={}
    return function FiboDy(n){
        
        if(n in cache){
            return cache[n];
        }else{
            if(n<2){
                return n;
            }else{
                cache[n]=FiboDy(n-1)+FiboDy(n-2) 
                return cache[n];         
            }
        }
    }
}
//const BestFibo=FibonacciDynamic();
//console.log(BestFibo(96));
//

FibonacciRecursive(50)
console.log(steps)
