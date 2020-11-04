const fun1 = () => {
  return "I am function 1";
};

// const fun2 =  () => {
//   setTimeout(() => {
//     return "I am function 2";
//   }, 3000);
// };

const fun2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Your promise is rejected");
    }, 3000);
  });
};

const fun3 = () => {
  return "I am function 3";
};

const main = async () => {
  const val__1 = fun1();
  console.log(val__1);
  const val__2 = await fun2();
  console.log(val__2);
  const val__3 = fun3();
  console.log(val__3);
};

main();
