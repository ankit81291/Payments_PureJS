define(["actionBar/actionBar", "filters/filters", "dataTable/dataTable"], function(actionBar, filters, dataTable){
	
	var Component = function(){
		this.actionBar=actionBar;
		this.dataTable=dataTable;
		this.filters = filters;
	};

	Component.prototype.initializeComponents = function() {
		this.pages = this.dataTable.init();
	};
	
	Component.prototype.buildTableContent = function(){
		return this.dataTable.getUI();
	};
	
	Component.prototype.buildActionBar = function(obj){
		return this.actionBar.getUI(this.pages);
	};

	Component.prototype.buildFiltersView = function() {
		return this.filters.getUI();
	};

	Component.prototype.recordsPerPageChanged = function(event) {
		var number = document.getElementById('numRecords').value;
		var pages = this.dataTable.recordsPerPage(number);
		this.actionBar.refreshPaginationBar(pages);
	};

	Component.prototype.setCurrentPage = function(num) {
		this.dataTable.showPage(num);
	};

	Component.prototype.sortTable = function(sortType) {
		this.dataTable.sortTable(sortType);
	};

	Component.prototype.filterClicked = function(id) {
		var appliedFilters = this.filters.filterClicked(id);
		var pages = this.dataTable.filterTable(appliedFilters);
		this.actionBar.refreshPaginationBar(pages);
	};
	return new Component();
});