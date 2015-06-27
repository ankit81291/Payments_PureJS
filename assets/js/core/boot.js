define(["application"], function(application) {
	
	if(!this.app){
		this.app = new application();
		window.app = this.app;
	}
	this.app.start();
});