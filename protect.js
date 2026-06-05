/* ============================================
   protect.js — 画像保護スクリプト
   全ページ共通で読み込む
   ============================================ */

(function () {

  /* 1) 右クリック禁止（画像・画像コンテナ上のみ） */
  document.addEventListener('contextmenu', function (e) {
    if (
      e.target.tagName === 'IMG' ||
      e.target.closest(
        '.hero-slideshow, .home-work-thumb, .work-thumb, .work-detail-img, .gallery-item'
      )
    ) {
      e.preventDefault();
    }
  });

  /* 2) ドラッグ禁止 */
  document.addEventListener('dragstart', function (e) {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
    }
  });

  /* 3) キーボードショートカット制限
        Ctrl+S（保存）、Ctrl+U（ソース表示）を無効化 */
  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && /^[suSU]$/.test(e.key)) {
      e.preventDefault();
    }
  });

  /* 4) iOS長押しメニュー禁止（touchstartで補強） */
  document.querySelectorAll('img').forEach(function (img) {
    img.addEventListener('touchstart', function (e) {
      e.target.style.webkitTouchCallout = 'none';
    });
  });

    /* 5) 開発者ツール抑止（PrintScreen以外のF12等） */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'F12') {
      e.preventDefault();
    }
  });

})();