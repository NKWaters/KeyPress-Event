var canvas = new fabric.Canvas('myCanvas')
ctx = canvas.getContext("2d");

img_width = 700;
img_height = 3000;
keyPressed = "";

var img_image;

img_x = 100;
img_y = 100;

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        keyimages = Img;
        keyimages.scaleToHeight(img_height);
        keyimages.scaleToWidth(img_width);
        keyimages.set({
            top: img_y,
            left: img_x
        });
        canvas.add(keyimages);
    });
}


window.addEventListener("keydown", my_keydown) 
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	    
		if((keyPressed >='97' && keyPressed<='122')|| (keyPressed >='65' && keyPressed<='90')) {
		    document.getElementById("d1").innerHTML="You pressed Alphabet Key";
			console.log("Alphabet Key");
			new_image('Alpkey.png');
		} else {
			document.getElementById("d1").innerHTML="You pressed symbol or other key";
		    console.log("OtherKey");
			new_image('otherkey.png');
		}
	}
	window.addEventListener("keydown2", my_keydown2) 
       function my_keydown2(e2) {
		keyPressed = e2.keyCode;
		console.log(keyPressed);

		if (keyPressed >=48 && keyPressed<=57) {
			document.getElementById("d1").innerHTML="You pressed Number Key";
			console.log("Number Key");
            new_image('numkey.png');
		} else {
			document.getElementById("d1").innerHTML="You pressed symbol or other key";
		    console.log("OtherKey");
			new_image('otherkey.png');
		}
	   }
		
	   window.addEventListener("keydown3", my_keydown3) 
	   function my_keydown3(e) {
		keyPressed = e.keyCode;
		console.log(keyPressed);

        if (keyPressed >=37 && keyPressed<=40) {
			document.getElementById("d1").innerHTML="You pressed Arrow Key";
			console.log("Arrow Key");
			new_image('Arrkey.png');
		} else {
			document.getElementById("d1").innerHTML="You pressed symbol or other key";
		    console.log("OtherKey");
			new_image('otherkey.png');
		}
	   }

	   window.addEventListener("keydown4", my_keydown4) 
	  function my_keydown4(e) {
		keyPressed = e.keyCode;
		console.log(keyPressed);

		if (keyPressed == '17') {
			document.getElementById("d1").innerHTML="You pressed a Special Key";
			console.log("Special Key");
			new_image('spkey.png');
		} else {
			document.getElementById("d1").innerHTML="You pressed symbol or other key";
		    console.log("OtherKey");
			new_image('otherkey.png');
		}
	   }

	   window.addEventListener("keydown5", my_keydown5) 
	   function my_keydown5(e) {
		keyPressed = e.keyCode;
		console.log(keyPressed);
		if (keyPressed == '18') {
			document.getElementById("d1").innerHTML="You pressed a Special Key";
			console.log("Special Key");
			new_image('spkey.png');
		} else {
			document.getElementById("d1").innerHTML="You pressed symbol or other key";
		    console.log("OtherKey");
			new_image('otherkey.png');
		}
	}

	function my_keydown5(e) {
		keyPressed = e.keyCode;
		console.log(keyPressed);

		if (keyPressed == '27') {
			document.getElementById("d1").innerHTML="You pressed a Special Key";
			console.log("Special Key");
			new_image('spkey.png');
		} else {
			document.getElementById("d1").innerHTML="You pressed symbol or other key";
		    console.log("OtherKey");
			new_image('otherkey.png');
		}
	}