// function play() {
//   // step-1: hide the home screen. to hide the screen add the class hidden the home section
//   const homeScreen = document.getElementById("home-screen");
//   homeScreen.classList.add("hidden");
//   //  console.log(homeScreen.classList);

//   // show the playground
//   const playgroundSection = document.getElementById("play-ground");
//   playgroundSection.classList.remove("hidden");
//   // console.log(playgroundSection.classList);
// }


function play( ){
  hideElementById("home-screen");
  showElementById("play-ground")
}