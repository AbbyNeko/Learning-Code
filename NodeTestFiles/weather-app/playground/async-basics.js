console.log('Starting app');

setTimeout(() => {
  console.log('Triggered');
}, 2000);
//1 sec = 1000 millsec

setTimeout(() => {
  console.log('Triggered #0');
}, 0);
//This part triggered after Finishing up even with 0 millsec

console.log('Finishing up');
//Finishing up will appear before the log for the setTimeout
