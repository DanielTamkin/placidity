/*AmchorThis.js - by Danieltamkin*/
/*Provide a nice sliding animation when clicking on #Anchors.*/
(function( $ ) {
	$.fn.AnchorSlide = function(data) {
		$this = $(this);
		data(data);
		function data(data){
			if(data == undefined){
				$data = dataTemplate();
			}
			else{
				if(data.speed == undefined && data.target == undefined){
					$data = dataTemplate();
				}
				else{
					$data = data;
				}
			}
		}
		function dataTemplate(){
			$data = {
				speed: '750',
				target: 'a'
			}
			return $data;
		}
		function animation(){
			$($this.selector+" "+$data.target).click(function(e){
			  console.log("clicked!");
			  $href 			= $(this).attr('href');
			  $('html, body').animate({scrollTop: $( $(this).attr('href') ).offset().top + 0}, $data.speed,function() {
			    if ($href== "something"){
			      //dostuff
			    }
			  });
			  e.preventDefault();
			});
		}
		return this.each(function() {
			console.log($(this));
			animation();
		});
	};
})(jQuery);
