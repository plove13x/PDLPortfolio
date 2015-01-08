'use strict';

$('.sliderMenu').hide();
var imageArray = new Array("images/headerImg19.jpg", "images/headerImg28.jpg", "images/headerImg4.jpg", "images/headerImg13.jpg", "images/headerImg5.jpg", "images/headerImg18.jpg", "images/headerImg33.jpg", "images/headerImg35.jpg", "images/headerImg31.jpg", "images/headerImg38.jpg", "images/headerImg21.jpg", "images/headerImg24.jpg", "images/headerImg27.jpg", "images/headerImg30.jpg", "images/headerImg20.jpg", "images/headerImg11.jpg", "images/gavin.jpg");
var imageArray2 = new Array("images/headerImg3.jpg", "images/headerImg25.jpg", "images/headerImg14.jpg", "images/headerImg7.jpg", "images/headerImg10.jpg", "images/headerImg15.jpg", "images/headerImg36.jpg", "images/headerImg34.jpg", "images/headerImg32.jpg", "images/headerImg39.jpg", "images/headerImg22.jpg", "images/headerImg2.jpg", "images/headerImg26.jpg", "images/headerImg29.png", "images/headerImg12.jpg", "images/headerImg8.jpg", "images/headerImg9.jpg");
    
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

    var newSlider = new Slider(imageArray, '.slider-images', 5600, 0);
    var newSlider2 = new Slider(imageArray2, '.slider-images2', 5600, 0);



/* document.ready? here or before window.load code? */

    var funFacts = [
    '<p class="smallerFont">Have you ever gotten bored with plain old Lemon-Lime or Fruit Punch and opted for a Gatorade X-Factor instead? You can thank NHRT (the National Hybrid Research Team) for that.</p><p class="smallerFont">I made my first website back in high school when I established the online presence for our admittedly juvenile social club dedicated to - you guessed it - mixing flavors of Gatorade to create new, better flavors. What I didn\'t guess at the time, however, was that the student body would start visiting the site en masse to read its humorous content. I\'ve been hooked by the power of the web ever since.</p><p class="smallerFont">No, NHRT didn\'t reap the financial rewards of such a stroke of mixology brilliance - the idealists we were in high school couldn\'t have been less concerned with intellectual property rights and patents - but we got some serious traffic for a while (a lacrosse coach in Vancouver even implored us to personally satisfy his team\'s hydration needs) and then all of a sudden Gatorade started producing their own "hybrids". Unfortunately, the site (www.areyoumixing.com) is no longer accessible due to an overhaul of the Tripod free hosting program, but long live the memories and keep on mixing!</p>',
    '<p>Speaking of high school, I (thanks to some timely self-deprecating humor) was elected as both junior and senior class president of my high school class and gave our graduation speech. I also served as Managing Editor of our high school newspaper that won 1st place at the <em>Dallas Morning News\’</em> Journalism Day competition. Dork!</p>',
    '<p>I love basketball and after college I once tried out for an American Basketball Association team. Ultimately I wasn\'t offered a contract, but on the plus side, I was invited back for another tryout. On the not-so-plus side, one large man who was already under contract chose to refer to me exclusively as "Little Man". This was the first and only time in my life this has happened.</p>',
    '<p>Some might say in my younger years I could be a bit of a problem child, but I wasn\'t <span class="underline">the</span> <em>Problem Child</em>. However, since some of the movie\'s birthday party scene was filmed at our house, a keen eye will notice young me in a lion costume. Any Oscar noms went to my Mom though for her role as "woman gets pinned on the ass". Check it out on YouTube: <a target="_blank" href="https://www.youtube.com/watch?v=KhAg5po8InY"><em>Problem Child</em> party scene clip</a></p>',
    '<p>My junior high (5th-8th grade) holds an annual schoolwide spelling bee, and somehow I won the whole thing twice (6th and 8th grade).</p>'
    ];

    var counterFF = 0;

    $('.sliderFFContainer button').on('click', function(){
        if ($(this).hasClass('forward')) {
            counterFF = (counterFF + 1);
        } else {
            counterFF = (counterFF - 1);
        }

        var fFP = $('.fFact');
        fFP.fadeOut(600, function() {
            if (counterFF >= 5) { counterFF = 0 }
            if (counterFF < 0) { counterFF = 4 }
            fFP.html(funFacts[counterFF]);
            fFP.fadeIn(3000);
        });

    });



    $('.blackRollUp').hide();

    $('.SSContainer').on('mouseover', function() {
        $(this).find('.blackRollUp').fadeIn(1000).stop();
    });

    $('.SSContainer').on('mouseout', function() {
        $(this).find('.blackRollUp').fadeOut(2000);
    });


    $('.shrunkPic').on('mouseover', function() {
        $(this).find('.blackRollUp').fadeIn(1000).stop();
    });

    $('.shrunkPic').on('mouseout', function() {
        $(this).find('.blackRollUp').fadeOut(2000);
    });


//     $('.projectRC').bind('touchstart touchend', function() {
//         // var hoverP = $(this).find('.blackRollUp');
//         // // hoverP.toggleClass('hover_effect');
//         // hoverP.fadeIn(1000).stop();
//         $(this).find('.blackRollUp').fadeIn(1000).stop();
//     });

    $('.projectRC').on({ 'touchstart' : function(){ 
        $(this).find('.blackRollUp').show();
        // fadeIn(1500).stop();
        } 
    });

    $('.projectRC').on({ 'touchmove' : function(){ 
        $(this).find('.blackRollUp').show();
        // fadeIn(1500).stop();
        } 
    });

    $(' .leftM, .rightM, .leftMRG').on({ 'touchmove' : function(){ 
        $(this).next('.blackRollUp').show();
        // fadeIn(1500).stop();
        } 
    });



    $('.projectRC').on({ 'touchend' : function(){ 
        $(this).find('.blackRollUp').fadeOut(2500);
        } 
    });






    $('.topMenuBar button').on('click', function() {
        // $('.imgSlider:first').toggle();
        $('.sliderMenu').toggle();
        // $('.sliderMenu').addClass('iB');
    });




    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });



});