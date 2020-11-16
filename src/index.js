import Scene from "./scene";

const main = () => {
    const { initialize, animate } = Scene();
    initialize();
    animate();

    // if (module.hot) {
    //     module.hot.accept('./scene.js', function() {
    //       console.log('Accepting the updated printMe module!');
    //       animateScene();
    //     })
    //   }
};

main();
