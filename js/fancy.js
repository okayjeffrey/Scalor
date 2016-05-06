(function ($) {
$(document).ready(function() {
    var colorChip = $('.chip');
    var color = '';

    $.each(colorChip, function() {
        // var color = $(this).css('background-color')
        var hexcolor = $(this).css('backgroundColor');
        hexc(hexcolor);
        console.log(color);

        $(this).text(color);
        // console.log(color);
    });

    function hexc(colorval) {
        var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        delete(parts[0]);
        for (var i = 1; i <= 3; ++i) {
            parts[i] = parseInt(parts[i]).toString(16);
            if (parts[i].length == 1) parts[i] = '0' + parts[i];
        }
        color = '#' + parts.join('');

        return color;
    }
}); // -----------------  Document Ready End
})(this.jQuery);
