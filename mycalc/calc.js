
function sum() 
{
	var a = parseFloat(document.getElementById('t1').value);
	var b = parseFloat(document.getElementById('t2').value);
	c=a+b;
	document.getElementById('sum').value=c;
}

function dif()
{
	var a = parseFloat(document.getElementById('t1').value);
	var b = parseFloat(document.getElementById('t2').value);
	c=a-b;
	document.getElementById('sum').value=c;
}

function multi()
{
	var a = parseFloat(document.getElementById('t1').value);
	var b = parseFloat(document.getElementById('t2').value);
	c=a*b;
	document.getElementById('sum').value=c;
}

function amulti()
{
	var a = parseFloat(document.getElementById('t1').value);
	var b = parseFloat(document.getElementById('t2').value);
	c=a/b;
	document.getElementById('sum').value=c;
}

function sinn()
{
	var a = parseFloat(document.getElementById('t1').value);
	var b = parseFloat(document.getElementById('t2').value);
	c = Math.sin(a);
	document.getElementById('sum').value=c;

}
function cosn()
{
	var a = parseFloat(document.getElementById('t1').value);
	var b = parseFloat(document.getElementById('t2').value);
	c = Math.cos(a);
	document.getElementById('sum').value=c;

}
function tgn()
{
	var a = parseFloat(document.getElementById('t1').value);
	var b = parseFloat(document.getElementById('t2').value);
	c = Math.tan(a);
	document.getElementById('sum').value=c;

}
function ctgn()
{
	var a = parseFloat(document.getElementById('t1').value);
	c = 1/Math.tan(a);
	document.getElementById('sum').value=c;

}
function pin()
{
	c = Math.PI;
	document.getElementById('sum').value=c;

}
function en()
{

	c = Math.E;
	document.getElementById('sum').value=c;

}
function radn()
{
	var a = parseFloat(document.getElementById('t1').value);

	c = a*(Math.PI / 180)
	document.getElementById('sum').value=c;

}
function degn()
{
	var a = parseFloat(document.getElementById('t1').value);
	c = a/(Math.PI / 180)
	document.getElementById('sum').value=c;

}
function lnn()
{	var a = parseFloat(document.getElementById('t1').value);
	c = Math.log(a);
	document.getElementById('sum').value=c;

}
function sqrtn()
{
	var a = parseFloat(document.getElementById('t1').value);
	document.getElementById('sum').value=Math.sqrt(a);

}
