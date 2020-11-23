
$(document).ready(function() {

    //checking phone
    $('#user-phone').inputmask("+7-(999)-999-99-99", {
        oncomplete: function () {
            $(this).addClass('input-right-final');
            localStorage.setItem('phone', $(this).val());
        }
    });


    //checking name
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
        localStorage.setItem('name', $(this).val());
    } else {
        $(this).addClass('input-wrong-final');
    }
    })
    
    //choosing date from calendar

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

    //get country list from server
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

    //picking country

    $( function() {
        $( '#country-to-go' ).autocomplete({
            source: countriesArr
        });
    });

    $( '#country-to-go' ).on('change', function() {
        localStorage.setItem ('country', $('#country-to-go').val()); 
    })

    //collecting data
    
    //checking loaclStorage
    if (localStorage.getItem('name')) {
        $('#user-name').val() = localStorage.getItem('name');
    }

    if (localStorage.getItem('country')) {
        $( '#country-to-go' ).val() = localStorage.getItem('country');
    }

    if (localStorage.getItem('phone')) {
        $('#user-phone').val = localStorage.getItem('phone');
    }

    //input validation
    // debugger
    // let phone = document.getElementById('user-phone');
    // phone.scrollIntoView({
    //     behavior: "smooth", 
    //     block: "start"});
    $('#required-agreement').on('click', function() {
        if ($(this).prop('checked') ) {
            $('.send').removeAttr('disabled');
    }}
    )
    
    $('.send').on('submit', function () { 
        data = [];
        debugger
        if (!name || !country || !phone) {
            name =  $('#user-name').val();
            data.push({'name': name});
            localStorage.setItem('name', name)
        }

        if (!country) {
            country =  $('#country-to-go').val();
            data.push({'country': country})
            localStorage.setItem('country', country);
        }

        //phone =  $('#user-phone').val();
    })

 
      
    

    
    // $(function () { 
    //     if ( $('#user-name').val())
    //     { if($('#user-phone').val()) {
    //         if ($('#country-to-go').val()) {
    //             $('.send').attr('disabled') = false;
    //         }
    //     } ('#user-phone').scrollIntoView({
    //         behavior: "smooth", 
    //         block: "start"});
    //     } // перемотать на имя
    // })
    

});




