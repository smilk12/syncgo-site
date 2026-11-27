// Landing page script (language switch, FAQ, effects). External file so the CSP needs no 'unsafe-inline'.
const T = {
 en:{
  nav_how:'How it works',nav_feat:'Features',nav_priv:'Privacy',nav_faq:'FAQ',nav_cta:'Get the app',
  h_eyebrow:'For trips, events and everything you do together',
  h1:'The whole group,<br><em>on one route.</em>',
  h_sub:'Who owes whom, what\'s the plan and who brings what. SyncGo keeps the whole trip in one app that syncs in real time for everyone: no spreadsheets, no arguments about money.',
  h_cta:'I want to try it',h_cta2:'How does it work?',t1:'Free',t2:'No ads',t3:'Hebrew & English',t4:'View offline too',
  fl1b:'Ben paid Emma $40',fl1s:'Debt settled ✓',fl2b:'Updated: leaving at 07:30',fl2s:'The whole group sees it instantly',
  how_eb:'How it works',how_h:'Three steps, and everyone is on the same page',how_p:'Nobody needs a tutorial. Open it, invite, and go.',
  s1t:'Create an event',s1d:'A trip, a vacation, a party or a shared flat. Give it a name, dates and a currency. That\'s it.',
  s2t:'Invite your friends',s2d:'Pick friends from your contacts or send an invite link. Whoever joins sees the same up-to-date picture as everyone else.',
  s3t:'Add things and enjoy',s3d:'Everyone adds expenses, plans and gear. The app works out who owes whom, and at the end you settle up in a tap.',
  f_eb:'Features',f_h:'Everything a group needs, in one place',f_p:'Instead of five WhatsApp groups, a spreadsheet and notes: one app that works for everyone.',
  ft1:'Split expenses',fd1:'Equally, between some of the group or by custom amounts. Balances update on their own.',
  ft2:'Who owes whom',fd2:'The app keeps the number of transfers to a minimum, and you can settle a debt in a tap with Bit (in Israel).',
  ft3:'Multiple currencies',fd3:'Pay in euros, settle in shekels or dollars. Conversion uses a current rate, plus a quick currency converter.',
  ft4:'Itinerary & schedule',fd4:'Activities by day and time, one-tap navigation to every stop, and everyone marks if they\'re coming.',
  ft5:'Gear & shopping',fd5:'A shared list with a color for each person (pick your own): who brings and who buys what, an "I\'ll buy it" button and a "mine" view. Turn a finished shop into an expense in a tap.',
  ft6:'Real-time sync',fd6:'Every change shows up for everyone instantly, with notifications for what matters.',ft7:'Event summary as a PDF',fd7:'Itinerary, expenses, who pays whom, gear and shopping in one designed document. Send it to the group in a tap, even mid-trip.',ft8:'Going again? Copy it',fd8:'Copy the itinerary, gear and shopping from a past event of the same kind (at home or abroad), no retyping.',ft9:'View without signal',fd9:'Out of signal? Keep viewing what\'s saved on your phone; changes wait until you\'re back online.',
  sh1_eb:'Expenses',sh1_h:'No more "wait, how much do I owe?"',sh1_p:'Every expense is entered once, and each person\'s balance is calculated automatically. At the end you see exactly who pays whom and how much: no calculator, no awkwardness.',
  sh1_l1:'Split equally, between some people or by custom amounts',sh1_l2:'The fewest transfers to settle every debt',sh1_l3:'Settle up in a tap with Bit',
  sh2_eb:'Itinerary',sh2_h:'A schedule everyone actually sees',sh2_p:'Instead of scrolling for the message with the time, the plan lives in one place. Change a time and everyone gets an update.',
  sh2_l1:'Activities by day and time',sh2_l2:'One-tap navigation to every stop',sh2_l3:'Everyone marks if they\'re coming',
  sh3_eb:'Gear & shopping',sh3_h:'Who brings, who buys, and what\'s already bought',sh3_p:'Everyone has their own color. Tap "I\'ll buy it" or "I\'ll bring it", see the list by person, and turn what was bought into an expense in a tap, never counted twice.',
  sh3_l1:'A color for every participant, pick your own',sh3_l2:'View by category, by person, or just mine',sh3_l3:'A finished shop becomes an expense in a tap',
  p_h:'Your data stays yours',p_p:'We collect only what the app needs to work, and we never sell data to anyone. Full details in the <a href="privacy.html">privacy policy</a>.',
  p_1:'No ads and no ad tracking',p_2:'Encrypted traffic, and each event is visible only to its members',p_3:'Contacts are used only to find friends, and are not stored',p_4:'Delete your account at any time, from inside the app',
  q_eb:'FAQ',q_h:'Questions? Answers.',
  q1:'How much does it cost?',a1:'SyncGo is free, with no ads.',
  q2:'Does everyone need to install the app?',a2:'To see the event, add expenses and get updates, yes. Signing up takes less than a minute with Google or a code sent to your email.',
  q3:'How is "who owes whom" calculated?',a3:'Each expense is split the way you choose: equally, between some members or by custom amounts. The app calculates everyone\'s balance and suggests the fewest transfers that settle all debts.',
  q4:'Can I add expenses in a foreign currency?',a4:'Yes. Pick a local currency for the destination and a settlement currency, and conversion uses a current rate.',
  q5:'Does the app move money?',a5:'No. SyncGo calculates and shows who should pay whom. The transfer itself happens in a payments app such as Bit, and you mark the debt as settled in SyncGo.',
  q6:'Which devices does it work on?',a6:'SyncGo launches first on Android in Google Play, followed shortly by iPhone in the App Store.',
  q7:'How do I delete my account?',a7:'In Settings & Account, under Account management. Full details on the <a href="delete-account.html">delete account</a> page.',q8:'Does it work without signal?',a8:'You can view everything already opened on your phone: itinerary, expenses, gear and shopping. Adding or changing things needs a connection, and the app shows when the data was last updated.',q9:'Can I get a summary of the whole event?',a9:'Yes. On the event screen tap "Event summary (PDF)" to get a designed document with the itinerary, expenses, who pays whom, gear and shopping, ready to send on WhatsApp or by email.',
  get:'Get it on',tester:'During testing: <a href="https://play.google.com/apps/testing/app.syncgather.mobile" target="_blank" rel="noopener">join as a tester</a> · Questions? <a href="contact.html">Contact us</a>',contact:'Contact',
  d_h:'Ready to go?',d_p:'SyncGo is launching soon. Your first event is a minute away.',soon:'Coming soon to',
  privacy:'Privacy policy',terms:'Terms of use',del:'Delete account',
  alt_01:'The My events & trips screen in SyncGo, with your balance in each event',alt_04:'Event expenses and who owes whom',alt_06:'The trip itinerary by day and time, with navigation and who is coming',alt_07:'Gear and tasks by who brings what, with a color for each participant',alt_10:'Currency converter with a current rate',alt_09:'The trip\'s shared photo albums',alt_02:'The event screen: budget & expenses, gear & shopping, itinerary, photos and the PDF summary',alt_05:'Adding an expense: who paid and how to split it',alt_03:'Managing the participants of an event',alt_08:'A shared shopping list by category',alt_12:'Shopping list by who buys it, with a color for each participant',alt_13:'Settings: language, currency and picking your color',alt_11:'Sign-in screen: with Google or an email code',sh4_eb:'Currencies',sh4_h:'Abroad? Convert in a tap',sh4_p:'A built-in converter with a current rate that already knows your trip\'s local and settlement currencies. Pay in euros, settle in dollars.',sh4_l1:'29 popular currencies',sh4_l2:'Rates are saved on your phone, so they work without signal too',sh4_l3:'Foreign-currency expenses are converted in the balance automatically',sh5_eb:'Photos',sh5_h:'Every trip photo, in one place',sh5_p:'Add a link to a Google Photos, iCloud or any shared album, and the whole group finds it right inside the event. No more digging through the chat.',sh5_l1:'An album for every day or every moment',sh5_l2:'See who shared each album',sh5_l3:'Opens in a tap on your phone',vid_eb:'35 seconds',vid_h:'Here\'s how it works',vid_alt:'A short video about SyncGo: expenses, invite links, gear, itinerary, albums and the PDF summary',sc_eb:'A look inside',sc_h:'Here\'s how it looks on your phone',sc_p:'Real screens from the app, with a sample trip.',scf1:'Every tool for the event',scs1:'Budget, gear, itinerary, photos and a PDF summary',scf2:'Add an expense',scs2:'Who paid and how to split it',scf3:'Gear & tasks',scs3:'Who brings what, in their color',scf4:'Your color',scs4:'Pick the color everyone sees for you',scf5:'Sign in in seconds',scs5:'With Google or an email code',
  scf6:'Invite with a link',scs6:'Send a link, and anyone who taps it joins',scf7:'Never miss a thing',scs7:'Everything that happened in your events, in one place',
  alt_14:'The notifications screen: what happened in my events',
  title:'SyncGo · The whole group, on one route'
 }
};
const root = document.documentElement;
root.classList.add('js-on');   // sections fade in on scroll only when this script runs; without it everything stays visible

// Dark mode: follows the system until the visitor picks one (the moon/sun button); the screenshots follow it too
function isDark(){ const t = root.dataset.theme; return t ? t === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches; }
function shots(){
  const s = isDark() ? '-dark' : '';
  document.querySelectorAll('img[data-shot]').forEach(img => { img.src = 'assets/img/screens/' + root.lang + s + '/' + img.dataset.shot + '.webp'; });
}
try { const t = localStorage.getItem('theme'); if (t === 'dark' || t === 'light') root.dataset.theme = t; } catch(e){}
const HE = {};
document.querySelectorAll('[data-t]').forEach(el => { HE[el.dataset.t] = el.hasAttribute('data-html') ? el.innerHTML : el.textContent; });
document.querySelectorAll('[data-ta]').forEach(el => { HE[el.dataset.ta] = el.alt; });
HE.title = document.title;
const promo = document.getElementById('promo');
if (promo) HE.vid_alt = promo.getAttribute('aria-label');
T.he = HE;

// Launch video: one file per language (bump ?v= when the video is re-rendered)
function video(){
  if (!promo || promo.dataset.l === root.lang) return;
  const base = 'assets/video/syncgo-' + root.lang;
  promo.dataset.l = root.lang;
  promo.poster = base + '-poster.webp?v=20261127';
  promo.querySelector('source').src = base + '.mp4?v=20261127';
  promo.setAttribute('aria-label', T[root.lang].vid_alt);
  promo.load();
}

function setLang(l){
  root.lang = l; root.dir = l === 'he' ? 'rtl' : 'ltr';
  const d = T[l];
  document.querySelectorAll('[data-t]').forEach(el => {
    const v = d[el.dataset.t]; if (v == null) return;
    if (el.hasAttribute('data-html')) el.innerHTML = v; else el.textContent = v;
  });
  document.querySelectorAll('img[data-shot]').forEach(img => { const a = d[img.dataset.ta]; if (a) img.alt = a; });
  shots();
  video();
  document.title = d.title;
  document.getElementById('lang').textContent = l === 'he' ? 'English' : 'עברית';
  try { localStorage.setItem('lang', l); } catch(e){}
}
document.getElementById('lang').onclick = () => setLang(root.lang === 'he' ? 'en' : 'he');
let start = null;
try { start = new URLSearchParams(location.search).get('lang') || localStorage.getItem('lang'); } catch(e){}
if (start !== 'he' && start !== 'en') start = (navigator.language || '').startsWith('he') ? 'he' : 'en';
if (start !== 'he') setLang(start); else shots();
document.getElementById('theme').onclick = () => {
  root.dataset.theme = isDark() ? 'light' : 'dark';
  try { localStorage.setItem('theme', root.dataset.theme); } catch(e){}
  shots();
};
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', shots);

document.getElementById('yr').textContent = new Date().getFullYear();

const hdr = document.getElementById('hdr');
addEventListener('scroll', () => hdr.classList.toggle('scrolled', scrollY > 8), { passive: true });

const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .12, rootMargin: '0px 0px -40px 0px' }) : null;
document.querySelectorAll('.rv').forEach((el, i) => {
  el.style.transitionDelay = (i % 3) * 80 + 'ms';
  io ? io.observe(el) : el.classList.add('in');
});

// The logo draws itself when the download card comes into view (as in the app's splash)
const fl = document.getElementById('finalLogo');
if (fl && io) new IntersectionObserver((es, o) => es.forEach(e => {
  if (e.isIntersecting) { fl.classList.add('draw'); o.disconnect(); }
}), { threshold: .5 }).observe(fl);
