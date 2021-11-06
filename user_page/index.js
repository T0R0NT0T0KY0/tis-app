import {createURL} from "../helpers/url.js";

const updateNickname = async () => {
    const nickname = document.querySelector(".nickname");
    const url = createURL('/user/nickname');
    await fetch(url)
        .then(r => r.json())
        .then(r => nickname.textContent = r.data.nickname)
        .catch((e) => {
            nickname.textContent = "..."
            console.log({e, url})
        })
}

const updateUsername = async () => {
    const username = document.querySelector(".username");
    const url = createURL('/user/username');
    await fetch(url)
        .then(r => r.json())
        .then(r => username.textContent = r.data.username)
        .catch((e) => {
            username.textContent = "..."
            console.log({e, url})
        })
}

const updateTeam = async () => {
    const nickname = document.querySelector(".team_name");
    const url = createURL('/user/team');
    await fetch(url)
        .then(r => r.json())
        .then(r => nickname.textContent = r.data.team)
        .catch((e) => {
            nickname.textContent = "..."
            console.log({e, url})
        })
}

const updateLivingPlace = async () => {
    const living_place = document.querySelector("#living_place");
    const url = createURL('/user/living_place');
    await fetch(url)
        .then(r => r.json())
        .then(r => living_place.textContent = r.data.place)
        .catch((e) => {
            living_place.textContent = "..."
            console.log({e, url})
        })
}

const updateBirthday = async () => {
    const birthday = document.querySelector(".birthday");
    const url = createURL('/user/birthday');
    await fetch(url)
        .then(r => r.json())
        .then(r => birthday.textContent = r.data.birthday)
        .catch((e) => {
            birthday.textContent = "..."
            console.log({e, url})
        })
}

const updateEmail = async () => {
    const email = document.querySelector(".email");
    const url = createURL('/user/email');
    await fetch(url)
        .then(r => r.json())
        .then(r => {

            email.textContent = r.data.email
        })
        .catch((e) => {
            email.textContent = "..."
            console.log({e, url})
        })
}

const updateAbout = async () => {
    const about = document.querySelector(".about_info");
    const url = createURL('/user/about');
    await fetch(url)
        .then(r => r.json())
        .then(r => about.textContent = r.data.about)
        .catch((e) => {
            about.textContent = "..."
            console.log({e, url})
        })
}
const updateImage = async () => {
    const img = document.querySelector(".user_image");
    const url = createURL('/user/photo');
    await fetch(url)
        .then(r => r.json())
        .then(json => img.setAttribute("src", json.data.link))
        .catch((e) => {
            img.textContent = "..."
            console.log({e, url})
        })
}
const getUserById = async () => {
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

const setInformations = (data) => {
    Object.keys(data).forEach(k => setInfo(`.${k}`, data[k]));
}

const setData = async () => {
    const {data} = await getUserById();
    if (data)
        setInformations(data)
    // if (!data) {
    //     window.location.href = "https://qna.habr.com/"
    // }
};

export default setData;
