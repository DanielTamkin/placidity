/*centerThis.js - by Danieltamkin*/
/*center an element to its parent.*/
(function( $ ) {
	$.fn.centerThis = function(data) {
		if(data == undefined){
			$data = "nothing";
		}
		else{
			$data = data;
		}
		$this = $(this);
		function calculateTop(){
			if($data.toLowerCase() == "browser"){
				var browserHeight = $(window).height(),
						elementHeight	= $this.height(),
						elementTop	 	= (browserHeight/2) - (elementHeight/2);
			}
			else{
				var browserHeight = $this.parent().height(),
						elementHeight	= $this.height(),
						elementTop	 	= (browserHeight/2) - (elementHeight/2);
			}
			console.log("calculateTop: "+elementTop);
			return elementTop;
		}
		function calculateLeft(){
			if($data.toLowerCase() == "browser"){
				var browserWidth 	= $(window).width(),
						elementWidth 	= $this.width(),
						elementLeft	 	= (browserWidth/2) - (elementWidth/2);
						console.log("calculateLeft: "+elementLeft);
			}
			else{
				var browserWidth 	= $this.parent().width(),
						elementWidth 	= $this.width(),
						elementLeft	 	= (browserWidth/2) - (elementWidth/2);
			}

			return elementLeft;
		}
		function calculate(){
			var elementTop 	= calculateTop(),
					elementLeft = calculateLeft();
			$this.css("position","absolute");
			$this.css("top",elementTop+"px");
			$this.css("left",elementLeft+"px");
		}
		return this.each(function() {
			calculate();
			$(window).resize(function() {
				calculate();
			});
		});
	 };
}( jQuery ));
