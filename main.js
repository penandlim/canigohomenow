window.onload = function () {
    var periods = [$('#p1'),$('#p2'),$('#p3'),$('#p4'),$('#p5'),$('#p6'),$('#p7'),$('#p8'),$('#p9')];
    window.setInterval(function(){
    var current_time = new Date();
    var current_time_modified = current_time.getHours() * 60 + current_time.getMinutes() + current_time.getSeconds() / 60.0 + current_time.getMilliseconds() / 1000.0 / 60.0 - 460;
    var percent_time = current_time_modified / 419 * 100;
    if (percent_time < 100) {        
        // 419minutes is length of school minutes
        $('#test1').html(current_time_modified.toFixed(3) + " minutes have passed since start of school");
        $('#test2').html(percent_time.toFixed(5) + " % of school day has gone by");
        if (percent_time > 50) {
            $('#test3').html('Maybe...');
        }
        else{
            $('#test3').html('No :(');
        }
        $('#test4').html();
        for (var i = 0; i < 9; i++) {
            if (current_time_modified > 47 * i) {
                var p1 = (current_time_modified - 47 * i) / 43 * 100;
                if (p1 < 100) {
                    periods[i].attr('class', 'orange-text text-darken-2');
                    periods[i].html(p1.toFixed(3) + '%');
                }
                else {
                    periods[i].html('100.000%');
                    periods[i].attr('class', 'green-text text-darken-2');
                }
            }
            else {
                periods[i].attr('class', 'red-text text-darken-2');
            }
        }
    }
    else {
        $('#test1').html('');
        $('#test2').html('');
        $('#test3').html('');
        $('#test4').html('YES!');
        $("#test4").css({'transition': 'all 1s ease-in-out', 'transform': 'scale(5)'});
        for (var i = 0; i < 9; i++) {
            periods[i].html('100.000%');
            periods[i].attr('class', 'green-text text-darken-2');
        }
    }
}, 10);
}

