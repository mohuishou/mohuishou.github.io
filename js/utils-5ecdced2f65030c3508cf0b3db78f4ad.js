Fluid.utils={listenScroll:function(e){const t=new Debouncer(e);window.addEventListener("scroll",t,!1),t.handleEvent()},scrollToElement:function(e,t){e=$(e).offset();e&&$("html,body").animate({scrollTop:e.top+(t||0),easing:"swing"})},waitElementVisible:function(e,n){var t="undefined"!=typeof window,o=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(navigator.userAgent),t=t&&"IntersectionObserver"in window;!o&&t?new IntersectionObserver(function(e,t){e[0].isIntersecting&&(n&&n(),t.disconnect())},{threshold:[0],rootMargin:(window.innerHeight||document.documentElement.clientHeight)+"px"}).observe(document.getElementById(e)):n&&n()},waitElementLoaded:function(n,o){var e="undefined"!=typeof window,t=e&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(navigator.userAgent);e&&!t&&("MutationObserver"in window?new MutationObserver(function(e,t){document.getElementById(n)&&(o&&o(),t.disconnect())}).observe(document,{childList:!0,subtree:!0}):document.addEventListener("DOMContentLoaded",function(){o&&o()}))},createScript:function(e,t){var n=document.createElement("script");n.setAttribute("src",e),n.setAttribute("type","text/javascript"),n.setAttribute("charset","UTF-8"),n.async=!1,"function"==typeof t&&(window.attachEvent?n.onreadystatechange=function(){var e=n.readyState;"loaded"!==e&&"complete"!==e||(n.onreadystatechange=null,t())}:n.onload=t);e=document.getElementsByTagName("script")[0]||document.getElementsByTagName("head")[0]||document.head||document.documentElement;e.parentNode.insertBefore(n,e)},createCssLink:function(e){var t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),t.setAttribute("href",e);e=document.getElementsByTagName("link")[0]||document.getElementsByTagName("head")[0]||document.head||document.documentElement;e.parentNode.insertBefore(t,e)}};