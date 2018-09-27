
/*if ('serviceWorker' in navigator) {
  window.addEventListener('load', function(){
    navigator.serviceWorker.register('sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch function(err){
      // registration failed
      console.log('ServiceWorker registration failed: ', err);
    };
  } else {
	console.log("no service worker in this browser");
}*/
/* Set up service worker */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
  .register('/sw.js', {scope: "/"})
    .then(reg => {
      console.log('Service Worker Registration Successful: ' + reg.scope);
    })
    .catch(error => {
      console.log('Service Worker Registration Failed:I am crying ' + error);
    });
}
