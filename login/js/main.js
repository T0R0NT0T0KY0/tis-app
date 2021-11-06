import {base_api_url} from "../../envs.js";

(function ($) {
        "use strict";


        const input = $('.validate-input .input100');

        $('.validate-form').on('submit', function () {
            const [err, user_id] = ajax_post_request(input[0].value, input[1].value);
            if (err) return false;
            alert(user_id)
            window.location.replace("https://yandex.ru/")
        });

        const ajax_post_request = (email, password) => {
            const xml = new XMLHttpRequest();
            xml.open("POST", base_api_url + "/login", false);

            xml.send(JSON.stringify({email, password}))
            const status = xml.status;
            const responseText = xml.responseText;
            console.log({responseText})
            if (status === 200) {
                return [false, responseText];
            }
            const thisAlert = $($('#password')).parent();
            $(thisAlert).addClass("alert-validate");
            return [true];
        }
    }
)
(jQuery);
