function lyrics(){
	for (i=99;i>=-1;i--){
		if (i>2){
			document.getElementById("output").innerHTML+=i+" bottles of beer on the wall, "+i+" bottles of beer! <br /> Take one down, pass it around, "+(i-1)+" bottles of beer on the wall!<br /> ----<br />";
		}
		else if (i==2){
			document.getElementById("output").innerHTML+=i+" bottles of beer on the wall, "+i+" bottles of beer! <br /> Take one down, pass it around, "+(i-1)+" bottle of beer on the wall!<br /> ----<br />";
		}
		else if (i==1){
			document.getElementById("output").innerHTML+=i+" bottle of beer on the wall, "+i+" bottle of beer! <br /> Take one down, pass it around, "+(i-1)+" bottles of beer on the wall!<br /> ----<br />";
		}
		else if (i==0){
			document.getElementById("output").innerHTML+="No more bottles of beer on the wall, no more bottles of beer.<br /> Go to the store and buy some more, 99 bottles of beer on the wall.";
		}
	}
}

