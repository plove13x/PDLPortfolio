'use strict';

var imageArray = new Array("images/headerImg13.jpg", "images/headerImg28.jpg", "images/headerImg4.jpg", "images/headerImg19.jpg");
var imageArray2 = new Array("images/headerImg25.jpg", "images/headerImg7.jpg", "images/headerImg14.jpg", "images/headerImg3.jpg");
    
$(window).load(function(){

    function Slider(array, location, interval, fade) {
        var imageCount = array.length,
        counter = 1;
        if (!$.isArray(array)){
            throw new Error ('Thats not an array');
        } else if (array.length <= 0) {
            throw new Error ('Array must have content');
        } else {
            $(location).attr('src', array[0]);
                setInterval(function() {
                    $(location).fadeOut(fade, function() {
                    $(this).attr('src', array[counter]).fadeIn(fade);
                    counter = counter == imageCount - 1 ? 0 : counter += 1;
                });
            }, interval);
        };
    };

    var newSlider = new Slider(imageArray, '.slider-images', 4000, 0);
    var newSlider2 = new Slider(imageArray2, '.slider-images2', 4000, 0);
});