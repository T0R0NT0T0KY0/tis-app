import {base_api_url, base_app_url} from "../../envs.js";
import Swal from '../../node_modules/sweetalert2/src/sweetalert2.js'


(async function ($) {
        const input = $('.validate-input .input100');

        $('.validate-form').on('submit', function () {
            let check = true;
            if ($('#password').val() !== $('#password2').val()) {
                showValidate($('#password2'));
                check = false
            }


            for (let i = 0; i < input.length; i++) {
                if (!validate(input[i])) {
                    showValidate(input[i]);
                    check = false;
                }
            }
            if (!check) return false;
            const [err, data] = ajax_post_request(input[0].value, input[1].value, input[2].value, input[3].value);

            console.log(data)
            console.log(err, `${base_app_url}/user_page/index.html?user_id=${!data??data["user_id"]}`)
            if (err) {
                Swal.fire({
                    icon: 'error',
                    title: err.errorText,
                    text: err.description,
                    showConfirmButton: true,
                })
                return false;
            }
            Swal.fire({  //todo where??? not visible
                position: 'top-end',
                icon: 'success',
                title: `MFK, y re In mN ${data["user_id"]}`,
                showConfirmButton: false,
                timer: 1500
            });
            window.location.href = `${base_app_url}/user_page/index.html?user_id=${data["user_id"]}`

            Swal.fire({//todo where??? not visible
                position: 'top-end',
                icon: 'success',
                title: `MFK2, y re In mN ${data["user_id"]}`,
                showConfirmButton: false,
                timer: 1500
            });
            return false;
        });


        $('.validate-form .input100').each(function () {
            $(this).focus(function () {
                hideValidate(this);
            });
        });

        function validate(input) {
            const val = $(input).val();
            if ($(input).attr('name') === 'pass')
                return val.length > 6 && val.match(/.*\d.*\d.*\d.*/) && val.match(/.*[a-z].*/) && val.match(/.*[A-Z].*/);

            if (val.length > 40)
                return alert("Too much symbols")

            if ($(input).attr('type') === 'email' || $(input).attr('name') === 'email') {
                if (!/.+@.+\..+/.test(val.trim())) {
                    return false;
                }
            } else {
                if (!val.trim().length && !val.match(/[\\\/]+/)) {
                    return false;
                }
            }
            return true;
        }

        function showValidate(input) {
            const thisAlert = $(input).parent();
            $(thisAlert).addClass('alert-validate');
        }

        function hideValidate(input) {
            const thisAlert = $(input).parent();
            $(thisAlert).removeClass('alert-validate');
        }

        function ajax_post_request(username, nickname, email, password) {
            const xml = new XMLHttpRequest();
            xml.open("POST", base_api_url + "/registration", false);

            xml.send(JSON.stringify({username, nickname, email, password}))
            const result = JSON.parse(xml.response);
            console.log(123, xml.getAllResponseHeaders());
            if (xml.status !== 200 || !result || !result["user_id"]) return [result, null];
            // sessionStorage.setItem("user_dto", xml.getResponseHeader("user_dto"))
            return [null, result];
        }
    }
)
(jQuery);
