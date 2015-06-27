
define(["actionBar/actionBarController"], function(controller){

	var actionBarView = function(){
		this.oController = controller;
	};

	actionBarView.prototype.getController = function() {
		return this.oController;
	};

	actionBarView.prototype.createContent = function(pages) {
		var div ='';
		div = div.concat(createNumRecordsInput());
		div += '<div id="paginationBar" class="pull-right">';
		div = div.concat(createPaginationBar(pages));
		div += '</div>';
		return div;
	};

	actionBarView.prototype.refreshPagination = function(pages) {
		document.getElementById('paginationBar').innerHTML = createPaginationBar(pages);
	};

	function createPaginationBar(pages) {
		var div = '<nav>'+ 
					'<ul class="pagination">';
		pages.forEach(function(page) {
			div += '<li><a href="#" onclick="window.app.component.setCurrentPage('+ page.pageNumber + ')"">'+ page.pageNumber + '</a></li>';
		});
		div += '</ul></nav>';
		return div;
	}

	function createNumRecordsInput() {
		var div="";
	
		div = '<div class="records pull-left">'+
			'<span class="labelHeading"># per page</span>'+
			'<input id="numRecords" class="recordsInput" type="text" placeholder="#" onblur="window.app.component.recordsPerPageChanged()"></input>' + 
			'</div>';
		return div;
	}
	
	return (new actionBarView());
});
