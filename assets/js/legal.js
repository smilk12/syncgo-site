// Language switch for the legal pages (privacy, terms, delete-account). External file so the CSP needs no 'unsafe-inline'.
(function(){var r=document.documentElement,q=new URLSearchParams(location.search).get('lang'),s=null;
try{s=localStorage.getItem('lang');var t=localStorage.getItem('theme');if(t==='dark'||t==='light')r.dataset.theme=t}catch(e){}   // theme picked on the home page
function set(l){r.lang=l;r.dir=l==='he'?'rtl':'ltr';document.getElementById('lang').textContent=l==='he'?'English':'עברית';
document.title=document.querySelector('[lang-block='+l+'] h1').textContent+' | SyncGo';try{localStorage.setItem('lang',l)}catch(e){}}
document.getElementById('lang').onclick=function(){set(r.lang==='he'?'en':'he')};
set(q==='en'||q==='he'?q:(s||((navigator.language||'').indexOf('he')===0?'he':'en')));})();
