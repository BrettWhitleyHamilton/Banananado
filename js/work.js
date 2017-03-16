 $(document).ready(function(){
$.ajax({
	type:"GET",
	dataType:"json",
	url:"json/portfolio.json",
	success:function(data){
console.log(data);
	}
});

 $('[data-toggle="popover"]').popover({
        placement : 'right',
        trigger : 'hover'
    });
    });