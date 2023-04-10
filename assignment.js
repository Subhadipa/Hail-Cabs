let arr=[ "green apple","apple","orange","papaya","grapes","watermelon","blackcurrant","raspberry","strawberry"]

let result=[]
for(let i=0;i<arr.length;i++){
    countString(arr[i])
}
function countString(str){

    for( let i = 0 ;i < str.length ;i++)
    {
      let count = 0;
      for( let j = 0 ;j < str.length ;j++)
      {
        if( str[i] == str[j] && i > j  )
        {
         break;
        }
        
        if( str[i] == str[j])
        {
           
                count++;
        }
      }
      if(count > 1){
        result.push(str)
      }
       
    }
   

}
console.log(result)
