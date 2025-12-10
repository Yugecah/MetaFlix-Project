const params = new URLSearchParams(window.location.search);
const idx = parseInt(params.get('v') || '0', 10);
const sources = [
  { src: 'assets/videos/money-heist.mp4', type: 'video/mp4' },
  { src: 'assets/videos/percy-jackson.mp4', type: 'video/mp4' },
  { src: 'assets/videos/bridgerton.mp4', type: 'video/mp4' }
];
const videoEl = document.getElementById('player-video');
const s = sources[idx] || sources[0];
videoEl.src = s.src;
videoEl.type = s.type;
videoEl.play().catch(()=>{});
const titles = [
  'Money Heist',
  'Percy Jackson and the Olympians',
  'Bridgerton'
];
const titleEl = document.getElementById('player-title');
if (titleEl) titleEl.textContent = titles[idx] || titles[0];
