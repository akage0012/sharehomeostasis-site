document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. スマホ向け ハンバーガーメニュー制御
  // ==========================================
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const siteNav = document.getElementById('siteNav');
  const navLinks = siteNav.querySelectorAll('a');

  hamburgerBtn.addEventListener('click', () => {
    siteNav.classList.toggle('active');
  });

  // メニュー内のリンクをクリックした際にナビゲーションを閉じる
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('active');
    });
  });

  // ==========================================
  // 2. CHARACTER セクション サムネイル切り替え
  // ==========================================
  const thumbs = document.querySelectorAll('.chara-thumb');
  
  // ダミーのキャラクターデータ（選択用）
  const charaData = [
    {
      standImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
      logoImg: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=300&q=80',
      text: '「俺のそばから離れないでくれ。君の香りだけが、俺の心を安らげてくれるんだ……」<br><br>ミステリアスで気品溢れる第一貴公子。一見冷徹に見えるが、心を許した相手には深い執着と情愛を見せる。'
    },
    {
      standImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
      logoImg: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=300&q=80',
      text: '「やあ、可愛らしい小鳥さん。僕の庭へようこそ。一緒に甘いお茶でもいかが？」<br><br>明るく社交的で誰にでも優しい第二貴公子。しかし、その笑顔の裏には誰にも明かさない秘密が隠されている。'
    },
    {
      standImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
      logoImg: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=300&q=80',
      text: '「勘違いするな。お前のことなんてこれっぽっちも…いや、何でもない。あっちに行け！」<br><br>ツンデレな年下の騎士。不器用で素直になれないが、危険が迫った時は一番に駆けつけて守ってくれる。'
    }
  ];

  const standImage = document.querySelector('.chara-stand img');
  const logoImage = document.querySelector('.chara-logo img');
  const charaText = document.querySelector('.chara-text');

  thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      // アクティブクラス切り替え
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');

      // 内容差し替え
      if (charaData[index]) {
        standImage.src = charaData[index].standImg;
        logoImage.src = charaData[index].logoImg;
        charaText.innerHTML = charaData[index].text;
      }
    });
  });

  // ==========================================
  // 3. Lightbox2 オプション設定
  // ==========================================
  if (typeof lightbox !== 'undefined') {
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'albumLabel': "Image %1 of %2",
      'fadeDuration': 300
    });
  }
});