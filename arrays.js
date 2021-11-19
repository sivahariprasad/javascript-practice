let xy = [4,8,2,9,4,1,3,2,6,6];
xy.sort((a, b) => a - b);

let x =[];

for(let i=0; i<=xy.length-1; i++){
    if(xy[i]==xy[i-1])
    {
       
        x.unshift(xy[i]);
    }
}

console.log(x);

/*for(let i=xy.length-1; i>=0; i--){
    if(xy[i]!=xy[i-1])
    {
       
         y.unshift(xy[i]);
        
    }
}

console.log(y);*/

let y=  xy.filter( ( el ) => !x.includes( el ) );

console.log(y);







//=============================================================================================
var myArray =[
    {
    "studentName":"Jack",
    "rollNumber":1,
    "joiningDate":new Date("01/13/2021")
    },
    {},
    {},
    {
    "studentName":"Rowling",
    "rollNumber":2,
    "joiningDate":new Date("01/11/2021")
    },
    {
    "studentName":"Ali",
    "rollNumber":3,
    "joiningDate":new Date("03/21/2021")
    },
    {},
    {
    "studentName":"Rowling",
    "rollNumber":4,
    "joiningDate":new Date("03/21/2021")
    },
    {
    "studentName":"Rowling",
    "rollNumber":6,
    "joiningDate":new Date("12/10/2021")
    },
    
    {
    "studentName":"Ali",
    "rollNumber":5,
    "joiningDate":new Date("11/09/2021")
    },
    {},
    {}
    ];

    myArray= myArray.filter(value=>JSON.stringify(value)!=='{}');
    
     
    const maxdate=myArray.reduce((a, b) => (a.joiningDate > b.joiningDate ? a : b));
   
    const mindate=myArray.reduce((c, n) => (n.joiningDate < c.joiningDate ? n : c));


    console.log("Maximum joining date", maxdate.joiningDate);
    console.log("Minimum joining date",mindate.joiningDate);
    
   







