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

const soundName = document.querySelector('#beat-name');
const drumPad = document.querySelectorAll('.drum-pad');
const volume = document.querySelector('#volume-control');

