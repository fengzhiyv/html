"use strict";function _defineProperty(s,n,e){return n in s?Object.defineProperty(s,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[n]=e,s}$(function(){$("#dizh").mouseover(function(){$("#dizi1").css("display","block"),$("#dizh").mouseout(function(){$("#dizi1").css("display","none")})}),$("#wode").mouseover(function(){$("#wode1").css("display","block"),$("#wode").mouseout(function(){$("#wode1").css("display","none")})}),$("#shc").mouseover(function(){$("#shc ul").css("display","block"),$("#shc").mouseout(function(){$("#shc ul").css("display","none")})}),$(".dizhi1-2-1 li:first-child").click(function(){$(".dizhi1-3").css("display","block"),$(".dizhi1-2-1 li:first-child").css("background","#e7e7e7"),$(".dizhi1-2-1 li:last-child").css("background","#fff"),$(".dizhi3-1").css("display","none")}),$(".dizhi1-2-1 li:last-child").click(function(){$(".dizhi3-1").css("display","block"),$(".dizhi1-2-1 li:last-child").css("background","#e7e7e7"),$(".dizhi1-2-1 li:first-child").css("background","#fff"),$(".dizhi1-3").css("display","none")}),$(".new2-1-2").mouseover(function(){$(".new2-1-2").css("background","rgb(255,201,57)"),$(".new2-1-3").css("background","rgb(255,255,255)"),$(".new2-2-1").css("display","block"),$(".new3").css("display","none"),$(".das").css("background-position","0 -1257px"),$(".asd").css("background-position","-17px -1272px"),$(".new2-1-3 a").css("color","#000"),$(".new2-1-2 a").css("color","#fff")}),$(".new2-1-3").mouseover(function(){$(".new2-1-3").css("background","rgb(255,201,57)"),$(".new2-1-2").css("background","rgb(255,255,255)"),$(".new3").css("display","block"),$(".new2-2-1").css("display","none"),$(".new2-1-2 a").css("color","#000"),$(".das").css("background-position","-17px -1257px"),$(".asd").css("background-position","0px -1272px"),$(".new2-1-3 a").css("color","#fff")}),$(".new2-2-2").mouseover(function(){$(".new2-2-2 span").css("left","-27px"),$(".new2-2-2").mouseout(function(){$(".new2-2-2 span").css("left","0px")})}),$(".new2-2-3").mouseover(function(){$(".new2-2-3 span").css("left","-27px"),$(".new2-2-3").mouseout(function(){$(".new2-2-3 span").css("left","0px")})}),$(".shouji").click(function(){$(".zhanghu2").css("display","block"),$(".shouji").css("color","#f00"),$(".zhanghu1").css("display","none"),$(".zhanghu").css("color","#000000")}),$(".zhanghu").click(function(){$(".zhanghu1").css("display","block"),$(".zhanghu").css("color","#f00"),$(".zhanghu2").css("display","none"),$(".shouji").css("color","#000000")}),$(".kuais b").click(function(){$(".zhuce1").css(_defineProperty({display:"block"},"display","flex")),$(".denglu").css("display","none")}),$(".zhijie").click(function(){$(".zhuce1").css("display","none"),$(".denglu").css(_defineProperty({display:"block"},"display","flex"))}),$(".denglu-").click(function(){$(".denglu").css(_defineProperty({display:"block"},"display","flex"))}),$(".zhuce-").click(function(){$(".zhuce1").css(_defineProperty({display:"block"},"display","flex"))}),$(".denglu").click(function(s){var n=s||event;"denglu"==(n.target||n.srcElement).className.toLowerCase()&&$(".denglu").css("display","none")}),$(".zhuce1").click(function(s){var n=s||event;"zhuce1"==(n.target||n.srcElement).className.toLowerCase()&&$(".zhuce1").css({display:"none"})});var s=document.getElementById("adepet"),n=document.getElementById("lunbo"),e=document.getElementById("yesu").children,c=n.children,o=0,i=setInterval(function(){u()},1e3);s.onmouseover=function(){clearInterval(i)},s.onmouseout=function(){i=setInterval(function(){u()},1e3)};for(var l=function(s){e[s].onmouseover=function(){o=s-1,u()}},t=0;t<e.length;t++)l(t);function u(){o++;for(var s=0;s<c.length;s++)startMove(c[s],{opacity:0});startMove(c[0],{opacity:100}),o==c.length&&(o=0),-1==o&&(o=c.length-1);for(var n=0;n<e.length;n++)e[n].className="";e[o].className="hover",startMove(c[o],{opacity:100})}var a=document.getElementById("phb"),d=0;setInterval(function(){(d-=32)<=-128&&(d=0),startMove(a,{marginTop:d})},2e3)});