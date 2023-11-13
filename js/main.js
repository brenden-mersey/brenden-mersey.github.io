window.addEventListener( "resize", (event) => {});

window.addEventListener( "scroll", (event) => {});

window.addEventListener( "load", (event) => {

  setTimeout(() => {
    console.log("Loaded after 500ms");
  }, 500);

});
