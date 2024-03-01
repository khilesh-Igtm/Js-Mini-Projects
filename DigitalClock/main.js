function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // Convert hours to 12-hour format

  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  document.getElementById('time').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

setInterval(updateTime, 1000);



// String(now.getHours()).padStart(2, '0') ensures that the hours portion of the time is always represented by at least two digits. If the hour is a single digit (like 1, 2, 3, etc.), it pads a '0' to the left of it to make it two digits (01, 02, 03, etc.).
// used inside setInterval bcz this will update after every 1 sec