

$(document).ready(function(){

    let els = $('.dko-modal');
    els.remove();

    $('body').append(els);
    
    $(document).on('click','.dko-launcher', function(){

        let _action = $(this);
        let  _target = $(_action.data('dko'));
        $('body').css({overflow: 'hidden'});
        _target.addClass('show');
        setTimeout(function (){
            _target.find('.dko-content').addClass('shown');
        }, 1);
    });


    $(document).on('click', '.dko-close', function(){

        let _closer = $(this);
        closeModal(_closer.parents('.dko-modal').first());

    });

    $(document).on('click', '.dko-modal', function(e){

        let modal = $(this);

        if(e.target === this){
            closeModal(modal);
        }

    });

    function closeModal(modal){
        modal.find('.dko-content').removeClass('shown');
        setTimeout(function (){
            modal.removeClass('show');
            $('body').css({overflow: 'auto'});
        }, 200);

    }

});