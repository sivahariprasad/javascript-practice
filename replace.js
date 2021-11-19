var myarray=["one", "two", "one", "four", "five", "one", "three"];
var count ={};

myarray.forEach((element)=>{
    count[element]= (count[element] || 0) + 1;

});
console.log("no of times each element repeated is" ,count);
myarray.sort();
for(let i=myarray.length-1; i>=0; i--){
    if(myarray[i]==myarray[i-1])
    {
        myarray[i]=1;
        console.log(myarray);
    }
}