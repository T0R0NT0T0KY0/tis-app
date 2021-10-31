const getQuery = () => {
    return window.location.search.split("?")[1] ?? "";
}

const setNickname = async () => {
    const nickname = document.querySelector(".nickname");
    await fetch('https://192.168.1.3/api/user/nickname?' + getQuery())
        .then(r => {
            console.log(3232, {r})
            return nickname.textContent = r.json().data.nickname
        })
        .catch((e) => nickname.textContent = "")
}
const setUsername = () => {
    const username = document.querySelector(".username");
    fetch({url:'https://192.168.1.3/api/user/username?'  +getQuery()})
        .then(r => username.textContent = r.json().data.username)
        .catch((e) => username.textContent = "")
}

const setTeam = () => {
    const nickname = document.querySelector(".team_name");
    fetch('https://192.168.1.3/api/user/team?'  + getQuery())
        .then(r => nickname.textContent = r.json().data.team)
        .catch((e) => nickname.textContent = "")

}

const setLivingPlace = () => {
    const living_place = document.querySelector(".living_place");
    fetch('https://192.168.1.3/api/user/living_place?'  + getQuery())
        .then(r => living_place.textContent = r.json().data.place)
        .catch((e) => living_place.textContent = "")

}

const setBirthday = () => {
    const birthday = document.querySelector(".birthday");
    fetch('https://192.168.1.3/api/user/birthday?'  + getQuery())
        .then(r => birthday.textContent = r.json().data.birthday)
        .catch((e) => birthday.textContent = "")

}

const setEmail = () => {
    const email = document.querySelector(".email");
    fetch('https://192.168.1.3/api/user/email?'  + getQuery())
        .then(r => email.textContent = r.json().data.email)
        .catch((e) => email.textContent = "")

}

const setAbout = () => {//todo
    const about = document.querySelector(".about_info");
    fetch('https://192.168.1.3/api/user/about?'  + getQuery())
        .then(r => about.textContent = r.json().data.about)
        .catch((e) => about.textContent = "")

}
const setImage = () => {//todo
    const img = document.querySelector(".user_image");
    fetch('https://192.168.1.3/api/user/photo?'  + getQuery())
        .then(r => r.json())
        .then(json => img.setAttribute("src", json.data.link))
        .catch((e) => img.textContent = "")

}

module.exports = {setNickname, setAbout, setBirthday, setEmail, setTeam, setLivingPlace, setImage};


