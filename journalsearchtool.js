(function(){"use strict";const u=window.location.pathname.split("/");u[u.length-1].toLowerCase();const l="https://api.jst.scifree.se",p=async t=>await(await fetch(`${l}/custom/${t}/widget`)).json();(function(){const t=document.getElementById("scfwid"),r=t.getAttribute("data-account"),d=t.getAttribute("data-type")||"default";function s(e,o){const n="https://search.scifree.se",a=document.createElement("form"),c=document.createElement("input");a.appendChild(c);const h="display:flex;align-items:center;gap:12px;",m=d==="compact"?"font-size: 16px;padding: 12px;border-radius: 5px;box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);border:none;max-width: 412px;&::placeholder{color:#404040;font-weight:400;};":"font-size:20px;padding:20px;border-radius:15px;box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);border:none;width:412px;&::placeholder{color:#404040;font-weight:400;};",b=`padding:12px;height:42px;border-radius:5px;background-color:${e};box-shadow:none;border:0;font-size:14px;font-weight:500;color:#fff;verticle-align:middle;cursor:pointer;`;c.setAttribute("id","scfsearchparam"),c.setAttribute("placeholder",`${o.trim()}`),c.setAttribute("type","text"),c.setAttribute("style",m);const i=document.createElement("button");a.appendChild(i),i.setAttribute("id","scfsearch"),i.innerText="Search",i.setAttribute("style",b),a.setAttribute("style",h),a.setAttribute("id","scfsearchform"),t.append(a);const x=`${n}/${r}?term=`;i.addEventListener("click",function(A){const g=c.value;window.open(`${x}${g}`,"_blank")})}p(r).then(e=>{const o=e.main_color,n=e.search_helper;s(o,n)}).catch(()=>{s("#fff”,”Journal Search Tool")})})();function f(){const t="#scfsearchparam",r="#scfsearch",d="#scfsearchform",s=()=>{const e=document.querySelector(t),o=document.querySelector(r),n=document.querySelector(d);return{input:e,button:o,form:n}};return new Promise(e=>{if(document.querySelector(t))return e(s());const o=new MutationObserver(n=>{document.querySelector(t)&&(o.disconnect(),e(s()))});o.observe(document.body,{childList:!0,subtree:!0})})}window.scifree={onWidgetLoaded:f}})();
