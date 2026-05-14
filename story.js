const STORY = {
  nodes: {

    /* ══════════════════════════════
       CHAPTER 1 ― 依頼
    ══════════════════════════════ */
    'start': {
      scene: 'bg-office', left: null, right: null, speaking: null,
      name: '',
      text: '二〇二三年十月。東京・荻窪、雑居ビルの四階。\n「KAGAMI怪異調査事務所」——擦れた表札が、夜の廊下に浮かんでいた。',
      next: 'c1_02'
    },
    'c1_02': {
      scene: 'bg-office', left: null, right: null, speaking: null,
      name: '',
      text: '夜の九時を回っても、香田春樹はひとり事務所に残っていた。\n積み上げた書類の山、灰皿の吸い殻、冷めたコーヒー。\n荻窪の街灯が、曇りガラスの向こうに滲んでいる。',
      next: 'c1_03'
    },
    'c1_03': {
      scene: 'bg-office', left: 'koda', right: null, speaking: null,
      name: '',
      text: '警察官を七年やった後、退職。\n「都市伝説専門の調査員」などと名乗っても笑われるだけだが——それしかできなかった。\nというより、それしかやりたくなかった。',
      next: 'c1_04'
    },
    'c1_04': {
      scene: 'bg-office', left: 'koda', right: null, speaking: null,
      name: '',
      text: 'ノックの音。ドアを開けると、廊下には誰もいない。\n足元に一枚の茶封筒が落ちていた。\n差出人の名前は、ない。',
      next: 'c1_05'
    },
    'c1_05': {
      scene: 'bg-office', left: 'koda', right: null, speaking: null,
      name: '',
      text: '封筒の中身——調査レポートと、若い女性の写真。\n渡辺美咲、十九歳。武蔵野大学一年生。\n三日前の夜、荻窪のアパートから忽然と消えた。',
      next: 'c1_06'
    },
    'c1_06': {
      scene: 'bg-office', left: 'koda', right: null, speaking: null,
      name: '',
      text: 'レポートに添付された警察の初動メモ。\n「失踪当夜、室内への侵入痕跡なし。\n　ただし部屋中の鏡が全て割れていた——割れ方は、内側から」',
      next: 'c1_07'
    },
    'c1_07': {
      scene: 'bg-office', left: 'koda', right: null, speaking: 'left',
      name: '香田',
      text: '……内側から。',
      next: 'c1_08'
    },
    'c1_08': {
      scene: 'bg-office', left: 'koda', right: null, speaking: null,
      name: '',
      text: '美咲のSNSのスクリーンショットも同封されていた。\n失踪四日前の投稿——「引っ越し先のクローゼットに古い鏡があった。なんか怖い」',
      next: 'c1_09'
    },
    'c1_09': {
      scene: 'bg-office', left: 'koda', right: null, speaking: null,
      name: '',
      text: '失踪二日前——「鏡を見ると、自分の動きに少しだけ遅れて何かが動く。気のせいだと思う」\n失踪前日——「鏡の中に誰かいる。でも捨てられない。なぜか、捨てられない」',
      next: 'c1_10'
    },
    'c1_10': {
      scene: 'bg-office', left: 'koda', right: null, speaking: null,
      name: '',
      text: '香田は書棚から古いファイルを取り出した。\n都内で起きた若者の失踪事件——過去十年で五件。\nその全てに共通する記録：「室内の鏡が割れていた」',
      next: 'c1_11'
    },
    'c1_11': {
      scene: 'bg-office', left: 'koda', right: null, speaking: 'left',
      name: '香田',
      text: '一件目、二〇一三年。二件目、二〇一五年。三件目、二〇一八年。\n四件目、二〇二一年。そして今回、五件目。\nすべて未解決。すべて、同じ痕跡。',
      next: 'c1_12'
    },
    'c1_12': {
      scene: 'bg-office', left: 'koda', right: null, speaking: null,
      name: '',
      text: '煙草に火をつけ、窓の外を眺める。\n荻窪の夜景。どこかのアパートに、今も同じ鏡が誰かを映しているかもしれない。\nそう考えると——手が止まらなかった。',
      next: 'c1_choice'
    },
    'c1_choice': {
      scene: 'bg-office', left: 'koda', right: null, speaking: null,
      name: '',
      text: 'まず現場を見るべきか。それとも先に情報を集めるべきか。\n——どちらにせよ、今夜中に動かなければならない。',
      choices: [
        { label: '現場のアパートへ直行する', goto: 'c2_direct' },
        { label: 'まず過去事件を徹底的に調べる', goto: 'c2_info' },
      ]
    },

    /* ══════════════════════════════
       CHAPTER 2A ― 現場
    ══════════════════════════════ */
    'c2_direct': {
      scene: 'bg-apartment', left: null, right: null, speaking: null,
      name: '',
      text: '荻窪駅から徒歩七分。\n「菊花荘」——昭和五十年代に建てられた三階建て。\n壁の塗装が剥がれ、外階段は錆びている。',
      next: 'c2_02'
    },
    'c2_02': {
      scene: 'bg-apartment', left: null, right: null, speaking: null,
      name: '',
      text: '一階の管理人室。老人の田中から話を聞く。\n美咲は去年の四月に越してきた。大人しい子で、たまに友人も来た。\nある朝、部屋の前に鍵が落ちていて、扉を開けると姿がなかった。',
      next: 'c2_03'
    },
    'c2_03': {
      scene: 'bg-apartment', left: 'koda', right: null, speaking: 'left',
      name: '香田',
      text: '鍵が、外に。つまり最後に鍵を使ったのは美咲本人——\nそれとも、美咲が「出された」か。',
      next: 'c2_04'
    },
    'c2_04': {
      scene: 'bg-apartment', left: 'koda', right: null, speaking: null,
      name: '',
      text: '三階の廊下。三〇一号室のドアの前に造花が供えてあった。\n白と黄色のガーベラ——枯れかけているが、誰かが最近世話をしている。',
      next: 'c2_05'
    },
    'c2_05': {
      scene: 'bg-room', left: 'koda', right: null, speaking: null,
      name: '',
      text: '三〇二号室のドアを開けると、黴と鉄が混じった異臭。\n窓のカーテンは半分引かれ、薄い採光だけが差し込む。\n床が——光っていた。',
      next: 'c2_06'
    },
    'c2_06': {
      scene: 'bg-room', left: 'koda', right: null, speaking: null,
      name: '',
      text: '床一面に、鏡の破片。\n壁掛け鏡、手鏡、洗面台の鏡、コンパクトの鏡。\n形のあるものは全て、粉砕されていた。',
      next: 'c2_07'
    },
    'c2_07': {
      scene: 'bg-room', left: 'koda', right: null, speaking: 'left',
      name: '香田',
      text: 'ハンマーで割った跡がない。壁や床に叩きつけた形跡もない。\nすべて——内側から割れている。',
      next: 'c2_08'
    },
    'c2_08': {
      scene: 'bg-room', left: 'koda', right: null, speaking: null,
      name: '',
      text: '破片を一枚拾い上げる。縁が内側に丸まっていた。\nまるで何かが内部から押し広げたような——そんな割れ方。',
      next: 'c2_09'
    },
    'c2_09': {
      scene: 'bg-room', left: 'koda', right: null, speaking: null,
      name: '',
      text: '本棚の前で立ち止まる。一冊のノートが斜めに挿さっていた。\n表紙に「日記」と書かれている。',
      next: 'c2_10'
    },
    'c2_10': {
      scene: 'bg-room', left: 'koda', right: null, speaking: null,
      name: '日記',
      text: '「十月三日。クローゼットの古い鏡、どうも気になる。\n　売ろうとしたら手が止まった。何かに引き留められているみたいで」',
      next: 'c2_11'
    },
    'c2_11': {
      scene: 'bg-room', left: 'koda', right: null, speaking: null,
      name: '日記',
      text: '「十月六日。鏡の中の自分が、少しだけ遅れて動く。\n　ほんの少し——でも確かに。見間違いじゃない」',
      next: 'c2_12'
    },
    'c2_12': {
      scene: 'bg-room', left: 'koda', right: null, speaking: null,
      name: '日記',
      text: '「十月八日。鏡の中に、別の顔が見えた。\n　自分じゃない女の顔。笑っていた。私を待っているみたいに、笑っていた」',
      next: 'c2_13'
    },
    'c2_13': {
      scene: 'bg-room', left: 'koda', right: null, speaking: null,
      name: '日記',
      text: '「十月十日。怖い。でも鏡を見ずにはいられない。\n　布で覆っても、朝には布がずれている。鏡が——」\n\n——そこで日記は途切れていた。',
      next: 'c2_14'
    },
    'c2_14': {
      scene: 'bg-room', left: 'koda', right: null, speaking: 'left',
      name: '香田',
      text: '十月十日。失踪したのは十月十二日の夜。\nあと二日、何かが続いた。',
      next: 'c2_yui_enter'
    },
    'c2_yui_enter': {
      scene: 'bg-room', left: 'koda', right: 'yui', speaking: null,
      name: '',
      text: 'ドアの向こうに足音。振り返ると廊下に若い女が立っていた。\n顔が青ざめ、目の下に深い隈がある。\n手が、微かに震えていた。',
      next: 'c2_15'
    },
    'c2_15': {
      scene: 'bg-room', left: 'koda', right: 'yui', speaking: 'right',
      name: '朝比奈',
      text: 'あの……管理人さんに誰か来てると聞いて。\n私、隣の三〇一号の朝比奈といいます。\n美咲ちゃんの、友達です。',
      next: 'c2_16'
    },
    'c2_16': {
      scene: 'bg-room', left: 'koda', right: 'yui', speaking: 'left',
      name: '香田',
      text: '調査員の香田です。失踪前夜のことを教えてもらえますか。\n音や光で、気になったことがあれば。',
      next: 'c2_17'
    },
    'c2_17': {
      scene: 'bg-room', left: 'koda', right: 'yui', speaking: 'right',
      name: '朝比奈',
      text: '夜の十一時ごろ、ガラスが割れる音がして。\n一回じゃなくて……七回か八回、続けて。\n叫び声は、なかったんです。',
      next: 'c2_18'
    },
    'c2_18': {
      scene: 'bg-room', left: 'koda', right: 'yui', speaking: 'right',
      name: '朝比奈',
      text: 'ドアに近づいたら、隙間から光が見えて。\n——赤い光でした。血みたいな、深い赤。\n一、二分続いて、それから消えた。',
      next: 'c2_19'
    },
    'c2_19': {
      scene: 'bg-room', left: 'koda', right: 'yui', speaking: 'left',
      name: '香田',
      text: 'ドアを開けなかった？',
      next: 'c2_20'
    },
    'c2_20': {
      scene: 'bg-room', left: 'koda', right: 'yui', speaking: 'right',
      name: '朝比奈',
      text: 'ノックしました。でも返事がなくて……あの光が怖くて、開けられなかった。\nそのまま朝になって、美咲ちゃんは——いなかった。',
      next: 'c2_21'
    },
    'c2_21': {
      scene: 'bg-room', left: 'koda', right: 'yui', speaking: null,
      name: '',
      text: '朝比奈唯が唇を噛む。声は平静を保っているが、あの夜から眠れていないのが見て取れた。',
      next: 'c2_22'
    },
    'c2_22': {
      scene: 'bg-room', left: 'koda', right: 'yui', speaking: 'right',
      name: '朝比奈',
      text: '……昨晩も、赤い光が見えました。美咲ちゃんのドアの下から。\n空き部屋のはずなのに。鍵は管理人さんが持ってるはずなのに。',
      next: 'c2_23'
    },
    'c2_23': {
      scene: 'bg-room', left: 'koda', right: 'yui', speaking: 'left',
      name: '香田',
      text: '昨晩も——つまり美咲さんが消えてから三日後も、まだここに何かいる。',
      next: 'c2_mirror_found'
    },
    'c2_mirror_found': {
      scene: 'bg-room', left: 'koda', right: null, speaking: null,
      name: '',
      text: 'クローゼットの扉を開けると、衣類の奥に——\n一枚だけ、割れていない鏡があった。\n黒い木枠の古鏡。縦六十センチほど。',
      next: 'c2_24'
    },
    'c2_24': {
      scene: 'bg-room', left: 'koda', right: null, speaking: null,
      name: '',
      text: '木枠には蓮の花と、見慣れない獣の彫刻。\n表面は——異様なほど澄んでいた。\nここだけ、空気が違う。',
      next: 'c2_25'
    },
    'c2_25': {
      scene: 'bg-room', left: 'koda', right: null, speaking: 'left',
      name: '香田',
      text: 'これだけ割れていない。\n——いや。これが「本体」だ。',
      next: 'c2_26'
    },
    'c2_26': {
      scene: 'bg-room', left: 'koda', right: null, speaking: null,
      name: '',
      text: '鏡を手に取ると、表面に指の跡がついていた。\n外から触れた形ではない——\nガラスの内側から、誰かが押した跡だった。',
      next: 'c2_mirror_choice'
    },
    'c2_mirror_choice': {
      scene: 'bg-room', left: 'koda', right: null, speaking: null,
      name: '',
      text: '香田は鏡を持ち直し、判断を迫られた。\nこの鏡そのものを調べるか。それとも出所を辿るか。',
      choices: [
        { label: '鏡を丹念に調べる', goto: 'c3_mirror_examine' },
        { label: '図書館で鏡の伝承を調べる', goto: 'c3_library' },
      ]
    },

    /* ══════════════════════════════
       CHAPTER 2B ― 情報収集
    ══════════════════════════════ */
    'c2_info': {
      scene: 'bg-office', left: 'koda', right: null, speaking: null,
      name: '',
      text: '先に情報を集める。\n香田は過去五件の失踪事件の資料を広げ、一つ一つ照合を始めた。',
      next: 'c2_info_02'
    },
    'c2_info_02': {
      scene: 'bg-office', left: 'koda', right: null, speaking: null,
      name: '',
      text: '五件全ての共通点——\n①独居の若者（十八〜二十四歳）\n②失踪前に「鏡が気になる」という言動\n③現場の鏡が全て内側から割れていた',
      next: 'c2_info_03'
    },
    'c2_info_03': {
      scene: 'bg-office', left: 'koda', right: null, speaking: null,
      name: '',
      text: 'さらに——五件全てで「割れていない古鏡が一枚だけ残されていた」という記録があった。\n警察はそれを押収したが、その後の記録が途絶えていた。',
      next: 'c2_info_04'
    },
    'c2_info_04': {
      scene: 'bg-office', left: 'koda', right: null, speaking: 'left',
      name: '香田',
      text: '押収した鏡が行方不明。\n警察の記録にない——保管中に「消えた」？',
      next: 'c2_info_05'
    },
    'c2_info_05': {
      scene: 'bg-office', left: 'koda', right: null, speaking: null,
      name: '',
      text: '二件目、二〇一五年の資料にわずかな記録。\n「被害者は失踪一週間前、荻窪の骨董市で古鏡を購入したと友人に語っている」',
      next: 'c2_info_06'
    },
    'c2_info_06': {
      scene: 'bg-office', left: 'koda', right: null, speaking: 'left',
      name: '香田',
      text: '全員が、どこかで同じ鏡を手に入れた。\n同じ鏡が人の手を渡り歩いている——そう考えると辻褄が合う。',
      next: 'c2_info_07'
    },
    'c2_info_07': {
      scene: 'bg-office', left: 'koda', right: null, speaking: null,
      name: '',
      text: '夜が明けた。現場を見なければ話にならない。\n香田は資料を鞄に入れ、菊花荘へと向かった。',
      next: 'c2_02'
    },

    /* ══════════════════════════════
       CHAPTER 3A ― 鏡を調べる
    ══════════════════════════════ */
    'c3_mirror_examine': {
      scene: 'bg-mirror', left: 'koda', right: null, speaking: null,
      name: '',
      text: '蛍光灯の下で鏡を細部まで見る。\n表面——傷一つない。製造年を示す刻印もない。\n市販品ではない。',
      next: 'c3_me_02'
    },
    'c3_me_02': {
      scene: 'bg-mirror', left: 'koda', right: null, speaking: null,
      name: '',
      text: '裏板を外すと、木の内側に文字が刻まれていた。\n細く丁寧な楷書で——\n「見るな。されど見てしまう者へ。汝の影に気をつけよ」',
      next: 'c3_me_03'
    },
    'c3_me_03': {
      scene: 'bg-mirror', left: 'koda', right: null, speaking: 'left',
      name: '香田',
      text: '警告か、呪文か。\nいずれにせよ——これを書いた人間は、この鏡が何かを知っていた。',
      next: 'c3_me_04'
    },
    'c3_me_04': {
      scene: 'bg-mirror', left: 'koda', right: null, speaking: null,
      name: '',
      text: '鏡を自分の方へ向ける。表面に香田の顔が映る。普通に映る。\nだが——',
      next: 'c3_me_05'
    },
    'c3_me_05': {
      scene: 'bg-mirror', left: 'koda', right: null, speaking: null,
      name: '',
      text: '映った自分の影が、一瞬遅れた。\nコンマ数秒。しかし確かに——\n香田の体が動いた後、影だけが少し遅れて追いかけてきた。',
      next: 'c3_me_06'
    },
    'c3_me_06': {
      scene: 'bg-mirror', left: 'koda', right: null, speaking: 'left',
      name: '香田',
      text: '……これが、美咲が感じたものか。',
      next: 'c3_me_07'
    },
    'c3_me_07': {
      scene: 'bg-mirror', left: 'koda', right: null, speaking: null,
      name: '',
      text: '鏡を床に置いた瞬間、部屋の温度が下がった。\n呼気が白くなる。窓は閉まっている。',
      next: 'c3_me_08'
    },
    'c3_me_08': {
      scene: 'bg-mirror', left: 'koda', right: null, speaking: null,
      name: '',
      text: '鏡の表面が——わずかに波打った。\nそして香田の後ろに、何かが見えた。\n人の形をした、影。',
      next: 'c3_me_09'
    },
    'c3_me_09': {
      scene: 'bg-mirror', left: 'koda', right: null, speaking: 'left',
      name: '香田',
      text: '——ッ！',
      next: 'c3_me_10'
    },
    'c3_me_10': {
      scene: 'bg-mirror', left: 'koda', right: null, speaking: null,
      name: '',
      text: '振り返ると、何もいない。\nだが香田の足元の影が——鏡に向かって伸びていた。\n引っ張られているように。',
      next: 'c3_me_11'
    },
    'c3_me_11': {
      scene: 'bg-mirror', left: 'koda', right: null, speaking: 'left',
      name: '香田',
      text: 'これ以上ここにいるのは危険だ。\nこの鏡の正体を調べなければ。',
      next: 'c3_me_branch'
    },
    'c3_me_branch': {
      scene: 'bg-room', left: 'koda', right: null, speaking: null,
      name: '',
      text: '鏡を鞄に入れ、部屋を出る。\n図書館で伝承を調べるか、骨董商を当たるか。',
      choices: [
        { label: '図書館で鏡の伝承を調べる', goto: 'c3_library' },
        { label: '骨董屋「浅野堂」を訪ねる', goto: 'c3_antique' },
      ]
    },

    /* ══════════════════════════════
       CHAPTER 3B ― 図書館
    ══════════════════════════════ */
    'c3_library': {
      scene: 'bg-library', left: 'koda', right: null, speaking: null,
      name: '',
      text: '荻窪区立図書館の郷土史コーナー。\n平日の午後、利用者はほとんどいない。\n埃と古紙の匂いの中、香田は資料を探した。',
      next: 'c3_lib_02'
    },
    'c3_lib_02': {
      scene: 'bg-library', left: 'koda', right: null, speaking: null,
      name: '',
      text: '「鏡の怪」「影の怪異」をキーワードに検索すると、予想以上の資料が出てきた。\n明治時代から昭和初期にかけての、民俗学的記録。',
      next: 'c3_lib_03'
    },
    'c3_lib_03': {
      scene: 'bg-library', left: 'koda', right: null, speaking: null,
      name: '',
      text: '明治三十六年の記録——\n「武蔵野地方にて鏡に憑く怪、俗に《影喰い》と呼ばるるもの現れり。\n　所有者の影を少しずつ喰い、やがて影ごと人を鏡の内に引き込む」',
      next: 'c3_lib_04'
    },
    'c3_lib_04': {
      scene: 'bg-library', left: 'koda', right: null, speaking: 'left',
      name: '香田',
      text: '影喰い——「人の影を喰らう怪」か。\n日記に書いてあった「影が遅れる」という症状と一致する。',
      next: 'c3_lib_05'
    },
    'c3_lib_05': {
      scene: 'bg-library', left: 'koda', right: null, speaking: null,
      name: '',
      text: '大正七年の別の資料——\n「影喰いに憑かれし者は最終的に鏡の内なる世界に引き込まれる。\n　引き込まれた者は死ぬのではなく、生きたまま囚われる」',
      next: 'c3_lib_06'
    },
    'c3_lib_06': {
      scene: 'bg-library', left: 'koda', right: null, speaking: 'left',
      name: '香田',
      text: '生きたまま囚われる——つまり美咲は、まだ生きている。\n鏡の「内側」に。',
      next: 'c3_lib_07'
    },
    'c3_lib_07': {
      scene: 'bg-library', left: 'koda', right: null, speaking: null,
      name: '',
      text: '昭和初期の報告書——\n「鏡面夜叉を封じるには、怪が鏡に映っている間に鏡ごと焼却すること。\n　影が完全に分離した後では、封じることは不可能なり」',
      next: 'c3_lib_08'
    },
    'c3_lib_08': {
      scene: 'bg-library', left: 'koda', right: null, speaking: 'left',
      name: '香田',
      text: '鏡面夜叉——影喰いの正式な名称か。\n封じるには「鏡に映っている間」に燃やす。\nだが鏡の中の人間ごと燃やしたら——',
      next: 'c3_lib_09'
    },
    'c3_lib_09': {
      scene: 'bg-library', left: 'koda', right: null, speaking: null,
      name: '',
      text: '文書の余白に手書きの注釈があった——\n「鏡を燃やす前に囚われた者を呼び戻す方法がある。\n　しかしそれは同時に、術者自身の影を危険に晒す」',
      next: 'c3_lib_10'
    },
    'c3_lib_10': {
      scene: 'bg-library', left: 'koda', right: null, speaking: null,
      name: '',
      text: '注釈の末尾に署名——\n「浅野義孝　荻窪　浅野堂」',
      next: 'c3_lib_11'
    },
    'c3_lib_11': {
      scene: 'bg-library', left: 'koda', right: null, speaking: 'left',
      name: '香田',
      text: '浅野堂——荻窪の骨董商。\nこの文書に直接書き込みをした人間が、まだ生きているかもしれない。',
      next: 'c3_lib_12'
    },
    'c3_lib_12': {
      scene: 'bg-library', left: 'koda', right: null, speaking: null,
      name: '',
      text: '資料をコピーして鞄に入れる。\n浅野堂に行くしかない——この鏡の全てを知っている人間が、そこにいる。',
      next: 'c3_antique'
    },

    /* ══════════════════════════════
       CHAPTER 3C ― 骨董屋
    ══════════════════════════════ */
    'c3_antique': {
      scene: 'bg-antique', left: null, right: 'asano', speaking: null,
      name: '',
      text: '荻窪駅から徒歩十二分、路地の奥。\n「浅野堂」——暖簾が古びた小さな骨董屋。\n踏み込むと、古い木と線香の匂いがした。',
      next: 'c3_ant_02'
    },
    'c3_ant_02': {
      scene: 'bg-antique', left: null, right: 'asano', speaking: null,
      name: '',
      text: 'カウンターの奥に、七十代の老人が座っていた。\n黒い着物を着て、目を閉じている。\n香田が足を踏み入れると——目を開けた。',
      next: 'c3_ant_03'
    },
    'c3_ant_03': {
      scene: 'bg-antique', left: null, right: 'asano', speaking: 'right',
      name: '浅野',
      text: '……来たか。',
      next: 'c3_ant_04'
    },
    'c3_ant_04': {
      scene: 'bg-antique', left: 'koda', right: 'asano', speaking: 'left',
      name: '香田',
      text: '浅野さんですか。調査員の香田といいます。\nこの鏡について、話を聞かせてほしい。',
      next: 'c3_ant_05'
    },
    'c3_ant_05': {
      scene: 'bg-antique', left: 'koda', right: 'asano', speaking: 'right',
      name: '浅野',
      text: '……見せてみい。',
      next: 'c3_ant_06'
    },
    'c3_ant_06': {
      scene: 'bg-antique', left: 'koda', right: 'asano', speaking: null,
      name: '',
      text: '鞄から鏡を取り出し、カウンターに置く。\n浅野老人の目が細くなった。長い沈黙。',
      next: 'c3_ant_07'
    },
    'c3_ant_07': {
      scene: 'bg-antique', left: 'koda', right: 'asano', speaking: 'right',
      name: '浅野',
      text: '「鏡面夜叉」じゃ。\n江戸後期に呪術師が魂を封じ込めた、呪いの鏡。\n儂の先代が、昭和五十年代に封印したはずだった。',
      next: 'c3_ant_08'
    },
    'c3_ant_08': {
      scene: 'bg-antique', left: 'koda', right: 'asano', speaking: 'left',
      name: '香田',
      text: '封印が解けた。',
      next: 'c3_ant_09'
    },
    'c3_ant_09': {
      scene: 'bg-antique', left: 'koda', right: 'asano', speaking: 'right',
      name: '浅野',
      text: 'この鏡は十二年前に倉庫から盗まれた。\nその後、人の手を渡り歩いている。\n儂は追ってきたが——間に合わんことの方が多かった。',
      next: 'c3_ant_10'
    },
    'c3_ant_10': {
      scene: 'bg-antique', left: 'koda', right: 'asano', speaking: 'left',
      name: '香田',
      text: '五件の失踪事件——全て、この鏡が？',
      next: 'c3_ant_11'
    },
    'c3_ant_11': {
      scene: 'bg-antique', left: 'koda', right: 'asano', speaking: 'right',
      name: '浅野',
      text: '五件どころではない。\n記録に残っておるだけで十三件。\n記録のないものも含めれば——もっと多い。',
      next: 'c3_ant_12'
    },
    'c3_ant_12': {
      scene: 'bg-antique', left: 'koda', right: 'asano', speaking: 'right',
      name: '浅野',
      text: '引き込まれた者は、死なん。\n鏡の中に生きたまま囚われる。\n時が止まったような世界で——永遠に。',
      next: 'c3_ant_13'
    },
    'c3_ant_13': {
      scene: 'bg-antique', left: 'koda', right: 'asano', speaking: 'left',
      name: '香田',
      text: '取り戻せますか。まだ三日目です。',
      next: 'c3_ant_14'
    },
    'c3_ant_14': {
      scene: 'bg-antique', left: 'koda', right: 'asano', speaking: 'right',
      name: '浅野',
      text: '七日が限界じゃ。七日を過ぎると囚われた者の意識が鏡の世界に馴染み、現実に帰れなくなる。\n——まだ、間に合う。',
      next: 'c3_ant_15'
    },
    'c3_ant_15': {
      scene: 'bg-antique', left: 'koda', right: 'asano', speaking: 'left',
      name: '香田',
      text: 'どうすれば取り戻せる。',
      next: 'c3_ant_16'
    },
    'c3_ant_16': {
      scene: 'bg-antique', left: 'koda', right: 'asano', speaking: 'right',
      name: '浅野',
      text: '真夜中の丑三つ時、囚われた者がいた部屋の鏡の前に立つ。\n自分の名を三度、はっきりと呼べ。\n夜叉は「新しい獲物」と勘違いして現れる。',
      next: 'c3_ant_17'
    },
    'c3_ant_17': {
      scene: 'bg-antique', left: 'koda', right: 'asano', speaking: 'right',
      name: '浅野',
      text: '夜叉が現れた隙に、鏡の奥の囚われた者の名を呼べ。\n声が届けば、向こうから手を伸ばしてくる。\nその手をつかんで、引き戻せ。',
      next: 'c3_ant_18'
    },
    'c3_ant_18': {
      scene: 'bg-antique', left: 'koda', right: 'asano', speaking: 'left',
      name: '香田',
      text: 'その間、夜叉は術者を狙う。',
      next: 'c3_ant_19'
    },
    'c3_ant_19': {
      scene: 'bg-antique', left: 'koda', right: 'asano', speaking: 'right',
      name: '浅野',
      text: '術者の影を喰おうとする。\n影を半分以上喰われると意識が薄れる。\n全部喰われたら——お前もまた、鏡の中じゃ。',
      next: 'c3_ant_20'
    },
    'c3_ant_20': {
      scene: 'bg-antique', left: 'koda', right: 'asano', speaking: null,
      name: '',
      text: '浅野老人は引き出しから古びた御札を取り出した。\n「これを鏡に貼れ。一時的に夜叉の動きを抑える。\n　時間は短い——せいぜい一、二分じゃ」',
      next: 'c3_ant_21'
    },
    'c3_ant_21': {
      scene: 'bg-antique', left: 'koda', right: 'asano', speaking: 'right',
      name: '浅野',
      text: '儂も行ければよいが——もう歳じゃ。\nこの鏡の前には、二度と立てん。\n……息子を、この鏡で失った。',
      next: 'c3_ant_22'
    },
    'c3_ant_22': {
      scene: 'bg-antique', left: 'koda', right: 'asano', speaking: null,
      name: '',
      text: '浅野老人の目が遠くなった。長い沈黙。\nカウンターの上の御札が、風もないのにわずかに揺れた。',
      next: 'c3_ant_23'
    },
    'c3_ant_23': {
      scene: 'bg-antique', left: 'koda', right: 'asano', speaking: 'right',
      name: '浅野',
      text: '十二年前じゃ。封印を破って鏡を盗んだ組織に、息子が関わっておった。\n息子は止めようとして——喰われた。\nだから儂は、ずっと追い続けておる。',
      next: 'c3_ant_24'
    },
    'c3_ant_24': {
      scene: 'bg-antique', left: 'koda', right: 'asano', speaking: null,
      name: '',
      text: '香田は御札と手書きのメモを受け取った。\n骨董屋を出ようとしたとき——携帯が鳴った。',
      next: 'c3_ant_call'
    },
    'c3_ant_call': {
      scene: 'bg-antique', left: 'koda', right: 'yui', speaking: 'right',
      name: '朝比奈',
      text: '香田さん……美咲ちゃんの部屋に入ったら、鏡に美咲ちゃんが映っていました。\nガラスを叩いて、助けを求めてた。',
      next: 'c3_ant_call_02'
    },
    'c3_ant_call_02': {
      scene: 'bg-antique', left: 'koda', right: 'yui', speaking: 'right',
      name: '朝比奈',
      text: '「今夜が最後のチャンス」って……美咲ちゃんが言ってた。\n何かが、今夜で終わるって。',
      next: 'c3_ant_call_03'
    },
    'c3_ant_call_03': {
      scene: 'bg-antique', left: 'koda', right: 'yui', speaking: 'left',
      name: '香田',
      text: '今夜の丑三つ時に、俺が動く。\n朝比奈さん——あなたも来られますか。',
      next: 'c3_ant_call_04'
    },
    'c3_ant_call_04': {
      scene: 'bg-antique', left: 'koda', right: 'yui', speaking: 'right',
      name: '朝比奈',
      text: '行きます。美咲ちゃんのためなら——どんなことがあっても。',
      next: 'c4_01'
    },

    /* ══════════════════════════════
       CHAPTER 4 ― 決断
    ══════════════════════════════ */
    'c4_01': {
      scene: 'bg-night-street', left: 'koda', right: null, speaking: null,
      name: '',
      text: '深夜の荻窪。菊花荘まであと三分。\n空は雲に覆われ、月明かりもない。',
      next: 'c4_02'
    },
    'c4_02': {
      scene: 'bg-night-street', left: 'koda', right: null, speaking: null,
      name: '',
      text: '香田は御札を握りしめた。\n浅野の言葉が頭を反復する——\n「影を全部喰われたら、お前もまた鏡の中じゃ」',
      next: 'c4_03'
    },
    'c4_03': {
      scene: 'bg-night-street', left: 'koda', right: null, speaking: null,
      name: '',
      text: '十三件以上の失踪者。誰も取り戻せなかった。\n——だが今夜は違う。今夜は、知識がある。',
      next: 'c4_choice'
    },
    'c4_choice': {
      scene: 'bg-night-street', left: 'koda', right: null, speaking: null,
      name: '',
      text: '朝比奈唯が待っている。\n彼女を巻き込むのか。それとも——',
      choices: [
        { label: 'ひとりで鏡の前に立つ', goto: 'c5_solo_01' },
        { label: '警察に全てを話し、捜査を要請する', goto: 'c5_police_01' },
        { label: '朝比奈唯と共に立ち向かう', goto: 'c5_together_01' },
      ]
    },

    /* ══════════════════════════════
       CHAPTER 5A ― 単独対決
    ══════════════════════════════ */
    'c5_solo_01': {
      scene: 'bg-apartment', left: 'koda', right: null, speaking: null,
      name: '',
      text: '朝比奈には「俺一人でやる」とメッセージを送り、着信を切った。\n彼女を危険に晒す理由はない——これは俺の仕事だ。',
      next: 'c5_solo_02'
    },
    'c5_solo_02': {
      scene: 'bg-apartment', left: 'koda', right: null, speaking: null,
      name: '',
      text: '深夜二時、丑三つ時。\n菊花荘の廊下は静まり返っていた。\n三〇二号室のドアを開け、中に入る。',
      next: 'c5_solo_03'
    },
    'c5_solo_03': {
      scene: 'bg-room', left: 'koda', right: null, speaking: null,
      name: '',
      text: '暗い室内。足元の破片を踏まないようゆっくり奥へ進む。\nクローゼットから鏡面夜叉を取り出し、壁に立てかけた。',
      next: 'c5_solo_04'
    },
    'c5_solo_04': {
      scene: 'bg-room', left: 'koda', right: null, speaking: null,
      name: '',
      text: '懐中電灯の灯りだけで——自分の顔が映っている。\n普通に映っている。\nまだ、何もいない。',
      next: 'c5_solo_05'
    },
    'c5_solo_05': {
      scene: 'bg-room', left: 'koda', right: null, speaking: 'left',
      name: '香田',
      text: '……香田春樹。',
      next: 'c5_solo_06'
    },
    'c5_solo_06': {
      scene: 'bg-room', left: 'koda', right: null, speaking: 'left',
      name: '香田',
      text: '香田春樹。',
      next: 'c5_solo_07'
    },
    'c5_solo_07': {
      scene: 'bg-room', left: 'koda', right: null, speaking: 'left',
      name: '香田',
      text: '香田春樹。',
      next: 'c5_solo_08'
    },
    'c5_solo_08': {
      scene: 'bg-mirror', left: 'koda', right: null, speaking: null,
      name: '',
      text: '室温が急激に下がった。呼気が白くなる。\n壁の影が全て、鏡に向かって動き始めた。',
      next: 'c5_solo_09'
    },
    'c5_solo_09': {
      scene: 'bg-mirror', left: 'koda', right: null, speaking: null,
      name: '',
      text: '懐中電灯の光が揺れる。\n鏡の表面が——波打っている。まるで液体のように。',
      next: 'c5_solo_10'
    },
    'c5_solo_10': {
      scene: 'bg-mirror', left: 'koda', right: 'shadow', speaking: null,
      name: '',
      text: '鏡の中から——腕が伸びてきた。\n黒い、影のような腕。\n香田の足元の影をつかもうとしている。',
      next: 'c5_solo_11'
    },
    'c5_solo_11': {
      scene: 'bg-mirror', left: 'koda', right: 'shadow', speaking: 'right',
      name: '???',
      text: '……カガミ……カガミ……カガミ……',
      next: 'c5_solo_12'
    },
    'c5_solo_12': {
      scene: 'bg-mirror', left: 'koda', right: 'shadow', speaking: null,
      name: '',
      text: '夜叉の腕が影に触れた瞬間——足元から熱が消えた。\n影が、引っ張られている。\n意識の縁が、ほつれていく感覚。',
      next: 'c5_solo_13'
    },
    'c5_solo_13': {
      scene: 'bg-mirror', left: 'koda', right: 'shadow', speaking: 'left',
      name: '香田',
      text: '——渡辺美咲！ 聞こえるか！',
      next: 'c5_solo_14'
    },
    'c5_solo_14': {
      scene: 'bg-mirror', left: 'koda', right: 'shadow', speaking: null,
      name: '',
      text: '鏡の奥に——人の輪郭が見えた。\n小さな、女の子のような形。\nこちらを向いている。',
      next: 'c5_solo_15'
    },
    'c5_solo_15': {
      scene: 'bg-mirror', left: 'koda', right: 'shadow', speaking: null,
      name: '',
      text: '御札を取り出し、鏡に貼った。\n夜叉が断末魔のような音を上げて後退する。\nだが——影の半分がすでに喰われていた。',
      next: 'c5_solo_16'
    },
    'c5_solo_16': {
      scene: 'bg-mirror', left: 'koda', right: 'shadow', speaking: null,
      name: '',
      text: '意識が薄れ始めた。足が重い。視界が歪む。\n御札の効果は——長くて一分。',
      next: 'c5_solo_17'
    },
    'c5_solo_17': {
      scene: 'bg-mirror', left: 'koda', right: 'shadow', speaking: null,
      name: '',
      text: '鏡の奥で美咲の輪郭が動いた。手を伸ばしている。\nあと少し——だが時間がない。どうする。',
      choices: [
        { label: '渾身の力で鏡を叩き割る', goto: 'c5_solo_smash' },
        { label: '意識を保ち、美咲を呼び続ける', goto: 'c5_solo_call' },
      ]
    },
    'c5_solo_smash': {
      scene: 'bg-mirror', left: 'koda', right: 'shadow', speaking: null,
      name: '',
      text: '——一か八かだ。\n渾身の力で、鏡を床に叩きつけた。\n破砕音と共に、白い光が部屋を満たした。',
      next: 'c5_solo_smash_02'
    },
    'c5_solo_smash_02': {
      scene: 'bg-room', left: 'koda', right: null, speaking: null,
      name: '',
      text: '光が収まると——鏡は粉々に砕けていた。\n夜叉の気配が消え、室温が戻ってくる。\nそして——',
      next: 'ending_true'
    },
    'c5_solo_call': {
      scene: 'bg-mirror', left: 'koda', right: 'shadow', speaking: 'left',
      name: '香田',
      text: '渡辺美咲——帰れ！ ここじゃない、お前の場所はこっちだ！',
      next: 'c5_solo_call_02'
    },
    'c5_solo_call_02': {
      scene: 'bg-mirror', left: 'koda', right: 'shadow', speaking: null,
      name: '',
      text: '美咲の輪郭がこちらに近づいてくる。あと少し——\nだが御札の効果が切れた。夜叉が再び腕を伸ばす。',
      next: 'c5_solo_call_03'
    },
    'c5_solo_call_03': {
      scene: 'bg-mirror', left: 'koda', right: 'shadow', speaking: null,
      name: '',
      text: '香田の残りの影が——全部、喰われた。\n視界が暗転する。体が引かれていく。\n鏡に向かって。',
      next: 'ending_bad'
    },

    /* ══════════════════════════════
       CHAPTER 5B ― 警察ルート
    ══════════════════════════════ */
    'c5_police_01': {
      scene: 'bg-office', left: 'koda', right: null, speaking: null,
      name: '',
      text: '香田は顔見知りの刑事・村上に電話した。\n「鏡面夜叉、影喰い——」説明しながら自分でも、これが聞こえ方の問題だと分かっていた。',
      next: 'c5_police_02'
    },
    'c5_police_02': {
      scene: 'bg-office', left: 'koda', right: null, speaking: null,
      name: '',
      text: '村上の返答——「証拠は？ 目視できる怪異なのか？\n　香田、お前が真剣なのはわかる。だがこれを上に持っていけと言われても……」',
      next: 'c5_police_03'
    },
    'c5_police_03': {
      scene: 'bg-office', left: 'koda', right: null, speaking: 'left',
      name: '香田',
      text: '今夜が最後のチャンスなんだ。朝になれば——',
      next: 'c5_police_04'
    },
    'c5_police_04': {
      scene: 'bg-office', left: 'koda', right: null, speaking: null,
      name: '',
      text: '「わかった。俺個人として聞く。だが動けるのは明朝以降だ。今夜はどうにもならん」\n電話が切れた。',
      next: 'c5_police_05'
    },
    'c5_police_05': {
      scene: 'bg-office', left: 'koda', right: null, speaking: null,
      name: '',
      text: '夜明けが来た。昼になった。夕方になった。\n村上から連絡はない。\n時計の針だけが、ただ進んでいく。',
      next: 'c5_police_06'
    },
    'c5_police_06': {
      scene: 'bg-office', left: 'koda', right: null, speaking: 'left',
      name: '香田',
      text: '——三日。もう三日経った。\nなぜ動かなかった。あの夜、俺が動けばよかった。',
      next: 'c5_police_07'
    },
    'c5_police_07': {
      scene: 'bg-office', left: 'koda', right: null, speaking: null,
      name: '',
      text: '朝比奈から着信。震える声——\n「美咲ちゃん、鏡の中に見えなくなりました。\n　昨日まで見えていたのに……消えてしまった」',
      next: 'c5_police_08'
    },
    'c5_police_08': {
      scene: 'bg-office', left: 'koda', right: null, speaking: 'left',
      name: '香田',
      text: '七日——七日が経過した。\n浅野の言葉が耳に蘇る。\n「七日を過ぎると、帰れなくなる」',
      next: 'ending_normal'
    },

    /* ══════════════════════════════
       CHAPTER 5C ― 朝比奈と共に
    ══════════════════════════════ */
    'c5_together_01': {
      scene: 'bg-apartment', left: 'koda', right: 'yui', speaking: null,
      name: '',
      text: '深夜一時半、菊花荘の前で朝比奈唯と合流した。\n彼女は白い顔をしていたが、目に強い光があった。\n怯えながら、それでも来た。',
      next: 'c5_together_02'
    },
    'c5_together_02': {
      scene: 'bg-apartment', left: 'koda', right: 'yui', speaking: 'right',
      name: '朝比奈',
      text: '香田さん——本当に、取り戻せますか。',
      next: 'c5_together_03'
    },
    'c5_together_03': {
      scene: 'bg-apartment', left: 'koda', right: 'yui', speaking: 'left',
      name: '香田',
      text: 'やってみせます。ただ一つだけ——\nどんなことが起きても、鏡から目を逸らさないでください。\n夜叉はそこを狙ってくる。',
      next: 'c5_together_04'
    },
    'c5_together_04': {
      scene: 'bg-apartment', left: 'koda', right: 'yui', speaking: 'right',
      name: '朝比奈',
      text: 'わかりました。\n美咲ちゃんとは小学校からの友達です。\n——絶対に諦めない。',
      next: 'c5_together_05'
    },
    'c5_together_05': {
      scene: 'bg-room', left: 'koda', right: 'yui', speaking: null,
      name: '',
      text: '三〇二号室。破片を踏みながら奥へ進む。\nクローゼットから鏡面夜叉を取り出し、壁に立てかけた。\n深夜二時——丑三つ時。',
      next: 'c5_together_06'
    },
    'c5_together_06': {
      scene: 'bg-room', left: 'koda', right: 'yui', speaking: 'left',
      name: '香田',
      text: '俺が名前を呼ぶ。夜叉が現れたら、あなたは美咲さんの名前を呼んでください。\n——声を信じて。',
      next: 'c5_together_07'
    },
    'c5_together_07': {
      scene: 'bg-room', left: 'koda', right: 'yui', speaking: 'left',
      name: '香田',
      text: '香田春樹。香田春樹。香田春樹。',
      next: 'c5_together_08'
    },
    'c5_together_08': {
      scene: 'bg-mirror', left: 'koda', right: 'yui', speaking: null,
      name: '',
      text: '室温が急降下した。鏡の表面が揺れる。\n二人の影が——鏡に引き寄せられていく。',
      next: 'c5_together_09'
    },
    'c5_together_09': {
      scene: 'bg-mirror', left: 'koda', right: 'shadow', speaking: null,
      name: '',
      text: '鏡から腕が現れた。今夜は形がより明確だ。\n二つの影を——同時に狙っている。',
      next: 'c5_together_10'
    },
    'c5_together_10': {
      scene: 'bg-mirror', left: 'koda', right: 'shadow', speaking: 'left',
      name: '香田',
      text: '唯さん——今です！',
      next: 'c5_together_11'
    },
    'c5_together_11': {
      scene: 'bg-mirror', left: 'koda', right: 'shadow', speaking: 'right',
      name: '朝比奈',
      text: '美咲ちゃん——！ 美咲ちゃん、聞こえる！？ 帰ってきて！',
      next: 'c5_together_12'
    },
    'c5_together_12': {
      scene: 'bg-mirror', left: 'koda', right: 'shadow', speaking: null,
      name: '',
      text: '鏡の奥が揺れた——輪郭が見える。\nこちらに向かって、速く近づいてくる。',
      next: 'c5_together_13'
    },
    'c5_together_13': {
      scene: 'bg-mirror', left: 'koda', right: 'shadow', speaking: null,
      name: '',
      text: '夜叉が二人の影に同時に腕を伸ばす。\n唯の影が半分——喰われた。',
      next: 'c5_together_14'
    },
    'c5_together_14': {
      scene: 'bg-mirror', left: 'koda', right: 'shadow', speaking: 'right',
      name: '朝比奈',
      text: '——大丈夫、です。続けます。\n美咲ちゃん……美咲ちゃん！！',
      next: 'c5_together_15'
    },
    'c5_together_15': {
      scene: 'bg-mirror', left: 'koda', right: 'shadow', speaking: null,
      name: '',
      text: '香田は御札を鏡に貼った。夜叉が後退する。\nその一瞬の隙に——鏡の奥から、手が伸びてきた。',
      next: 'ending_true'
    },

    /* ══════════════════════════════
       ENDINGS
    ══════════════════════════════ */
    'ending_true': {
      ending: true, type: 'true',
      label: 'TRUE ENDING',
      title: '鏡の彼方より',
      text: '御札が夜叉を鏡面に縫いつけた瞬間——鏡が粉々に砕けた。\n\n白い光の中、渡辺美咲が倒れ込むように現れた。\n生きていた。震えて泣いていたが——生きていた。\n\n影を少し失い、しばらく暗い場所が怖かったが、\n三ヶ月後、美咲は自ら香田の事務所を訪ねた。\n「ありがとうございました。まだ怖い夢を見るけど……大丈夫です」\n\nその笑顔に、ちゃんと影がついていた。\n\n浅野老人は鏡の破片を引き取り、全てを封じた。\n息子の分まで、と——静かに言った。',
    },
    'ending_bad': {
      ending: true, type: 'bad',
      label: 'BAD ENDING',
      title: '影の消えた男',
      text: '影を失った者は、鏡に映らなくなる。\n存在の輪郭が薄れ、やがて現実から剥がれ落ちていく。\n\n菊花荘三〇二号室には、今も鏡の破片が残っている。\n管理人の田中は時折、空き部屋の鍵穴から赤い光が漏れるのを見ると言う。\n\n朝比奈唯は毎週、あの部屋のドアの前に花を供える。\n——二つ分の花を。\n\n都市伝説として、この話は今も荻窪に伝わっている。',
    },
    'ending_normal': {
      ending: true, type: 'normal',
      label: 'NORMAL ENDING',
      title: '手の届かない場所',
      text: '渡辺美咲は、結局見つからなかった。\n失踪事件として処理され、書類は棚に収まった。\n\n香田は鏡面夜叉を浅野堂に持参し、再封印を依頼した。\n浅野老人は何も言わず、鏡を受け取った。\n\n朝比奈唯は時々、荻窪の事務所を訪ねてくる。\n「美咲ちゃんが夢に出てきた。笑ってたけど——遠かった」\n\n香田はコーヒーを淹れながら、次は間に合わせると心に誓う。\nだが鏡面夜叉は、また誰かの手に渡る。\nそれは——決まっている。',
    },
  }
};
