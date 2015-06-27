define(["actionBar/actionBarView"], function(view){
	
	var actionBar = function(){
		this.oView = view;
		this.oController = this.oView.getController();

	};
	actionBar.prototype.getUI = function(object) {
		return this.oView.createContent(object);
	};

	actionBar.prototype.refreshPaginationBar = function(pages) {
		this.oView.refreshPagination(pages);
	};

	return (new actionBar());
});

