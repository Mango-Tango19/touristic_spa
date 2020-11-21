
$(document).ready(function() {

    $('#user-phone').inputmask({"mask": "+7-(999)-999-99-99"});

    $('#user-phone').on('change', function() { 
        if ($(this)) {
        $(this).addClass('input-right-final');
    }
    });
   
    $('#user-name').on('input', function() {
        let re = /^[а-яА-Я ]+$/g;
        if (re.test($(this).val())) {
            $(this).addClass('input-right');
            $(this).removeClass('input-wrong');
            $(this).removeClass('input-wrong-final');

        } else {
            $(this).addClass('input-wrong');
            $(this).removeClass('input-right');
            $(this).removeClass('input-right-final');
        }
    });

    $('#user-name').on('change', function() {
        let re = /^[а-яА-Я ]+$/g;
        if (re.test($(this).val())) {
            $(this).addClass('input-right-final');
            $(this).removeClass('input-right');
        } else {
            $(this).addClass('input-wrong-final');
        }
    })

    $('#date-to-go').inputmask({"mask": "99/99/9999"});
    $('#date-to-go').on('change', function() {
        if ($(this)) {
        $(this).addClass('input-right-final');
    }
    })

    let countries;
    $.ajax({ 
        url: "http://localhost:3000/countries", 
        method: 'get',
        dataType: 'json',
        async: false,
        success: function(data){
            countries = data[0];
    }});

    let countriesArr = countries.split(',');


    $( function() {
        $( "#country-to-go" ).autocomplete({
            source: countriesArr
        });
    });





    // while ($(window).scrollTop() < $(document).height()) {
    //     $('.check').each(function() {
    //         let pos = $(this).offset(),
    //         wY = $(window).scrollTop();
    //         //wH = $(window).height(),
    //         //oH = $(this).outerHeight();
    //     if (pos.top >= wY) {
    //         $(this).fadeIn(5000);
    //     }
    //     });
    // }
    // })

    // $(window).scrollTop() - сколько прокрутил от верха
    //window.screen.availHeight - высота окна 
});




