const url = "http://localhost:3000/movies";
document.addEventListener("DOMContentLoaded", () => {
    fetch();
    FormData();
});

function fetch() {
    fetch(url)
    .then((resp) => resp.json())
    .then((godwin) => console.log(godwin));
}

document.addEventListener('DOMContentLoaded', init);

function FormData() {
    const form = document.querySelector("form");
    form.addEventListener("submit", () => {});
}