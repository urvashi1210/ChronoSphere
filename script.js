const secondHand=document.querySelector('.second-hand');
const minuteHand=document.querySelector('.min-hand');
const hourHand=document.querySelector('.hour-hand');
function setDate(){
const now=new Date();
// console.log(now);//day month date year hours mins seconds time zone
const seconds=now.getSeconds();
const secondsDegrees=((seconds/60)*360)+90;
secondHand.style.transform= `rotate(${secondsDegrees}deg)`;
console.log(seconds);
const minutes=now.getMinutes();
const minutesDegrees=((minutes/60)*360)+90;
minuteHand.style.transform= `rotate(${minutesDegrees}deg)`;
console.log(minutes);
const hours=now.getHours();
const hoursDegrees=((hours/60)*360)+90;
hourHand.style.transform= `rotate(${hoursDegrees}deg)`;
console.log(hours);

}

setInterval(setDate,1000);//will execute every 1000 miliseconds i.e. every second
