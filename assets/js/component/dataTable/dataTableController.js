define([], function(){

	var dataTableController = function(){
	};

	dataTableController.prototype.onInit = function() {
		this.records = paymentRecords;
		this.numRecordsPerPage = 5;			// By default page size = 5
		this.recordsShown = [];
		this.pages = createPageArray(this.records, this.numRecordsPerPage);
		this.showPage(1);
		return this.pages;
	};
	dataTableController.prototype.sort = function(id) {
		var type = "";
		switch(id) {
			case 1: type = "paymentId";
				break;
			case 2: type = "orderDate";
				break;
			case 5: type = "amount";
				break;
		}

		this.records = this.records.sort(function(a, b) {
				if (a[type] < b[type])
					return -1;
				if (a[type] > b[type])
					return 1;
				return 0;
			}
		);
		this.pages = createPageArray(this.records, this.numRecordsPerPage);
		this.showPage(1);

	};


	dataTableController.prototype.filter = function(filters) {

		this.records = paymentRecords.filter(function(record) {
			if(filters.length === 0){
				return true;
			}
			for(var i=0; i< filters.length; i++) {
				if(record.paymentStatus === filters[i].label) {
					return true;
				}
			}
			return false;
		});
		this.pages = createPageArray(this.records, this.numRecordsPerPage);
		this.showPage(1);
		return this.pages;
	};



	dataTableController.prototype.recordsPerPage= function(num) {

		this.numRecordsPerPage = num;
		this.pages = createPageArray(this.records, num);
		this.showPage(1);
		return this.pages; 

	};

	dataTableController.prototype.showPage = function(pageNum) {
		this.recordsShown = this.pages[pageNum-1].paymentRecords;
	};

	function createPageArray(dataRecords, numRecordsPerPage) {
		var pages = [], newPage,
			records = dataRecords,
			num = numRecordsPerPage;
		if(records.length <= num) {
			newPage = {};
			newPage.pageNumber = 1;
			newPage.paymentRecords = records;
			pages.push(newPage);
		} else {
			var len = records.length, i = 0, j=1, n= len/num;
			while (i < len) {
				newPage = {};
				newPage.pageNumber = j++;
				newPage.paymentRecords = [];
				var size = Math.ceil((len - i) / n--);
				newPage.paymentRecords = records.slice(i, i += size);
				pages.push(newPage);
			}
		}
		return pages;
	}
	
	return (new dataTableController());
});

