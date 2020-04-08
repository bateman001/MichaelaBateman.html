// JavaScript Document
const ME =["a problem solver", "a designer", "qualified"];

$("#js-play").on("click", function(e){
	
	e.preventDefault();
	$("form").hide()
	$(this).fadeOut(500);
	
	setTimeout(welcomeFade, 1000);
	setTimeout(noteFade, 5000);
	setTimeout(contentArrive, 10000)
				
});
	
function welcomeFade(){
	$("#welcome").fadeIn(2000).toggle("pulsate", 300);
}

function noteFade(){
	$("#note").fadeIn(2000).fadeOut(2000);
}

function showText(target, msg, index, interval){
	setInterval(function(){
		let list= `#li${index + 1}`;
		$(target).find(list).html(msg[index]).fadeIn(4000);
		index++;
	}, interval);
}

function contentArrive(){
	$(".content").css("display", "flex");
	$("#whoIamTitle").css("display", "inline");
	$(".reel").css("display", "flex");
	showText("ul", ME, 0, 1000 );
	setTimeout(showBio, 5000);
	setTimeout(showrest, 1000);
}

function showBio(){
	$(".bio").css("display", "inline");
}

function showrest(){
	$(".portfolio").css("display", "block");
	$("footer").css("display", "flex");
	$(".flex-center").css("display", "flex");
}

$("#show-form").on("click", function(){
	$(this).hide();
	$("form").show("blind", {direction: "up"}, 1000);
	setTimeout(function(){
		$("#submit-form").css("display", "block");
	}, 1000);
});
