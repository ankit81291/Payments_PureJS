define(["dataTable/dataTableView"], function(view){
	
	var dataTable = function(){
		this.oView = view;
		this.oController = this.oView.getController();

	};
	dataTable.prototype.init = function() {
		return this.oController.onInit();
	};

	dataTable.prototype.getUI = function(object) {
		return this.oView.createContent(object);
	};

	dataTable.prototype.filterTable = function(filters) {
		var pages = this.oController.filter(filters);
		this.oView.refreshContent();
		return pages;
	};

	dataTable.prototype.sortTable = function(sortType) {
		this.oController.sort(sortType);
		this.oView.refreshContent();
	};

	dataTable.prototype.showPage = function(num) {
		this.oController.showPage(num);
		this.oView.refreshContent();
	};

	dataTable.prototype.recordsPerPage = function(num) {
		var pages = this.oController.recordsPerPage(num);
		this.oView.refreshContent();
		return pages;
	};
	
	return (new dataTable());
});

