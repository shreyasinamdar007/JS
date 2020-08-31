const now = new Date();
const timestamp = now.getTime();

const myDate = new Date(timestamp);
console.log(myDate.getFullYear());

// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Day: ${now.getDate()}`);
// console.log(`Hour: ${now.getHours()}`);
// console.log(`Minutes: ${now.getMinutes()}`);
// console.log(`Seconds: ${now.getSeconds()}`);

const date1 = new Date(`16 January 2016 12:00:00`);
const date2 = new Date(`10 July 2010 00:00:00`);

const mydate1 = date1.getTime();
const mydate2 = date2.getTime();

if (mydate1 < mydate2) {
  console.log(date1.toString());
} else {
  console.log(date2.toString());
}
