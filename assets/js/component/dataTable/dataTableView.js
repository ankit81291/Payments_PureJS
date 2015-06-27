
define(["dataTable/dataTableController"], function(controller){

	var dataTableView = function(){
		this.oController = controller;
	};

	dataTableView.prototype.getController = function() {
		return this.oController;
	};

	dataTableView.prototype.createContent = function() {
		var div ='<table class="table table-bordered table-striped">';
		div = div.concat(createTableHeader());
		div = div.concat(addData(this.oController.recordsShown));
		div += '</div></table>';
		return div;
	};

	dataTableView.prototype.refreshContent = function() {
		document.getElementsByTagName('tbody')[0].innerHTML = addData(this.oController.recordsShown);
	};

	function createTableHeader() {
		var div = '<thead><tr>' + 
					'<td class="sortable"><a onclick="window.app.component.sortTable(1)">Payment Id</a></td>' +
					'<td class="sortable"><a onclick="window.app.component.sortTable(2)">Order Date</a></td>' +
					'<td>Merchant Id</td>' +
					'<td>Customer Email</td>' +
					'<td class="sortable"><a onclick="window.app.component.sortTable(5)">Amount</a></td>' +
					'<td>Status</td>' +
				'</tr></thead>';

		return div;

	}

	function addData(records) {
		var div = '<tbody>';
		records.forEach(function(record) {
			div += '<tr>' +
					'<td>'+ record.paymentId +'</td>' +
					'<td>'+ record.orderDate +'</td>' +
					'<td>'+ record.merchatId +'</td>' +
					'<td>'+ record.customerEmail +'</td>' +
					'<td>'+ record.amount +'</td>' +
					'<td>'+ record.paymentStatus +'</td>' +
					'</tr>';
		});
		div += '</tbody>';
		return div;
	}
	
	return (new dataTableView());
});
