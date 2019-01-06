  function onOrientationChange(e) {
   
   document.getElementById('alpha').innerHTML = 'α = ' + Math.round(e.alpha);
   document.getElementById('beta').innerHTML = 'β = '+Math.round(e.beta);
   document.getElementById('gamma').innerHTML = 'γ = '+Math.round(e.gamma);
	  var node = document.getElementById("text");
	  if(e.alpha > e.beta && e.alpha > e.gamma){ node.innerHTML = '<span>Горизонтально перед собой</span>';}
      if(e.beta > e.alpha && e.beta > e.gamma){ node.innerHTML = '<span>Вертикально перед собой</span>';}
      if(e.gamma > e.alpha && e.gamma > e.beta){ node.innerHTML = '<span>На столе</span>';}
		  }

  window.addEventListener('deviceorientation', onOrientationChange);