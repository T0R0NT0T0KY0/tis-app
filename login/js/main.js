import {base_api_url, base_app_url} from "../../envs.js";
import Swal from '../../node_modules/sweetalert2/src/sweetalert2.js'

(function ($) {
        const input = $('.validate-input .input100');

        $('.validate-form').on('submit', function () {
            const [err, data] = ajax_post_request(input[0].value, input[1].value);
            console.log({err, data});
            if (err) {
                // Swal.fire({
                //     icon: 'error',
                //     title: err.errorText,
                //     text: err.description,
                // })
                const thisAlert = $($('#password')).parent();
                $(thisAlert).addClass("alert-validate");
                return false;
            }
            window.location.href = `${base_app_url}/user_page/index.html?user_id=${data["user_id"]}`
            return false;
        });

        const ajax_post_request = (email, password) => {
            console.log(123)
            const xml = new XMLHttpRequest();
            xml.open("POST", base_api_url + "/login", false);
            xml.send(JSON.stringify({email, password}))
                const header = xml.getResponseHeader("user_dto");
            console.log({header})
            const result = JSON.parse(xml.response);
            console.log({result}, xml.status)
            if (xml.status !== 200 || !result || !result["user_id"]) return [result, null];
            return [null, result];
        }
    }
)
(jQuery);
