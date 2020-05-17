// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery3
//= require popper
//= require bootstrap-sprockets

$(document).ready(function(){
   $("a.topbtn").hide();
   $(window).on("scroll", function() {
       if ($(this).scrollTop() > 350) {
           $("a.topbtn").fadeIn("fast");
       } else {
           $("a.topbtn").fadeOut("fast");
       }
       scrollHeight = $(document).height(); //ドキュメントの高さ 
       scrollPosition = $(window).height() + $(window).scrollTop(); //現在地 
       footHeight = $("footer").innerHeight(); //footerの高さ（＝止めたい位置）
       if ( scrollHeight - scrollPosition  <= footHeight ) { //ドキュメントの高さと現在地の差がfooterの高さ以下になったら
           $("a.topbtn").css({
               "position":"absolute", //pisitionをabsolute（親：wrapperからの絶対値）に変更
               "bottom": footHeight + 20 //下からfooterの高さ + 20px上げた位置に配置
           });
       } else { //それ以外の場合は
           $("a.topbtn").css({
               "position":"fixed", //固定表示
               "bottom": "20px" //下から20px上げた位置に
           });
       }
   });
   $('a.topbtn').click(function () {
       $('body,html').animate({
       scrollTop: 0
       }, 400);
       return false;
   });
});