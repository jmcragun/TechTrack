
$(document).ready(function () {
	$('#taskInput').keydown(function (e){     
		if(e.keyCode == 13){     
			var add = $('#taskInput').val();     
			$('#taskList').prepend("<li class=\"task\">"+add+"</li>");
			$('#taskInput').val("");
		}
	});
	$(document).on('click', '.task', function () {
		$(this).toggleClass("complete");
	});
	$(document).on('dblclick', '.task', function () {
		$(this).remove();
	});
	$(document).on('click', '#Active', function () {
		$('.task').show();
		$('.complete').hide();
	});
	$(document).on('click', '#Completed', function () {
		$('.task').hide();
		$('.complete').show();
	});
	$(document).on('click', '#All', function () {
		$('.task').show();
		$('.complete').show();
	});
	$(document).on('click', '#Clear', function () {
		$('.complete').remove();
		$('.task').show();
	});
	$(document).on('click', '#killEmAll', function () {
		$('.task').remove();
	});
});
