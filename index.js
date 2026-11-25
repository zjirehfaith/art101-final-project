let collegeScores= [0,1,2,3,4,5,6,7,8,9];

// trm[late]

// #second-stage { display: none; }


$("#start").click( function(){

$("#question01-options").show();
$("#start-menu").hide();
$("#title").hide();
$("#question1").text('How Do you Spend The Weekend?');

});



$("#party, #chill, #movies, #doomscroll").click( function(e){
    const college=$(this).attr("college");
   collegeScores[college]=collegeScores[college]+1;
   console.log(college);
$("#question02-options").show();
$("#question01-options").hide();
$("#question1").hide();
$("#question2").text('Whats Your Favorite Campus Hangout Spot?');

});




$("#squiggle, #koipond, #eastfield, #oakes, #nets, #dorm").click( function(){
const college=$(this).attr("college");
   collegeScores[college]=collegeScores[college]+1;
   console.log(college);
$("#question03-options").show();
$("#question02-options").hide();
$("#question2").hide();
$("#question3").text('Whats Your Favorite / Go-To Dining Hall / Food Spot?');

});


$("#rcc-oakes, #oakes-cafe, #porter-kresge, #owl, #crown-merill, #banana-joe, #jrl-c9, #cowell-stevenson, #iveta").click( function(){
const college=$(this).attr("college");
   collegeScores[college]=collegeScores[college]+1;
   console.log(college);
$("#question04-options").show();
$("#question03-options").hide();
$("#question3").hide();
$("#question4").text('Whats Your Favorite Campus Animal?');

});


$("#turkey, #slug, #deer, #coyote, #koi").click( function(){
const college=$(this).attr("college");
   collegeScores[college]=collegeScores[college]+1;
   console.log(college);
$("#question05-options").show();
$("#question04-options").hide();
$("#question4").hide();
$("#question5").text('What / Where Is Your Favorite Study Spot?');

});


$("#mchenry, #sne, #dininghall, #nature, #page-smith, #empty-class, #no-study").click( function(){
const college=$(this).attr("college");
   collegeScores[college]=collegeScores[college]+1;
   console.log(college);
$("#question05-options").show();
$("#question04-options").hide();
$("#question4").hide();
$("#question5").text('What / Where Is Your Favorite Study Spot?');

});


// let winner=collegeScores.indexOf(Math.max(collegeScores));
// $("#result").css("background", winner+".jpg")