(function ($) {
        "use strict";
        
        
        /*==================================================================
         [ Validate ]*/
        var input = $('.validate-input .input100');
        
        $('.validate-form').on('submit', async function () {
            let check = true;
            
            for (let i = 0; i < input.length; i++) {
                if (!validate(input[i])) {
                    showValidate(input[i]);
                    check = false;
                }
            }
            if (check) await ajax_post_request(input[0].value, input[1].value);
            return check;
        });
        
        
        $('.validate-form .input100').each(function () {
            $(this).focus(function () {
                hideValidate(this);
            });
        });
        
        function validate (input) {
            if ($(input).attr('type') === 'email' || $(input).attr('name') === 'email') {
                if ($(input).val().trim().match(/^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(]?)$/) == null) {
                    return false;
                }
            } else {
                if (!$(input).val().trim().length && !$(input).val().match(/[\\\/]/)) {
                    return false;
                }
            }
            return true;
        }
        
        function showValidate (input) {
            var thisAlert = $(input).parent();
            
            $(thisAlert).addClass('alert-validate');
        }
        
        function hideValidate (input) {
            var thisAlert = $(input).parent();
            
            $(thisAlert).removeClass('alert-validate');
        }
        
        const ajax_post_request = (email, password) => {
            console.log(JSON.stringify({ email, password }))
            $.ajax({
                url: 'http://localhost:8080/api/registration',
                method: 'POST',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify({ email, password }),
                success: (data) => {
                    alert(data);
                    console.log({ data })
                }
            })
        }
    }
)
(jQuery);