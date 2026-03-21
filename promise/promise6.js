const paynow = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ message: "payment done..", amount: 1000 });
      //reject({message:"insufficient fund..",amount:10000})
    }, 4000);
  });
};
console.log("moving to payment gateway.");
var x = paynow();
console.log(x);
x.then((data) => {
  console.log(data);
});
x.catch((err)=>{
    console.log("message",err.message)
    console.log("amount..",err.amount)
})