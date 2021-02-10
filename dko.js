


$(document).ready(function(){
    
    $(document).on('click','.dko-launcher', function(){

        let _action = $(this);
        let  _target = $(_action.data('dko'));
        _target.addClass('show');

        $('body').css({overflow: 'hidden'});

    });


    $(document).on('click', '.dko-close', function(){

        let _closer = $(this);
        _closer.parents('.dko-modal').first().removeClass('show');

    });

    $(document).on('click', '.dko-modal', function(e){

        let modal = $(this);

        if(e.target === this){
            modal.removeClass('show');
            $('body').css({overflow: 'auto'});
        }

    });

});