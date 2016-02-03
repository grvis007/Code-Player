/**
 * Created by Gaurav on 1/17/2016.
 */
var windowHeight = $(window).height();
var menuBarHeight = $("#menubar").height();

var codeContainerHeight = windowHeight-menuBarHeight;

$(".codeContainer").height(codeContainerHeight+"px");

$(".toggle").click(function(){
    //toggleClass is used to toggle even if it selected before
    $(this).toggleClass("selected");

    var activeDiv = $(this).html();
    $("#"+activeDiv+"Container").toggle();

    var showingDivs = $(".codeContainer").filter(function(){

        return ($(this).css("display")!="none");
    }).length;

    var width=100/showingDivs;
    $(".codeContainer").css("width",width+"%");

});

$("#runButton").click(function(){
    $("#resultFrame").contents().find("html").html('<style>'+$("#cssCode").val()+'</style>'+$("#htmlCode").val());
    document.getElementById('resultFrame').contentWindow.eval($("#jsCode").val());
});

