(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),l=document.getElementById("timer-seconds"),o=document.getElementById("timer-days"),r=()=>{let e=(()=>{let e=(new Date("14 march 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.textContent=String(e.hours).padStart(2,"0"),n.textContent=String(e.minutes).padStart(2,"0"),l.textContent=String(e.seconds).padStart(2,"0"),o.textContent=e.days,e.timeRemaining>0?setTimeout(r,1e3):(t.textContent="00",n.textContent="00",l.textContent="00",o.textContent=0)};r()})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),l=t.querySelectorAll("ul > li > a"),o=e=>{e.preventDefault(),t.classList.toggle("active-menu"),e.target.matches("ul > li > a")&&document.querySelector(e.target.hash).scrollIntoView({block:"start",behavior:"smooth"})};e.addEventListener("click",o),n.addEventListener("click",o);for(let e=0;e<l.length-1;e++)l[e].addEventListener("click",o);l.forEach((e=>e.addEventListener("click",o)))})(),(()=>{if(document.documentElement.clientWidth>768){const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-close"),l=document.getElementById("btn-scroll");let o,r,c=100;const a=()=>{e.style.display="block",c-=4,o=requestAnimationFrame(a),c>=0?e.style.transform="translateX("+c+"%)":(c=100,cancelAnimationFrame(o))},u=()=>{e.style.transform="translateX(100%)",e.style.display="none"};t.forEach((e=>{e.addEventListener("click",a)})),n.addEventListener("click",u),l.addEventListener("click",(e=>{e.preventDefault();let t=document.documentElement.scrollTop;const n=()=>{t+=20,r=requestAnimationFrame(n),document.documentElement.scrollTop=t,t>850&&cancelAnimationFrame(r)};n()}))}})(),document.querySelector(".calc-block").addEventListener("input",(e=>{"input"==e.target.localName&&(e.target.value=e.target.value.replace(/\D+/gi,""))})),(()=>{const e=document.querySelectorAll('input[type="text"]'),t=document.querySelector('input[placeholder="Ваше сообщение"]'),n=document.querySelectorAll("input[type=email]"),l=document.querySelectorAll("input[type=tel]");e.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^а-яё]/gi,"")})),t.addEventListener("input",(()=>{t.value=t.value.replace(/[^а-яё]/gi,"")})),n.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^a-z\_\-\@\.\!\~\*\']+/gi,"")}))})),l.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^\d\-()']+/gi,"")}))}))}))})()})();