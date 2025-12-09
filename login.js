/* Background rotation */
const posters = [
  "https://wallpaperaccess.com/full/1981621.jpg",
  "https://wallpaperaccess.com/full/8654093.jpg",
  "https://wallpaperaccess.com/full/13934165.jpg",
  "https://wallpaperaccess.com/full/10927784.jpg",
  "https://m.media-amazon.com/images/M/MV5BM2Y2YmY4YmItYmQzOC00MTQ4LTg0MjUtZjI3NGFiY2VmYTBjXkEyXkFqcGdeQXVyMTUyMjM3NDkz._V1_.jpg"
];

let idx = 0;
const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");

bg1.style.backgroundImage = `url('${posters[0]}')`;
bg1.classList.add("visible");
bg2.style.backgroundImage = `url('${posters[1]}')`;

setInterval(() => {
  idx = (idx + 1) % posters.length;
  const next = posters[(idx + 1) % posters.length];

  bg2.style.backgroundImage = `url('${next}')`;
  bg2.classList.add("visible");

  setTimeout(() => {
    bg1.classList.remove("visible");
    const temp = bg1.style.backgroundImage;
    bg1.style.backgroundImage = bg2.style.backgroundImage;
    bg2.style.backgroundImage = temp;
    [bg1.className, bg2.className] = ["bg-layer", "bg-layer"];
    bg1.classList.add("visible");
  }, 900);
}, 10000);

/* Login logic */
document.getElementById('loginBtn').onclick = function () {
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value;
  const savedUser = localStorage.getItem('metaflixUser');
  const savedPass = localStorage.getItem('metaflixPass');

  if (user === savedUser && pass === savedPass) {
    localStorage.setItem('metaflixLoggedIn', 'true');
    localStorage.setItem('metaflixCurrentUser', user);
    window.location.href = 'index.html';
  } else {
    alert("Incorrect username or password.");
  }
};
