$("#dish").click(function(){
 $(".answer").text("Most employers require addresses. Because you are homeless the employer did not hire you");
});
$(".jan").click(function(){
 $(".answer").text("Most employers require addresses. Because you are homeless the employer did not hire you");
});
$(function(){
    $('#dish').on('click',function(){
        var r= $('<input type="button" value="Next"/>');
        $("body").append(r);
    });
    $('.jan').on('click',function(){
        var r= $('<input type="button" value="Next"/>');
        $("body").append(r);
    });
});