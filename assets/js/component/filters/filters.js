define(["filters/filtersView"], function(view){
	
	var filters = function(){
		this.oView = view;
		this.oController = this.oView.getController();

	};
	filters.prototype.getUI = function() {
		return this.oView.createContent();
	};

	filters.prototype.filterClicked = function(id) {
		return this.oController.filterClicked(id);
	};

	return (new filters());
});

