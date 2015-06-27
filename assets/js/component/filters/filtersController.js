define([], function(){

	var filtersController = function(){
		this.filtersCheckBoxes = [
			{
				id: 1,
				label: "Initiated",
				value: false
			},
			{
				id: 2,
				label: "Failed",
				value: false
			},
			{
				id: 3,
				label: "Dropped",
				value: false
			},
			{
				id: 4,
				label: "Success",
				value: false
			},
			{
				id: 5,
				label: "Refunded",
				value: false
			}
		];	
	};


	filtersController.prototype.filterClicked = function(id) {
		var appliedFilters = [];
		for(var i=0; i< this.filtersCheckBoxes.length; i++) {
			if(this.filtersCheckBoxes[i].id == id) {
				if(this.filtersCheckBoxes[i].value) {
					this.filtersCheckBoxes[i].value = false;
				} else {
					this.filtersCheckBoxes[i].value = true;
				}
			}
			if(this.filtersCheckBoxes[i].value) {
				appliedFilters.push(this.filtersCheckBoxes[i]);
			}
		}
		return appliedFilters;
	};

	return (new filtersController());
});

