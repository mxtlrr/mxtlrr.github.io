window.onload = () => {
  let bluh =  `${Math.floor(Math.abs((new Date("09/14/2007") - new Date()) / (1000 * 60 * 60 * 24 * 365)))}`;
  document.getElementById("bluh").innerHTML = bluh;
}