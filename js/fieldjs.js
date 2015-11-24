$(document).ready(function(){
	$('#form').validate({
		    rules:{
		    username:{
			    required: true,
				minlength:6,
				maxlength:30,
		    },
		    surname:{
			    required: true,
				minlength:2,
				maxlength:12,
            },
		    name:{
			    required: true,
				minlength:2,
				maxlength:20,				
		    },
		    dob:{
			    required: true,
				minlength:10,
				maxlength:10,
			},
			pwd:{
		        required: true,
				minlength:12,
				maxlength:40,
			},
			add:{
		        required: true,
				minlength:6,
				maxlength:40,
			},
			ptc:{
		        required: true,
				minlength:6,
				maxlength:12,
			},
			email:{
				required: true,
				minlength:6,
				maxlength:30,
			},
			tel:{
				required: true,
				minlength:8,
				maxlength:12,
			},
		},
		messages:{
			
			
		},
	});
}); 

