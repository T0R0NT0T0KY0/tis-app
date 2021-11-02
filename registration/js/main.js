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
            if (check) await ajax_post_request(input[0].value, input[1].value, input[2].value, input[3].value);
            return check;
        });


        $('.validate-form .input100').each(function () {
            $(this).focus(function () {
                hideValidate(this);
            });
        });

        function validate(input) {
            if ($(input).attr('type') === 'email' || $(input).attr('name') === 'email') {
                if (!/.+@.+\..+/.test($(input).val().trim())) {
                    return false;
                }
            } else {
                if (!$(input).val().trim().length && !$(input).val().match(/[\\\/]+/)) {
                    return false;
                }
            }
            return true;
        }

        function showValidate(input) {
            var thisAlert = $(input).parent();

            $(thisAlert).addClass('alert-validate');
        }

        function hideValidate(input) {
            var thisAlert = $(input).parent();

            $(thisAlert).removeClass('alert-validate');
        }

        const ajax_post_request = (username, nickname, email, password) => {
            alert(JSON.stringify({ name: username, nick: nickname, email, password }))
            $.ajax({
                url: 'http://localhost:8080/api/registration',
                method: 'POST',
                data: JSON.stringify({ username, nickname, email, password }),
                success: () => {
                    window.location.href = "../"
                }
            })
        }
    }
)
(jQuery);
