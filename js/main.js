import Animations from "animations";

window.addEventListener( "resize", (event) => {});

window.addEventListener( "scroll", (event) => {});

window.addEventListener( "load", (event) => {
  
  Animations.init();

  setTimeout(() => {
    console.log("Loaded after 500ms");
  }, 500);

});