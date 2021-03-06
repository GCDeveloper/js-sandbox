console.log("start for 3 seconds...!", process.argv[2] ? process.argv[2] : "");

const wait = () => new Promise((resolve, reject) => {
  setTimeout(resolve, 1000);
});

wait()
.then(()=>{
  console.log("1 second has passed");
  return wait();
})
.then(()=>{
  console.log("2 seconds have passed");
  return wait();
})
.then(()=>{
  console.log("3 seconds have passed, that's all!");
});

async function wait2(){
  await wait();
  console.log("waited 1 second");
  await wait();
  console.log("waited another second");
  await wait();
  console.log("waited all 3 seconds!");
}
wait2();
