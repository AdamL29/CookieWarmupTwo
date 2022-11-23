function clearCookies(){
    Cookies.remove(`imageUrl`);
    location.href = "/index.html";
}

let src = Cookies.get(`imageUrl`);

document.body.insertAdjacentHTML(`afterbegin`, `<img src="${src}" alt="Your pokemon">`);
document.getElementById(`backButton`).addEventListener(`click`, clearCookies)