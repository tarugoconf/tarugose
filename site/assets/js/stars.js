particlesJS("js-space", {
    particles: {
      number: {
        value: 355,
        density: {
          enable: true,
          value_area: 789.1476416322727
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
      },
      opacity: {
        value: 0.4,
        random: false,
        anim: {
          enable: true,
          speed: 0.2,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 0.2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    retina_detect: true
  });