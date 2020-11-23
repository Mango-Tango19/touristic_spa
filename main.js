
$(document).ready(function() {
    //phone number check

    $('#user-phone').inputmask({"mask": "+7-(999)-999-99-99"});

    $('#user-phone').on('change', function() { 
        if ($(this)) {
        $(this).addClass('input-right-final');
    }
    });

   //user name check

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

    //date check

    //$('#date-to-go').inputmask({"mask": "99/99/9999"});
    
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: 'Предыдущий',
        nextText: 'Следующий',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        weekHeader: 'Не',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);

    $(function(){
        $('#date-to-go').datepicker();
    });


    // choosing country

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
        $( '#country-to-go' ).autocomplete({
            source: countriesArr
        });
    });

    //input validation

    $(function () { 
        if ( $('#user-name').val())
        { if($('#user-phone').val()) {
            if ($('#country-to-go').val()) {
                $('.send').attr('disabled') = false;
            }
        } // перемотать на телефон ('#user-phone').;
        } // перемотать на имя
        }
     )
});




