$(document).ready(
	function() {
		insertIntoDB();
	}
);

	function insertIntoDB() {	
		$.ajax({
		  dataType: "json",
		  url: "php/api.php",
		  data: "",
		  success: function (data) {

		  }
		});
	};