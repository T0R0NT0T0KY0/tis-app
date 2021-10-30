const getQuery = () => {
    return window.location.search.split("?")[1] ?? "";
}

export const setNickname = () => {
    const nickname = document.querySelector(".nickname");
    fetch('https://192.1668.1.3/api/user/nickname?' + getQuery())
        .then(r => nickname.textContent = r.json().data.nickname)
        .catch((e) => nickname.textContent = "")
}
export const setUsername = () => {
    const username = document.querySelector(".username");
    fetch('https://192.1668.1.3/api/user/username?'  + getQuery())
        .then(r => username.textContent = r.json().data.username)
        .catch((e) => username.textContent = "")
}

export const setTeam = () => {
    const nickname = document.querySelector(".team_name");
    fetch('https://192.1668.1.3/api/user/team?'  + getQuery())
        .then(r => nickname.textContent = r.json().data.team)
        .catch((e) => nickname.textContent = "")

}

export const setLivingPlace = () => {
    const nickname = document.querySelector(".living_place");
    fetch('https://192.1668.1.3/api/user/living_place?'  + getQuery())
        .then(r => nickname.textContent = r.json().data.place)
        .catch((e) => nickname.textContent = "")

}

export const setBirthday = () => {
    const nickname = document.querySelector(".birthday");
    fetch('https://192.1668.1.3/api/user/birthday?'  + getQuery())
        .then(r => nickname.textContent = r.json().data.birthday)
        .catch((e) => nickname.textContent = "")

}

export const setEmail = () => {
    const nickname = document.querySelector(".email");
    fetch('https://192.1668.1.3/api/user/email?'  + getQuery())
        .then(r => nickname.textContent = r.json().data.email)
        .catch((e) => nickname.textContent = "")

}

export const setAbout = () => {//todo
    const nickname = document.querySelector(".about_info");
    fetch('https://192.1668.1.3/api/user/email?'  + getQuery())
        .then(r => nickname.textContent = r.json().data.email)
        .catch((e) => nickname.textContent = "")

}
