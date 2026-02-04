setInterval(() => {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  hrotation = 30 * htime + mtime / 2 + stime/120;
  mrotation = 6 * mtime + stime/10;
  srotation = 6 * stime;

  document.getElementById("hour").style.transform = `rotate(${hrotation}deg)`;
  document.getElementById("minute").style.transform = `rotate(${mrotation}deg)`;
  document.getElementById("second").style.transform = `rotate(${srotation}deg)`;
}, 1000);
