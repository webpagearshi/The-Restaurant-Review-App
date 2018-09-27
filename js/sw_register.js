
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
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('sw.js')
	.then(function() {
		console.log('Registration worked!');
	})
	.catch(function() {
		console.log('Registration failed!,I want to cry');
	});
}
