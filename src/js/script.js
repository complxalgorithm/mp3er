// main script for mp3er

var title = document.querySelector('h1');

// TweenMax.to(
//   title,//What to animate
//   2,//How long to animate it (second)
//   {
//     fontSize: '100px'
//     color: 'white'
//   }//How to animate it
// );
TweenMax.fromTo(
  title,
  2, {
    color: 'white'
  }, {
    fontSize: '65px',
    color: 'red'
  }
);

TweenMax.to(
  document.querySelector('.alert'),
  1.5,
  {
    rotation: '180deg',
    rotationY: '900deg',
    repeat: 3,
    yoyo: true
  }
);

var listOfSongs = [
  new Audio(''),
  new Audio(''),
  new Audio(''),
  new Audio('')
];

function playAudio(button, trackNumber) {
  // Change the word play to an audio gif
  button.innerHTML = '<img class="button-gif" src="http://i465.photobucket.com/albums/rr14/mmdj25/DJ/audio.gif" />';
  // Play the desired track
  listOfSongs[trackNumber - 1].play();
}

function pauseAudio(button, trackNumber) {
  // Change the gif to the word play in the play button
  button.previousElementSibling.innerHTML = 'Play';
  // Pause the desired track
  listOfSongs[trackNumber - 1].pause();
  listOfSongs[trackNumber - 1].play.currenttime = 0;
}
