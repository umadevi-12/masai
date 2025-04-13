function isEligible(age,hasCriminalRecord){
    // write code here
  
   if(age>=18 && hasCriminalRecord === false){
      console.log("Eligible to Vote")
    }
    else{
      console.log("Not Eligible to Vote")
    }
    
}
//example
isEligible(22,false)