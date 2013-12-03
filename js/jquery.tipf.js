(function($) {
    
    $.fn.tipf = function() {
        this.mouseover(function (){
            $(this).find('.tipf-open').remove();
            if ($(this).find('.link').length > 0) { var elm = $(this).find('.link')}
            	else
            {var elm = $(this)}
        	var text = elm.html();
        	var inner = $('<div>carregando...</div>');
            if(elm.find('img').length <= 0){
                elm.html('<div class="tipf-open"><span class="row"></span></div>');
            } else {
                elm.append('<div class="tipf-open"><span class="row"></span></div>');
            }
        	if ($(this).attr('execjs') != undefined) {
        		elm.find('span').after(inner);
        		elm.find('.tipf-open').addClass('bottom');
        		elm.find('.row').addClass('bottom');
        	} else {
        		elm.find('span').after($(this).attr('title'));
        		elm.find('.tipf-open').addClass('top');
        		elm.find('.row').addClass('top');
        	}
            if(elm.find('img').length <= 0){
                elm.append(text);
            }
            eval($(this).attr('execjs'));
        });
        this.mouseout(function (){
            $(this).find('.tipf-open').remove();
        });
	};
    
})(jQuery);
