const drumSound = {
  Q: {
    key: 81,
    name: 'Bass',
    src: 'https://freewavesamples.com/files/Bass-Drum-1.wav'
  },
  W: {
    key: 87,
    name: 'Kick',
    src: 'https://freewavesamples.com/files/Boom-Kick.wav'
  },
  E: {
    key: 69,
    name: 'Hi-Hat-1',
    src: 'https://freewavesamples.com/files/Closed-Hi-Hat-1.wav'
  },
  A: {
    key: 65,
    name: 'Hi-Hat-2',
    src: 'https://freewavesamples.com/files/Ensoniq-SQ-1-Open-Hi-Hat.wav'
  },
  S: {
    key: 83,
    name: 'Tom',
    src: 'https://freewavesamples.com/files/Floor-Tom-1.wav'
  },
  D: {
    key: 68,
    name: 'Clap',
    src: 'https://freewavesamples.com/files/Clap-1.wav'
  },
  Z: {
    key: 90,
    name: 'Bamboo',
    src: 'https://freewavesamples.com/files/Bamboo.wav'
  },
  X: {
    key: 88,
    name: 'Snare1',
    src: 'https://freewavesamples.com/files/Ensoniq-ESQ-1-Snare.wav'
  },
  C: {
    key: 67,
    name: 'Snare2',
    src: 'https://freewavesamples.com/files/Kawai-K11-Bob-Snare.wav'
  }
}

//Query Selector

const soundName = document.querySelector('#beat-name');
const drumPad = document.querySelectorAll('.drum-pad');
const volume = document.querySelector('#volume-control');

for(let drum in drumSound) {
  
  const keyBoard = drumSound[drum].key; //get key value on drum sound nested object
  const soundLink = drumSound[drum].src; //get audio source value on drum sound nested object
  const name = drumSound[drum].name; //get name value on drum sound nested object
  const audio = new Audio(soundLink); //create audio constructor

  //Click Event Function
  for(let i = 0; i < drumPad.length; i++) {
    drumPad[i].addEventListener('click', event => {
      if (drum == drumPad[i].id) {
        event.target.classList.add('animate'); //add the animation
        setTimeout(() => event.target.classList.remove('animate'), 300); //remove the animation
        audio.currentTime = 0; //set time delay for audio
        audio.play(); //play the current audio
        soundName.innerHTML = name; //set equivalent sound output name when numpad is pressed
      };
    });

    //KeyBoard Event Function
    window.addEventListener('keydown', event => {
      const numKeys = event.keyCode; //get keyboard key code
      
      drumPad.forEach(pad => {
        if(drum === pad.id && numKeys === keyBoard) {
          audio.currentTime = 0; //set time delay for audio
          audio.play(); //play the current audio
          soundName.innerHTML = name; //set equivalent sound output name when numpad is pressed
          pad.classList.add('animate'); //add the animation
          setTimeout(() => pad.classList.remove('animate'), 300); //remove the animation
        };
      });
    });
  };

  // Volume Function
  volume.addEventListener('change', event => {
    audio.volume = event.currentTarget.value / 100;
  })
};


//keyboard function
// const keyboardSound = event => {
//   const numKeys = event.keyCode; //get keyboard key code
//   console.log(numKeys)
  // for(let drum in drumSound) {
  //   const keyBoard = drumSound[drum].key; //get key value on drum sound nested object
  //   const soundLink = drumSound[drum].src; //get audio source value on drum sound nested object
  //   const name = drumSound[drum].name; //get name value on drum sound nested object
  //   const audio = new Audio(soundLink); //create audio constructor

  //   drumPad.forEach(pad => {
  //     if(drum === pad.id && numKeys === keyBoard) {
  //       audio.currentTime = 0; //set time delay for audio
  //       audio.play(); //play the current audio
  //       soundName.innerHTML = name; //set equivalent sound output name when numpad is pressed
  //       pad.classList.add('animate'); //add the animation
  //       setTimeout(() => pad.classList.remove('animate'), 300); //remove the animation
  //     };
  //   });
  // };
// };

// //Click event function
// for(let i = 0; i < drumPad.length; i++) {
//   drumPad[i].addEventListener('click', event => {
//     for(let drum in drumSound) {
//       const keyBoard = drumSound[drum].key; //get key value on drum sound nested object
//       const soundLink = drumSound[drum].src; //get audio source value on drum sound nested object
//       const name = drumSound[drum].name; //get name value on drum sound nested object
//       const audio = new Audio(soundLink); //create audio constructor
      
//       if (drum == drumPad[i].id) {
//         event.target.classList.add('animate'); //add the animation
//         setTimeout(() => event.target.classList.remove('animate'), 300); //remove the animation
//         audio.currentTime = 0; //set time delay for audio
//         audio.play(); //play the current audio
//         soundName.innerHTML = name; //set equivalent sound output name when numpad is pressed
//       };
//     };
//   });
// };

//Volume Function
// const volumeControl = event => {
//   audio.volume = e.currentTarget.value / 100;
// };


// window.addEventListener('keydown', keyboardSound);
