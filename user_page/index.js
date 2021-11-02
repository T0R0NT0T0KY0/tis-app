const getQuery = () => {
    return window.location.search ?? "";
}
const base_url = 'http://192.168.1.3:8080/api/user';

const setNickname = async () => {
    const nickname = document.querySelector(".nickname");
     await fetch(base_url +'/nickname' + getQuery())
        .then(r => {
            console.log(1, r.body)
            return r.body
        })
        .then(r => nickname.textContent = r.data.nickname)
        .catch((e) => nickname.textContent = e)
}
const setUsername = async () => {
    const username = document.querySelector(".username");
    await fetch({url: base_url + '/username' + getQuery()})
        .then(r => {
            console.log(2, r.body)
            return r.json()
        })
        .then(r => {
            return username.textContent = r.data.username
        })
        .catch((e) => username.textContent = e)
}

const setTeam = async () => {
    const nickname = document.querySelector(".team_name");
    await fetch(base_url + '/team' + getQuery())
        .then(r => nickname.textContent = r.json().data.team)
        .catch((e) => nickname.textContent = "")
}

const setLivingPlace = async () => {
    const living_place = document.querySelector(".living_place");
    await fetch(base_url + '/living_place' + getQuery())
        .then(r => living_place.textContent = r.json().data.place)
        .catch((e) => living_place.textContent = "")

}

const setBirthday = async () => {
    const birthday = document.querySelector(".birthday");
    await fetch(base_url + '/birthday' + getQuery())
        .then(r => birthday.textContent = r.json().data.birthday)
        .catch((e) => birthday.textContent = "")
}

const setEmail = async () => {
    const email = document.querySelector(".email");
    await fetch(base_url + '/email' + getQuery())
        .then(r => email.textContent = r.json().data.email)
        .catch((e) => email.textContent = "")

}

const setAbout = async () => {
    const about = document.querySelector(".about_info");
    await fetch(base_url + '/about' + getQuery())
        .then(r => about.textContent = r.json().data.about)
        .catch((e) => about.textContent = "")

}
const setImage = async () => {
    const img = document.querySelector(".user_image");
    await fetch(base_url + '/photo' + getQuery())
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

module.exports = setData;


