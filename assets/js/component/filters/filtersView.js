
define(["filters/filtersController"], function(controller){

	var filtersView = function(){
		this.oController = controller;
	};

	filtersView.prototype.getController = function() {
		return this.oController;
	};

	filtersView.prototype.createContent = function() {
		var div ='<div>Filters</div>';
		div = div.concat(createFiltersCheckBoxes(this.oController.filtersCheckBoxes));
		return div;
	};


	function createFiltersCheckBoxes(filters) {
		var div = '';
		filters.forEach(function(filter) {
			div += '<div class="checkBox">'+
						'<input type="checkBox" onclick="window.app.component.filterClicked('+ filter.id +')">' +
						'<label>'+ filter.label + '</label>' +
						'</input></div>';
		});
		return div;
	}
	
	return (new filtersView());
});
