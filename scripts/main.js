"use strict";function drawRegionsMap(){function e(){var e=new google.visualization.GeoChart(document.getElementById("regions_div"));e.draw(a,o)}var a=google.visualization.arrayToDataTable([["Country","Weeks Logged","Last Visited"],["Aruba",2,2014],["Bahamas",1,2e3],["Belgium",1,2006],["Belize",1,2012],["Brazil",10,2014],["Cambodia",1,2009],["Canada",2,2017],["Cayman Islands",1,2e3],["China",104,2013],["Czech Republic",1,2006],["Colombia",2,2014],["Costa Rica",2,2016],["Cuba",2,2012],["Denmark",1,2006],["Ecuador",2,2014],["Finland",1,2006],["France",3,2006],["Germany",3,2006],["Gibraltar",1,2006],["United Kingdom",3,1997],["Guatemala",4,2012],["Honduras",2,2012],["Indonesia",2,2018],["Japan",1,2009],["Luxembourg",1,2006],["Malaysia",4,2018],["Mexico",7,2012],["Morocco",3,2006],["Netherlands",2,2006],["Norway",1,2006],["Panama",2,2016],["Peru",13,2014],["Philippines",4,2018],["Portugal",1,2006],["Russia",2,2006],["Spain",2,2006],["Sweden",1,2006],["Thailand",71,2018],["Venezuela",3,2014]]),o={colorAxis:{colors:["green","yellow","red"]},backgroundColor:"#240078",datalessRegionColor:"#8B8A8F"};window.onload=e(),window.onresize=e}$(".sliderMenu").hide();var imageArray=new Array("images/headerImg19.jpg","images/headerImg28.jpg","images/headerImg4.jpg","images/headerImg13.jpg","images/headerImg5.jpg","images/headerImg18.jpg","images/headerImg33.jpg","images/headerImg35.jpg","images/headerImg31.jpg","images/headerImg38.jpg","images/headerImg21.jpg","images/headerImg24.jpg","images/headerImg27.jpg","images/headerImg30.jpg","images/headerImg20.jpg","images/headerImg11.jpg","images/gavin.jpg"),imageArray2=new Array("images/headerImg3.jpg","images/headerImg25.jpg","images/headerImg14.jpg","images/headerImg7.jpg","images/headerImg10.jpg","images/headerImg15.jpg","images/headerImg36.jpg","images/headerImg34.jpg","images/headerImg32.jpg","images/headerImg39.jpg","images/headerImg22.jpg","images/headerImg2.jpg","images/headerImg26.jpg","images/headerImg29.png","images/headerImg12.jpg","images/headerImg8.jpg","images/headerImg9.jpg");$(window).load(function(){function e(e,a,o,t){var n=e.length,i=1;if(!$.isArray(e))throw new Error("Thats not an array");if(e.length<=0)throw new Error("Array must have content");$(a).attr("src",e[0]),setInterval(function(){$(a).fadeOut(t,function(){$(this).attr("src",e[i]).fadeIn(t),i=i==n-1?0:i+=1})},o)}var a=(new e(imageArray,".slider-images",5600,0),new e(imageArray2,".slider-images2",5600,0),['<p>Some might say in my younger years I could be a bit of a problem child, but I wasn\'t <span class="underline">the</span> <em>Problem Child</em>. However, since some of the movie\'s birthday party scene was filmed at our house, a keen eye will notice young me in a lion costume. Any Oscar noms went to my Mom though for her role as "woman gets pinned on the ass". Check it out on YouTube: <a target="_blank" href="https://www.youtube.com/watch?v=KhAg5po8InY"><em>Problem Child</em> party scene clip</a></p>',"<p>My junior high (5th-8th grade) holds an annual schoolwide spelling bee, and somehow I won the whole thing twice (6th and 8th grade).</p>",'<p class="smallerFont">Have you ever gotten bored with plain old Lemon-Lime or Fruit Punch and opted for a Gatorade X-Factor instead? You can thank NHRT (the National Hybrid Research Team) for that.</p><p class="smallerFont">I made my first website back in high school when I established the online presence for our admittedly juvenile social club dedicated to - you guessed it - mixing flavors of Gatorade to create new, better flavors. What I didn\'t guess at the time, however, was that the student body would start visiting the site en masse to read its humorous content. I\'ve been hooked by the power of the web ever since.</p><p class="smallerFont">No, NHRT didn\'t reap the financial rewards of such a stroke of mixology brilliance - the idealists we were in high school couldn\'t have been less concerned with intellectual property rights and patents - but we got some serious traffic for a while (a lacrosse coach in Vancouver even implored us to personally satisfy his team\'s hydration needs) and then all of a sudden Gatorade started producing their own "hybrids". Unfortunately, the site (www.areyoumixing.com) is no longer accessible due to an overhaul of the Tripod free hosting program, but long live the memories and keep on mixing!</p>',"<p>Speaking of high school, I (thanks to some timely self-deprecating humor) was elected as both junior and senior class president of my high school class and gave our graduation speech. I also served as Managing Editor of our high school newspaper that won 1st place at the <em>Dallas Morning News’</em> Journalism Day competition. Dork!</p>",'<p>I love basketball and after college I once tried out for an American Basketball Association team. Ultimately I wasn\'t offered a contract, but on the plus side, I was invited back for another tryout. On the not-so-plus side, one large man who was already under contract chose to refer to me exclusively as "Little Man". This was the first and only time in my life this has happened.</p>']),o=0,t=$("#moments");$(".sliderFFContainer button").on("click",function(){$(this).hasClass("forward")?o+=1:o-=1;var e=$(".fFact");e.fadeOut(600,function(){o>=5&&(o=0),0>o&&(o=4),e.html(a[o]),e.fadeIn(3e3)}),$("html,body").animate({scrollTop:t.offset().top},1e3)}),$(".blackRollUp").hide(),$(".SSContainer").on("mouseover",function(){$(this).find(".blackRollUp").fadeIn(1e3).stop()}),$(".SSContainer").on("mouseout",function(){$(this).find(".blackRollUp").fadeOut(2e3)}),$(".shrunkPic").on("mouseover",function(){$(this).find(".blackRollUp").fadeIn(1e3).stop()}),$(".shrunkPic").on("mouseout",function(){$(this).find(".blackRollUp").fadeOut(2e3)}),$(".projectRC").on({touchstart:function(){$(this).find(".blackRollUp").show()}}),$(".projectRC").on({touchmove:function(){$(this).find(".blackRollUp").show()}}),$(" .leftM, .rightM, .leftMRG").on({touchmove:function(){$(this).next(".blackRollUp").show()}}),$(".projectRC").on({touchend:function(){$(this).find(".blackRollUp").fadeOut(2500)}}),$(".topMenuBar button").on("click",function(){$(".sliderMenu").toggle()}),$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top},{duration:1500,easing:"swing"}),!1}})})}),google.load("visualization","1",{packages:["geochart"]}),google.setOnLoadCallback(drawRegionsMap);