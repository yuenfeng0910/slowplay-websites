const gameURL='https://yuenfeng0910.github.io/limin-rgb-game/';
const stage=document.querySelector('#game-stage'),container=document.querySelector('#game-container'),statusText=document.querySelector('#load-status'),reload=document.querySelector('#reload-game'),full=document.querySelector('#fullscreen');
let timeout;
function loadGame(){clearTimeout(timeout);const iframe=document.createElement('iframe');iframe.src=gameURL;iframe.title='你說對不隊！黎明 RGB 小旅行';iframe.allow='fullscreen; autoplay';iframe.allowFullscreen=true;iframe.referrerPolicy='strict-origin-when-cross-origin';statusText.textContent='正在載入遊戲…';reload.hidden=false;iframe.addEventListener('load',()=>{clearTimeout(timeout);statusText.textContent='遊戲框架已載入。若畫面空白，請按「重新載入」或「另開遊戲」。'});iframe.addEventListener('error',()=>{clearTimeout(timeout);statusText.textContent='遊戲暫時無法載入，請使用「另開遊戲」確認原站狀態。'});container.replaceChildren(iframe);timeout=setTimeout(()=>{statusText.textContent='遊戲載入較久；你可以稍候、重新載入，或另開遊戲。'},16000);iframe.focus();stage.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth',block:'start'})}
document.querySelector('#load-game').onclick=loadGame;reload.onclick=loadGame;
full.onclick=async()=>{try{if(document.fullscreenElement){await document.exitFullscreen()}else if(stage.requestFullscreen){await stage.requestFullscreen()}else{window.open(gameURL,'_blank','noopener,noreferrer')}}catch{statusText.textContent='此瀏覽器不支援全螢幕；可點「另開遊戲」使用完整頁面。'}};
document.addEventListener('fullscreenchange',()=>{full.textContent=document.fullscreenElement?'離開全螢幕 ↙':'全螢幕 ↗'});
const film=document.querySelector('#feature-film'),play=document.querySelector('#play-film'),filmStatus=document.querySelector('#film-status');
play.onclick=async()=>{try{await film.play();filmStatus.textContent='影片播放中。看完後，帶著小隊走進村落。';film.scrollIntoView({behavior:'smooth',block:'center'})}catch{filmStatus.textContent='請直接點影片上的播放鍵，或使用「另開影片」。'}};
film.addEventListener('ended',()=>{filmStatus.textContent='故事看完了！往下點「出發，去散步」，換你走進村落。'});
film.addEventListener('error',()=>{filmStatus.textContent='影片暫時無法播放，請重新整理或點「另開影片」。'});
document.querySelector('#load-game').addEventListener('click',()=>film.pause());
document.addEventListener('visibilitychange',()=>{if(document.hidden)film.pause()});
