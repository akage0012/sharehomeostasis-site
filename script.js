document.addEventListener('DOMContentLoaded', () => {
  const thumbs = document.querySelectorAll('.chara-thumb');
  
  // 7人分のキャラクターデータ
  const charaData = [
    {
      name: "ヒロイン",
      standImg: "images/hiroin3.PNG",
      page: "hiroin.html",
      voice: "「みんなが笑って過ごせるなら、私、どんなことでも頑張れるよ。」",
      desc: "柔らかく心優しい大学生。自分のことよりも周囲の平和や他人の幸せを優先し、個性豊かな住人たちの痛みに寄り添いながらハウスのバランスを保とうと奮闘する。"
    },
    {
      name: "セロトニン",
      standImg: "images/serotoninAs.PNG",
      page: "serotonin.html",
      voice: "「今日も穏やかに過ごせているか？ 無理は禁物だ」",
      desc: "精神の安定を司る、穏やかで包容力のある青年。日々の生活リズムを整えることが好きで、主人公のことも優しく気遣ってくれる。"
    },
    {
      name: "コルチゾール",
      standImg: "images/IMG_3892.jpg",
      page: "cortisol.html",
      voice: "「……また無理をしてるのか。お前は少し休むことを覚えたほうがいい」",
      desc: "防衛反応やストレスを司る、少し神経質で警戒心が強い青年。鋭い観察眼を持ち、ハウスの危機を人一倍気にかけている。"
    },
    {
      name: "オキシトシン",
      standImg: "images/IMG_3886.JPG",
      page: "oxytocin.html",
      voice: "「ねえ、もっとこっちに来てよ。温もりを分け合えば、嫌なことも忘れられるから」",
      desc: "愛情や信頼感を司る、人懐っこくスキンシップが多めの青年。誰よりも人との繋がりを大切にし、寂しがり屋な一面を持つ。"
    },
    {
      name: "アドレナリン",
      standImg: "images/IMG_3888.jpg",
      page: "adrenaline.html",
      voice: "「面白い、やってやろうじゃないか！ 燃えてきたぜ！」",
      desc: "興奮や闘争心を司る、エネルギッシュで情熱的な青年。スリルや挑戦を好み、いつも周囲を引っ張っていくムードメーカー。"
    },
    {
      name: "ドーパミン",
      standImg: "images/IMG_3889.jpg",
      page: "dopamine.html",
      voice: "「もっとワクワクする最高のこと、始めようよ！ 絶対に後悔させないからさ」",
      desc: "快楽や報酬系を司る、好奇心旺盛でチャーミングな青年。楽しいことや新しい刺激が大好きで、いつも面白い企みを探している。"
    },
    {
      name: "ノルアドレナリン",
      standImg: "images/IMG_3890.jpg",
      page: "noradrenaline.html",
      voice: "「油断するな、いつ何が起きるかわからない。常に気を引き締めておけ」",
      desc: "緊張や集中を司る、クールでストイックな青年。強い責任感を抱いており、どんな状況でも冷静に状況判断を下す。"
    }
  ];

  const charaStandImg = document.getElementById('charaStandImg');
  const charaName = document.getElementById('charaName');
  const charaVoice = document.getElementById('charaVoice');
  const charaDesc = document.getElementById('charaDesc');
  const charaLinkStand = document.getElementById('charaLinkStand');
  const charaDetailBtn = document.getElementById('charaDetailBtn');

  thumbs.forEach((thumb) => {
    thumb.addEventListener('click', (e) => {
      // プレビュー切り替えのために一時的にデフォルトのページ遷移を抑止する場合は以下を有効化できますが、
      // 今回は「押したらそのまま個別ページへ飛ぶ」仕様のため、サムネイル画像や名前以外の場所をクリックしたときのプレビュー連動として機能します。
    });

    // マウスオーバーまたはクリックで下の解説を連動させる場合
    thumb.addEventListener('mouseenter', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');

      const index = thumb.getAttribute('data-index');
      if (charaData[index]) {
        charaStandImg.src = charaData[index].standImg;
        charaName.textContent = charaData[index].name;
        charaVoice.textContent = charaData[index].voice;
        charaDesc.innerHTML = charaData[index].desc;
        charaLinkStand.href = charaData[index].page;
        charaDetailBtn.href = charaData[index].page;
      }
    });
  });

  // 左右スライダーボタンのスクロール処理（7人分を横並びスクロール）
  const thumbnailContainer = document.querySelector('.chara-thumbnails');
  const prevBtn = document.querySelector('.slider-arrow.prev');
  const nextBtn = document.querySelector('.slider-arrow.next');

  if (nextBtn && prevBtn && thumbnailContainer) {
    nextBtn.addEventListener('click', () => {
      thumbnailContainer.scrollBy({ left: 150, behavior: 'smooth' });
    });
    prevBtn.addEventListener('click', () => {
      thumbnailContainer.scrollBy({ left: -150, behavior: 'smooth' });
    });
  }
});
