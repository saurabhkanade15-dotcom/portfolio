
(function(){
  var root=document.documentElement;
  var btn=document.querySelector('[data-theme-toggle]');
  function current(){var t=root.getAttribute('data-theme');if(t)return t;return window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}
  if(btn){btn.addEventListener('click',function(){var next=current()==='dark'?'light':'dark';root.setAttribute('data-theme',next);try{localStorage.setItem('theme',next);}catch(e){}});}
  var menu=document.querySelector('[data-menu]'),nav=document.querySelector('.nav');
  if(menu&&nav){menu.addEventListener('click',function(){nav.classList.toggle('open');});}
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -8% 0px',threshold:.08});
    els.forEach(function(el){io.observe(el);});
  }else{els.forEach(function(el){el.classList.add('in');});}
})();
