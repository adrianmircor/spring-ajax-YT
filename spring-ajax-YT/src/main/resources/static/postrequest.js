$(document).ready(
	function() {

		// SUBMIT FORM
		$("#bookForm").submit(function(event) {
			// Prevent the form from submitting via the browser.
			event.preventDefault();
			ajaxPost();
		});

		function ajaxPost() {

			// PREPARE FORM DATA
			var formData = {
				bookId: $("#bookId").val(),
				bookName: $("#bookName").val(),
				author: $("#author").val()
			}

			// DO POST
			$.ajax({
				method: "POST",
				contentType: "application/json",
				url: "saveBook",
				data: JSON.stringify(formData),
				dataType: 'json',
				success: function(result) {
					console.log(result);
					if (result.status == "success") {
						$("#postResultDiv").html(
							"" + result.data.bookName
							+ " se registró con éxito!"
							+ "<br/>"
							+ "<p></p>");
					} else {
						$("#postResultDiv").html("<strong>Error</strong>");
					}
				},
				error: function(e) {
					alert("Error!")
					console.log("ERROR: ", e);
				}
			});

		}

	})