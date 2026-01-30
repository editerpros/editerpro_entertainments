const io=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&t.target.classList.add('show')})},{threshold:.2});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));