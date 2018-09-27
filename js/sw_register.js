	
//registering service worker
/*if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(function(registration) {
            console.log('Registration worked!,scope is:', registration.scope);
        })
        .catch(function(error) {
            console.log('Registration failed!', error);
        });
}*/
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function(){
    navigator.serviceWorker.register('sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  } else {
	console.log("no service worker in this browser");
}
