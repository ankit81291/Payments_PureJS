define(["component"],function(component) {

	var Application = function(){
		this.component = component;
	};
	
	Application.prototype.start = function(){

		window.console.log("Start called...");
		this.component.initializeComponents();
		document.getElementById('tableBody').innerHTML = this.component.buildTableContent();
		document.getElementById('actionBar').innerHTML = this.component.buildActionBar();
		document.getElementById('filters').innerHTML = this.component.buildFiltersView();
	};
	return Application;	
});