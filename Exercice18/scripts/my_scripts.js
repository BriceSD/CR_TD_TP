$(document).ready(function () {

    (function ($) {
        $.fn.colorer = function (options) {
            var opts = $.extend({}, $.fn.colorer.defaults, options);
            return this.css({color: opts.color, backgroundColor: opts.backgroundColor});
        };
        $.fn.colorer.defaults = {
            color: "#556B2F",
            backgroundColor: "white"
        }
    }(jQuery));

    $('#maDiv1').colorer();
    $.fn.colorer.defaults.color = 'black';
    $('#maDiv2').colorer();
    $('#maDiv3').colorer({color: "red"});
    $('#maDiv4').colorer({backgroundColor: "green"});
    $('#maDiv5').colorer({border: "1px dotted black"});



});
