  function onOrientationChange(e) {
   
   document.getElementById('alpha').innerHTML = 'α = ' + Math.round(e.alpha);
   document.getElementById('beta').innerHTML = 'β = '+Math.round(e.beta);
   document.getElementById('gamma').innerHTML = 'γ = '+Math.round(e.gamma);
	  var node = document.getElementById("text");
      if(((e.beta>-5 && e.beta<5)||(e.beta>170&& e.beta<190)||(e.beta<-170&& e.beta>-190))&&(e.gamma>-5 && e.gamma<5))
	  {node.innerHTML = '<span>На столе</span>';}
	  else {node.innerHTML = '<span>Не на столе</span>';}
		  }

  window.addEventListener('deviceorientation', onOrientationChange);

function openCalc(){
	window.open("mycalc/calc.html");
}