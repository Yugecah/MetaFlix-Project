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
