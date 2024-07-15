// const sliderm = new Sliderm('#exampe-slider', {
//   arrow: true,
//   pagination: true,
//   grouping: false,
//   loop: true,
//   preview: false,
//   columns: 2,
//   duration: 500,
//   spacing: 10,
//   align: 'center',
// });



const sliderm = new Sliderm('#exampe-slider', {
  arrow: true,
  pagination: true,
  spinner: false,
  grouping: false,
  loop: true,
  preview: false,
  breakpoint: true,
  touch: true,
  autoplay: true,
  columns: 2,
  duration: 1000,
  spacing: 20,
  align: 'center',
  extensions: [],
  _arrow: {
    color: '#ffffff',
    bgColor: '#000000',
    opacity: 0.5,
    size: 13,
    shape: 'square',
    bold: 3,
  },
  _preview: {
    edge: 40,
  },
  _spinner: {
    color: '#1cbbb4',
  },
  _breakpoint: {
    columns: {
      4: false,
      3: 960,
      2: 768,
      1: 420,
    },
  },
  _touch: {
    threshold: 10,
    duration: 300,
  },
  _autoplay: {
    direction: 'right',
    duration: 5000,
  },
});