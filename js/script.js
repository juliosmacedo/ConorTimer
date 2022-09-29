const countDays = () => {
  
  const today = new Date();
  const event = new Date('Sat Jan 18 2020 22:40:00 GMT-0300 (Brasilia Standard Time)');
  console.log(today)
  const date = event - today;
  let a=Math.round((date)/(1000*60*60*24))*-1
  
  return `${a} days`

}

document.getElementById('info').innerHTML = `<h3><strong>It's been ${countDays()}.</strong></h3>`

