const menu=document.querySelector(".menu-toggle"),nav=document.querySelector(".main-nav");
menu?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open)});
document.querySelectorAll(".main-nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
const glow=document.querySelector(".cursor-glow");
window.addEventListener("pointermove",e=>{if(glow){glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"}},{passive:true});
document.querySelector(".contact-form")?.addEventListener("submit",e=>{e.preventDefault();const b=e.currentTarget.querySelector("button");b.innerHTML="Merci — votre demande est prête <span>✓</span>";b.disabled=true});
