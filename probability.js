ban=5;
oran=1;
man=0.5;



for (let b = 1; b <=100; b++) {
  
  for (let o = 1; o <=100; o++) {
   
    for (let m = 1; m <=100; m++) {
      if(ban*b+oran*o+man*m==100 && b+o+m==100){
    console.log(`banana - ${b}, orange - ${o}, mango - ${m}`);
        
      }
  }
  }
}