const reciters = {
  "Abdul Basit": "https://server7.mp3quran.net/basit/",
  "Abdul Rahman Al-Sudais":"https://server11.mp3quran.net/sds/",
  "Maher Al-Muaiqly":"https://server12.mp3quran.net/maher/",
  "Mishary Rashid Alafasy":"https://server8.mp3quran.net/afs/",
  "Mohammed Siddiq Al-Minshawi":"https://server10.mp3quran.net/minsh/",
  "Mustafa Ismail":"https://server8.mp3quran.net/mustafa/Almusshaf-Al-Mojawwad/",
  "Saad Al-Ghamdi":"https://server7.mp3quran.net/s_gmd/",
  "Yasser Al-Dossari": "https://server11.mp3quran.net/yasser/",
};

function loadReciterDropdown() {
  const container = document.getElementById("reciterDropdown");
  if (!container) return;

  let html = `
    <div style="margin:20px; text-align:center;">
      <label style="color:white; font-size:120%;"><b>Select Reciter</b></label>
      <select id="reciterSelect" onchange="changeReciter()" 
              style="padding:8px; margin-left:10px; border-radius:5px;">
  `;

  for (const name in reciters) {
    html += `<option value="${reciters[name]}">${name}</option>`;
  }

  html += `</select></div>`;

  container.innerHTML = html;
}

function changeReciter() {
  const audio = document.getElementById("audioPlayer");
  const source = document.getElementById("audioSource");
  const dropdown = document.getElementById("reciterSelect");

  const surahNumber = window.location.pathname.match(/(\d+)\.html/)[1];

  source.src = dropdown.value + surahNumber.padStart(3, "0") + ".mp3";
  audio.load();
  audio.play();
}

window.onload = loadReciterDropdown;