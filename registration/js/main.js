await (async function ($) {
        var input = $('.validate-input .input100');

        $('.validate-form').on('submit', function () {
            let check = true;
            for (let i = 0; i < input.length; i++) {
                if ($(input[i]).val().length > 40) {
                    check = false;

                }
                if (!validate(input[i])) {
                    showValidate(input[i]);
                    check = false;
                }
            }
            if (check) ajax_post_request(input[0].value, input[1].value, input[2].value, input[3].value);
            return check;
        });


        $('.validate-form .input100').each(function () {
            $(this).focus(function () {
                hideValidate(this);
            });
        });

        function validate(input) {
            if ($(input).attr('name') === 'pass')
                return /(?=.*[0-9])[a-zA-Z0-9]{6,64}/.test($(input).val().trim());

            if ($(input).val().length > 40)
                return alert("Too much symbols")

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

        function ajax_post_request(username, nickname, email, password) {
            // console.log({username, nickname, email, password})
            // const xml = new XMLHttpRequest();
            // xml.open("POST", "http://192.168.1.3:8080/api/registration", true);
            // xml.responseType = 'json';
            //
            // xml.send(JSON.stringify({username, nickname, email, password}))
            //
            // const result = xml.response;
            //
            // xml.onload = function () {
            //     const responseObj = xml.response;
            //     alert(responseObj.message); // Привет, мир!
            //
            // };
            // console.log({result})

            // await fetch("http://192.168.1.3:8080/api/registration", {
            //     method: "POST",
            //     body: JSON.stringify({username, nickname, email, password}),
            //     mode:"no-cors"
            // }).then(r => {
            //     console.log({r})
            //     r.json()
            // }).catch(e => console.log(e))

            // const request = new XMLHttpRequest();
            // request.open("POST", 'http://192.168.1.3:8080/api/registration', true);
            // request.withCredentials = true;
            // request.send(JSON.stringify({username, nickname, email, password}))
            // console.log(1121, request);

            $.ajax({
                url: 'http://192.168.1.3:8080/api/registration',
                method: 'POST',
                data: JSON.stringify({ username, nickname, email, password }),
                success: () => {
                    console.log(JSON.stringify({ name: username, nick: nickname, email, password }))
                }
            }).done( function (resp) {

            })
        }
    }
)
(jQuery);
