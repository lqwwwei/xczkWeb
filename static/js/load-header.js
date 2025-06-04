// 加载公共头部
function loadHeader() {
  fetch('/static/partials/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
      setActiveNav(); // 设置当前页导航高亮
    });
}

// 设置活动导航样式
function setActiveNav() {
  const currentPath = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav li a').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
}

// 页面加载时执行
window.onload = loadHeader;