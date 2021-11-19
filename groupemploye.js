var employeesDetails = [
       {
        "employeeId":"EMP1",
        "salary":10000
        },
        {
        "employeeId":"EMP2",
        "salary":15000
        },
        {
        "employeeId":"EMP3",
        "salary":24200
        },
        {
        "employeeId":"EMP4",
        "salary":10000
        },
        {
        "employeeId":"EMP5",
        "salary":10000
        },
        {
        "employeeId":"EMP6",
        "salary":24200
        },
        {
        "employeeId":"EMP7",
        "salary":37600
        },
        {
        "employeeId":"EMP8",
        "salary":15000
        }
        
];
/*let oneSalary = employeesDetails.map(emp => {
    let ones = {
      "salary": emp.salary,
      "employees": []
    };
    if (emp.salary){
        ones.employees.push(emp.employeeId);
    }
    

    return ones;
   });
   console.log(oneSalary);

   const eneSalary= [];
const salObj = {};

for(const {employeeId, salary} of employeesDetails) {
   if(!salObj[salary]) {
     salObj["salary"] = salary;
     salObj["employees"]=[];
   }
  
   salObj["employees"].push(employeeId);
   
   eneSalary.push(salObj);
   
   
 }
 
console.log(eneSalary);
*/
  const result = {};

 for(const {employeeId, salary} of employeesDetails) {
   if(!result[salary]) result[salary] = [];
   result[salary].push(  employeeId );
 }
 console.log(result);

 for (let [key, value] of Object.entries(result)) {
  console.log(`{ salary:${key},employees:[ ${value} ] },`);
}