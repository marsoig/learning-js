const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

for (let i = 1; i < 6; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', "images/pic"+i+".jpg");
  newImage.addEventListener('click', function (e) {
    let currentSrc = e.target.getAttribute ('src');
    displayedImage.setAttribute('src', currentSrc);
  });
  thumbBar.appendChild(newImage);
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function (e) {
  let currentClass = btn.getAttribute('class');
  if (currentClass == "dark") {
    btn.innerText ='Lighten';
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    btn.setAttribute('class', 'light');
  } else {
    btn.innerText = 'Darken';
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
    btn.setAttribute('class', 'dark');
  }
});
