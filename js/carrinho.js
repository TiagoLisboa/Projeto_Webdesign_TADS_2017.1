$(document).ready(function(c) {
    var tot = 3;
    $('.close1').on('click', function(c){
        $('.rem1').fadeOut('slow', function(c){
            $('.rem1').remove();
            tot = tot-1;
            if(tot <= 0){
                $('.remtot').remove();
            }
            });
        });	  
                                    
    $('.close2').on('click', function(c){
        $('.rem2').fadeOut('slow', function(c){
            $('.rem2').remove();
             tot =  tot-1 ;
            if(tot <= 0){
                $('.remtot').remove();
            }
            });
        });
    $('.close3').on('click', function(c){
		$('.rem3').fadeOut('slow', function(c){
			$('.rem3').remove();
             tot =  tot-1 ;
            if(tot <= 0){
                $('.remtot').empty();
            }
			});
        });
        $('.value-plus').on('click', function(){
			var divUpd = $(this).parent().find('.value'), newVal = parseInt(divUpd.text(), 10)+1;
			divUpd.text(newVal);
			});

		$('.value-minus').on('click', function(){
			var divUpd = $(this).parent().find('.value'), newVal = parseInt(divUpd.text(), 10)-1;
			if(newVal>=1) divUpd.text(newVal);
            });
});
                                