// Contact form: posts to the SyncGo API (/api/contact: anonymous, rate limited, emailed to support; nothing stored).
(function () {
  var API = 'https://api.syncgo.app/api/contact';
  var T = {
    he: { sending: 'שולח…', ok: 'תודה! הפנייה נשלחה ונחזור אליכם במייל.', short: 'נא למלא שם, אימייל תקין והודעה (לפחות 10 תווים).',
          many: 'נשלחו הרבה פניות מהרשת הזו. נסו שוב בעוד שעה או כתבו ל-support@syncgo.app', fail: 'השליחה נכשלה. אפשר לכתוב ישירות ל-support@syncgo.app' },
    en: { sending: 'Sending…', ok: "Thanks! Your message was sent and we'll reply by email.", short: 'Please fill in a name, a valid email and a message (10+ characters).',
          many: 'Too many messages from this network. Try again in an hour or write to support@syncgo.app', fail: 'Sending failed. You can write to support@syncgo.app' }
  };
  var forms = document.querySelectorAll('form[data-contact]');
  for (var i = 0; i < forms.length; i++) (function (f) {
    var t = T[f.getAttribute('data-lang')] || T.he, msg = f.querySelector('.msg'), btn = f.querySelector('button');
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = { topic: f.elements.topic.value, name: f.elements.name.value.trim(), email: f.elements.email.value.trim(),
                message: f.elements.message.value.trim(), language: f.getAttribute('data-lang'), website: f.elements.website.value };
      msg.className = 'msg';
      if (d.name.length < 2 || !/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(d.email) || d.message.length < 10) { msg.className = 'msg err'; msg.textContent = t.short; return; }
      btn.disabled = true; msg.textContent = t.sending;
      fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(d) })
        .then(function (r) {
          if (r.ok) { msg.className = 'msg ok'; msg.textContent = t.ok; f.reset(); return; }
          msg.className = 'msg err'; msg.textContent = r.status === 429 ? t.many : r.status === 400 ? t.short : t.fail;
        })
        .catch(function () { msg.className = 'msg err'; msg.textContent = t.fail; })
        .then(function () { btn.disabled = false; });
    });
  })(forms[i]);
})();
