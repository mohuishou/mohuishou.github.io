!function(c,u){function p(a,l){return new Promise(function(o,r){a("get","/classes/Counter?where="+encodeURIComponent(JSON.stringify({target:l}))).then(e=>e.json()).then(({results:e,code:t,error:n})=>{if(401===t)throw n;e&&0<e.length?(e=e[0],o(e)):a("post","/classes/Counter",{target:l,time:0}).then(e=>e.json()).then((e,t)=>{if(t)throw t;o(e)}).catch(e=>{console.error("Failed to create",e),r(e)})}).catch(e=>{console.error("LeanCloud Counter Error:",e),r(e)})})}function h(e){return{method:"PUT",path:"/1.1/classes/Counter/"+e,body:{time:{__op:"Increment",amount:1}}}}function e(t){var e,o=!0===CONFIG.web_analytics.enable,n=[],r=[],a=u.querySelector("#leancloud-site-pv-container");a&&(e=p(t,"site-pv").then(e=>{o&&r.push(h(e.objectId));var t=u.querySelector("#leancloud-site-pv");t&&(t.innerText=e.time+1,a&&(a.style.display="inline"))}),n.push(e));var l=u.querySelector("#leancloud-site-uv-container");l&&(i=p(t,"site-uv").then(e=>{var t=(n="LeanCloud_UV_Flag",!((t=localStorage.getItem(n))&&(new Date).getTime()-parseInt(t,10)<=864e5)&&(localStorage.setItem(n,(new Date).getTime().toString()),!0));t&&o&&r.push(h(e.objectId));var n=u.querySelector("#leancloud-site-uv");n&&(n.innerText=e.time+(t?1:0),l&&(l.style.display="inline"))}),n.push(i));var i,s=u.querySelector("#leancloud-page-views-container");s&&(i=decodeURI(c.location.pathname),i=p(t,i).then(e=>{var t;o&&r.push(h(e.objectId)),!s||(t=u.querySelector("#leancloud-page-views"))&&(t.innerText=(e.time||0)+1,s.style.display="inline")}),n.push(i)),o&&Promise.all(n).then(()=>{var e,o;0<r.length&&(e=t,o=r,new Promise(function(t,n){e("post","/batch",{requests:o}).then(e=>{if((e=e.json()).error)throw e.error;t(e)}).catch(e=>{console.error("Failed to save visitor count",e),n(e)})}))})}var r=CONFIG.web_analytics.leancloud.app_id,a=CONFIG.web_analytics.leancloud.app_key,t=CONFIG.web_analytics.leancloud.server_url;function n(o){e((e,t,n)=>fetch(o+"/1.1"+t,{method:e,headers:{"X-LC-Id":r,"X-LC-Key":a,"Content-Type":"application/json"},body:JSON.stringify(n)}))}t="-MdYXbMMI"!==r.slice(-9)?t:`https://${r.slice(0,8).toLowerCase()}.api.lncldglobal.com`;t?n(t):fetch("https://app-router.leancloud.cn/2/route?appId="+r).then(e=>e.json()).then(e=>{e.api_server&&n("https://"+e.api_server)})}(window,document);