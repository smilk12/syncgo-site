// Invite link page: https://syncgo.app/j/{token} (rewritten to join.html by _redirects).
// "Open in the app" hands the token to the Android app (syncgo://join/{token}); without the app, Android opens Google Play.
(function () {
  var PLAY = 'https://play.google.com/store/apps/details?id=app.syncgather.mobile';
  var m = /^\/j\/([A-Za-z0-9_-]{8,40})\/?$/.exec(location.pathname);
  var stores = document.querySelectorAll('[data-store]');
  for (var i = 0; i < stores.length; i++) stores[i].href = PLAY;
  if (!m) { document.body.className += ' invalid'; return; }
  var token = m[1];
  var android = /android/i.test(navigator.userAgent);
  var href = android
    ? 'intent://join/' + token + '#Intent;scheme=syncgo;package=app.syncgather.mobile;S.browser_fallback_url=' + encodeURIComponent(PLAY) + ';end'
    : 'syncgo://join/' + token;
  var opens = document.querySelectorAll('[data-open]');
  for (var j = 0; j < opens.length; j++) opens[j].href = href;
})();
