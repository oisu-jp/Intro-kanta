document.addEventListener('DOMContentLoaded', () => {
  // セレクタをテキスト、画像、スクロールマークに広げる
  const targets = document.querySelectorAll('.top-space p, .js-fade, .scroll-en');

  const observerOptions = {
    root: null,
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 全体の開始を2000ms(2秒)遅らせる
        const baseDelay = 2000; 

        // 全対象（テキスト、画像、スクロールマーク）を順番に出現させる
        targets.forEach((target, index) => {
          setTimeout(() => {
            target.classList.add('is-visible');
          }, baseDelay + (index * 400)); // 2秒後から、0.4秒刻みで出現
        });

        // 一度発火したら監視を終了
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  targets.forEach(target => observer.observe(target));
});



document.addEventListener('DOMContentLoaded', function() {
    const checkBtn = document.getElementById('check-btn');
    
    if (checkBtn) {
        checkBtn.addEventListener('click', function() {
            // 入力された値を取得（空白を削除）
            const a1 = document.getElementById('ans1').value.trim();
            const a2 = document.getElementById('ans2').value.trim();
            const a3 = document.getElementById('ans3').value.trim();

            // 正解の設定
            const correct1 = "カレー";
            const correct2 = "シロ";
            const correct3 = "オットセイ";

            // 全て正解かチェック
            if (a1 === correct1 && a2 === correct2 && a3 === correct3) {
                // 正解時の処理
                alert("正解！");
                // クリア後のページへ飛ばす場合は以下を書き換えてください
                window.location.href = "nazo.html"; 
            } else {
                // 不正解時の処理
                const errorMsg = document.getElementById('error-msg');
                if (errorMsg) {
                    errorMsg.style.display = 'block';
                }
                
                // ボタンを少し震えさせる演出（オプション）
                checkBtn.style.backgroundColor = '#ff4d4d';
                setTimeout(() => {
                    checkBtn.style.backgroundColor = ''; // CSSの元の色に戻す
                }, 500);
            }
        });
    }
});