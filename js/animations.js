const config = { debug: false, name: "animations.js", version: "1.0" };

const animateOnScroll = () => {
  ( document.querySelectorAll("[data-gsap-block-trigger]") || [] ).forEach((element) => {

    let settings = element.dataset;
    let start = settings.gsapStart || "top 85%";
    let scrollTriggerOptions = {
      trigger: element,
      start: start,
      markers: false,
      onEnter: () => {
        element.classList.add("gsap-started");
      },
    };

    if ( config.debug ) {
      scrollTriggerOptions.markers = {
        startColor: "white",
        endColor: "red",
        fontSize: "16px",
        fontWeight: "300",
        indent: 24
      }
    }

    gsap.registerPlugin(ScrollTrigger);
    gsap.to(element, {
      scrollTrigger: scrollTriggerOptions,
    });

  });
};

const init = () => {
  if ( config.debug ) console.log(`[ ${config.name} v.${config.version} initialized ]`);
    animateOnScroll();
  if ( config.debug ) console.log(`[ ${config.name} v.${config.version} complete ]`);
};

export default { init };
