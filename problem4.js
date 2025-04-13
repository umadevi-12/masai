function runProgram(input) {
    // Write code here
    let array = input.trim().split("\n")
    let  N = Number(array[0]);
    let arr = array[1].trim().split(" ").map(Number);
    
    let sum = 0;
    for(let i=0;i<N;i++){
      sum = sum +  arr[i]
    }
    let average = sum/N;
    console.log(Math.ceil(average));
  }
  
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
