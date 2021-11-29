$(document).ready(function(){
    jQuery.validator.addMethod("noSpace", function(value, element) { 
        return value.indexOf(" ") < 0 && value != ""; 
        }, "don't leave it empty");
    $("#submit-form").validate({
        rules:{
            name:{
                required:true,
                minlength:3,
                noSpace: true
            },
            mobile:{
                    required:true,
                    number:true,
                    minlength:10
            },
            email:{
                required:true,
                email:true
            },
            message:{
                required:true,
                minlength:10,
                noSpace: true
            }
        }
       
    })
})

