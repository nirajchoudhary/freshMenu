var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    screenWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    // var screenHeight = w.innerHeight|| e.clientHeight|| g.clientHeight;
var blackBorderDiv = document.getElementById("blackBorderDiv");
// redBorderDivWidth = screenWidth - 10% of screenWidth;
// blackBorderDivWidth = redBorderDivWidth - 60% 0f redBorderDivWidth - 90px - border width
blackBorderDiv.style.width = (36 * screenWidth / 100) - 100 + "px"; 

if(screenWidth < 720)
{
	blackBorderDiv.style.width = (36 * screenWidth / 100) - 35 + "px";
}

function reDefineWidth() {
	screenWidth = w.innerWidth || e.clientWidth || g.clientWidth;
	if(screenWidth < 720)
	{
		blackBorderDiv.style.width = (36 * screenWidth / 100) - 35 + "px";
		return;
	}
	blackBorderDiv.style.width = (36 * screenWidth / 100) - 100 + "px";
}

blackBorderDiv.style.top = "80px";

window.onscroll = function(){
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
	if(scrollTop > 30)
	{
		blackBorderDiv.style.top = "50px";
	}
	else
	{
		blackBorderDiv.style.top = (80 - scrollTop) + "px";
	}
};