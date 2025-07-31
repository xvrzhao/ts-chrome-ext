function pad(num) {
  return num < 10 ? '0' + num : num.toString();
}

function formatDate(date) {
  return date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate()) + ' '
    + pad(date.getHours()) + ':' + pad(date.getMinutes()) + ':' + pad(date.getSeconds());
}

function parseTimestamp(input) {
  if (!/^-?\d+$/.test(input)) return null;
  var ts = Number(input);
  if (input.length <= 10) {
    // 10位及以下，视为秒级
    ts *= 1000;
  }
  // 13位及以上，视为毫秒级
  return ts;
}

function updateTimes() {
  var input = document.getElementById('timestamp-input').value.trim();
  var localSpan = document.getElementById('local-time');
  var utcSpan = document.getElementById('utc-time');
  if (!input) {
    localSpan.textContent = '';
    utcSpan.textContent = '';
    return;
  }
  var ts = parseTimestamp(input);
  if (ts === null || isNaN(ts)) {
    localSpan.textContent = '无效时间戳';
    utcSpan.textContent = '无效时间戳';
    return;
  }
  var date = new Date(ts);
  localSpan.textContent = formatDate(date);
  utcSpan.textContent = formatDate(new Date(date.getTime() + date.getTimezoneOffset() * 60000));
}

function copyText(text) {
  navigator.clipboard.writeText(text);
}

document.addEventListener('DOMContentLoaded', function() {
  var input = document.getElementById('timestamp-input');
  var localBtn = document.getElementById('copy-local');
  var utcBtn = document.getElementById('copy-utc');
  var currentBtn = document.getElementById('copy-current');
  var localSpan = document.getElementById('local-time');
  var utcSpan = document.getElementById('utc-time');
  var currentSpan = document.getElementById('current-timestamp');

  // 实时更新时间戳
  function updateCurrent() {
    currentSpan.textContent = Date.now().toString();
  }
  updateCurrent();
  setInterval(updateCurrent, 1000);

//   // 新增：每次打开时输入框展示当前时间戳，并自动触发展示
//   var now = Date.now().toString();
//   input.value = now;
//   updateTimes();

  input.addEventListener('input', updateTimes);

  localBtn.addEventListener('click', function() {
    if (localSpan.textContent) copyText(localSpan.textContent);
  });
  utcBtn.addEventListener('click', function() {
    if (utcSpan.textContent) copyText(utcSpan.textContent);
  });
  currentBtn.addEventListener('click', function() {
    if (currentSpan.textContent) copyText(currentSpan.textContent);
  });
});
