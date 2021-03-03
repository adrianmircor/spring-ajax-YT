$(document).ready(
	function() {

		// GET REQUEST
		$("#getALlBooks").click(function(event) {
			event.preventDefault();
			console.log("Empieza la funcion")
			ajaxGet();
			for(let i=0; i< 1000; i++){
				console.log("->",i)
			}
		});

		// DO GET
		function ajaxGet() {
			$.ajax({
				method: "GET",
				url: "getBooks",
				success: function(result) {
					if (result.status == "success") {
						$('#getResultDiv ul').empty();
						var custList = "";
						$.each(result.data,
							function(i, book) {
								var user = "Nombre: "
									+ book.bookName
									+ " - Autor: " + book.author
									+ "<br/>";
								$('#getResultDiv .list-group').append(user)
							}
						);
						console.log("Success: ", result);
					} else {
						$("#getResultDiv").html("<strong>Error</strong>");
						console.log("Fail: ", result);
					}
				},
				error: function(e) {
					$("#getResultDiv").html("<strong>Error</strong>");
					console.log("ERROR: ", e);
				}
			});
		}
	})