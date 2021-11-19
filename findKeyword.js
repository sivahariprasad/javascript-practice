const myStr="The min and max joining date from all the student's data";
const keyword="joining";
let result=myStr.match(keyword);
if(result){
    console.log(result);
    document.write(result);
}else{
    console.log("Search word not found");
    document.write("Search word not found");
}
