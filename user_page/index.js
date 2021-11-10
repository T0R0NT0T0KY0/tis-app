import {createURL, query} from "../helpers/url.js";
import {base_app_url} from "../envs.js";

const updateNickname = async (nickname) => {
    const url = createURL('/user/nickname');
    await fetch(url, {method: "PUT"})
        .then(r => r.json())
        .then(r => nickname.textContent = r.data.nickname)
        .catch((e) => {
            nickname.textContent = "..."
            console.log({e, url})
        })
}

const updateUsername = async (username) => {
    const url = createURL('/user/username');
    await fetch(url, {method: "PUT"})
        .then(r => r.json())
        .then(r => username.textContent = r.data.username)
        .catch((e) => {
            username.textContent = "..."
            console.log({e, url})
        })
}

const updateTeam = async (nickname) => {
    const url = createURL('/user/team');
    await fetch(url, {method: "PUT"})
        .then(r => r.json())
        .then(r => nickname.textContent = r.data.team)
        .catch((e) => {
            nickname.textContent = "..."
            console.log({e, url})
        })
}

const updateLivingPlace = async (living_place) => {
    const url = createURL('/user/living_place');
    await fetch(url, {method: "PUT"})
        .then(r => r.json())
        .then(r => living_place.textContent = r.data.place)
        .catch((e) => {
            living_place.textContent = "..."
            console.log({e, url})
        })
}

const updateBirthday = async (birthday) => {
    const url = createURL('/user/birthday');
    await fetch(url, {method: "PUT"})
        .then(r => r.json())
        .then(r => birthday.textContent = r.data.birthday)
        .catch((e) => {
            birthday.textContent = "..."
            console.log({e, url})
        })
}

const updateEmail = async (email) => {
    const url = createURL('/user/email');
    await fetch(url, {method: "PUT"})
        .then(r => r.json())
        .then(r => {

            email.textContent = r.data.email
        })
        .catch((e) => {
            email.textContent = "..."
            console.log({e, url})
        })
}

const updateAbout = async (about) => {
    const url = createURL('/user/about');
    await fetch(url, {method: "PUT"})
        .then(r => r.json())
        .then(r => about.textContent = r.data.about)
        .catch((e) => {
            about.textContent = "..."
            console.log({e, url})
        })
}
const updateImage = async (img) => {
    const url = createURL('/user/photo');
    await fetch(url)
        .then(r => r.json())
        .then(json => img.setAttribute("src", json.data.link))
        .catch((e) => {
            img.textContent = "..."
            console.log({e, url})
        })
}
const getUserInformationById = async () => {
    const url = createURL('/user');
    return await fetch(url)
        .then(r => r.json())
        .catch((e) => {
            console.log({e, url});
            return {};
        })
}

const setInfo = (selector, data) => {
    console.log({selector, data})
    const e = document.querySelector(selector);
    e && data ? e.textContent = data : null;
}

const setInformation = (data) => Object.keys(data).forEach(k => setInfo(`.${k}`, data[k]));

const getUserId = async () => {
    const url = createURL('/user_id');
    return await fetch(url)
        .then(r => r.json())
        .catch((e) => {
            console.log({e, url});
            return {};
        })
}

const getImg = async () => {
    const url = createURL('/user/photo');
    return await fetch(url)
        .then(r => r.json())
        .then(r => {
            console.log({r: r["data"]["link"]})
            return r["data"]["link"]
        })
        .catch((e) => {
            console.log({e, url});
            return {};
        })
}
const setImg = async (img) => document.querySelector(".user_image").setAttribute("src", img);

const user = {};

const setData = async () => {
    const {data} = await getUserInformationById();

    if (!data)
        return window.location.href = base_app_url + "/404/index.html"

    Object.keys(data).forEach((k) => user[k] = data[k]);

    setInformation(data);
    const img = await getImg();
    if (img){
        await setImg(img)
        user["user_image"] = img;
    }


    const user_id = query.match(/user_id=(\d+)/)[1];
    const userId = await getUserId();

    if (userId !== user_id)
        return console.log(111);

    const button = document.createElement("button");
    button.setAttribute("id", "change_button");
    button.textContent = "Сохранить"
    button.addEventListener("click", () => {
        console.log(123)
        const nickname = document.querySelector(".nickname").textContent;
        if (user["nickname"] !== nickname) updateNickname(nickname);

        const living_place = document.querySelector(".living_place").textContent;
        console.log(user["living_place"], living_place)
        if (user["living_place"] !== living_place) updateLivingPlace(living_place);


        const birthday = document.querySelector(".birthday").textContent;
        console.log(user["birthday"], birthday)
        if (user["birthday"] !== birthday) updateBirthday(birthday);


        const email = document.querySelector(".email").textContent;
        if (user["email"] !== email) updateEmail(email);


        const about_info = document.querySelector(".about_info").textContent;
        console.log(user["about_info"], about_info)
        if (user["about_info"] !== about_info) updateAbout(about_info);



    });
    document.querySelector("body").append(button);

};

export default setData;
