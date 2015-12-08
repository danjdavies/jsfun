var DD = {}

DD.BackgroundColorSwitch = function()
{

	function randomColor() {
		return '#' + Math.random().toString(16).slice(2, 8);
	};

	var trouserContainer	  		= $('.trousers-container'),
		gusset						= $('.gusset'),
		leftLeg						= $('.left-leg'),
		rightLeg					= $('.right-leg'),
		dermotsFace					= $('.dermot'),
		bubble						= $('.bubble');

	dermotsFace.click(function(){
		gusset.css({
	        backgroundColor: randomColor
	    });
	    leftLeg.css({
	        backgroundColor: randomColor
	    });
	    rightLeg.css({
	        backgroundColor: randomColor
	    });
	    bubble.show();

	    console.log(randomColor);
	})
		
}

DD.BackgroundColorSwitch();









