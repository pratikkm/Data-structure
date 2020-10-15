//using recursive

function ReverseRecursive(string){
    
        let StrArray=[];
        for(let i=0;i<string.length;i++){
            StrArray.push(string[i])
        }
        let array=[];
    
        array.push(StrArray[StrArray.length-1]);
        StrArray.pop();
    //console.log(word);
        console.log(array);
        console.log(StrArray);
        console.log(string.substr() + string.charAt(0));
        //console.log(array.splice(0,1)[0])
        //console.log(string.charAt(0));



        //ReverseRecursive(StrArray);
    
    //return StrArray;
}
function reverseStringRecursive (str) {
    if (str === "") {
      return "";
    } else {
        
       // console.log(reverseStringRecursive(str.substr(1)) + str.charAt(0));
      return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
  }
//reverseStringRecursive('hello')  
ReverseRecursive('hello')