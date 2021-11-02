const getQuery = () => {
    return window.location.search ?? "";
}
const base_url = 'http://192.168.1.3:8080/api/user';

export const setNickname = async () => {
    const nickname = document.querySelector(".nickname");
    await fetch(base_url +'/nickname' + getQuery(), {mode: "no-cors", method: "GET"})
        .then(r => r.json())
        .then(r => {
            console.log(211, r)
        })
        .catch(e => console.log({e}))
}
export const setUsername = async () => {
    const username = document.querySelector(".username");
    await fetch(base_url + '/username' + getQuery(), {mode: "no-cors", method: "GET"})
        .then(r => {
            console.log(2, r.body)
            return r.json()
        })
        .then(r => {
            return username.textContent = r.data.username
        })
        .catch((e) => username.textContent = e)
}

export const setTeam = async () => {
    const nickname = document.querySelector(".team_name");
    await fetch(base_url + '/team' + getQuery(), {mode: "no-cors"})
        .then(r => nickname.textContent = r.json().data.team)
        .catch((e) => nickname.textContent = "")
}

export const setLivingPlace = async () => {
    const living_place = document.querySelector(".living_place");
    await fetch(base_url + '/living_place' + getQuery(), {mode: "no-cors"})
        .then(r => living_place.textContent = r.json().data.place)
        .catch((e) => living_place.textContent = "")

}

export const setBirthday = async () => {
    const birthday = document.querySelector(".birthday");
    await fetch(base_url + '/birthday' + getQuery(), {mode: "no-cors"})
        .then(r => birthday.textContent = r.json().data.birthday)
        .catch((e) => birthday.textContent = "")
}

export const setEmail = async () => {
    const email = document.querySelector(".email");
    await fetch(base_url + '/email' + getQuery(), {mode: "no-cors"})
        .then(r => email.textContent = r.json().data.email)
        .catch((e) => email.textContent = "")

}

export const setAbout = async () => {
    const about = document.querySelector(".about_info");
    await fetch(base_url + '/about' + getQuery(), {mode: "no-cors"})
        .then(r => about.textContent = r.json().data.about)
        .catch((e) => about.textContent = "")

}
export const setImage = async () => {
    const img = document.querySelector(".user_image");
    await fetch(base_url + '/photo' + getQuery(), {mode: "no-cors"})
        .then(r => r.json())
        .then(json => img.setAttribute("src", json.data.link))
        .catch((e) => img.textContent = "")

}

const setData = async () => {
    await setNickname();
    await setUsername();
    await setTeam();
    await setLivingPlace()
    await setBirthday()
    await setEmail();
    await setAbout();
    await setImage();
};

export default setData;
