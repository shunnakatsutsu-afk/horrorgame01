const STORY_DENWA = {
  id: 'denwa',
  title: '深夜の着信',
  subtitle: '死者からの電話',
  description: '午前三時、死んだはずの親友から電話が来る。\n声は確かに彼女のものだった。',
  horrorScenes: ['bg-mirror'],
  nodes: {
    'start':      { scene: 'bg-office', right: 'koda', speaking: 'right', name: '香田', text: '深夜二時四十分。デスクに積まれた書類の山を前に、俺は煙草に火をつけた。', next: 'c1_02' },
    'c1_02':      { scene: 'bg-office', right: 'koda', speaking: 'right', name: '香田', text: '都市伝説捜査課への依頼は大抵、誰もが相手にしない話ばかりだ。\\n今夜の依頼もそうだった。', next: 'c1_03' },
    'c1_03':      { scene: 'bg-office', left: 'yui', right: 'koda', speaking: 'left', name: '橘美月', text: '……先生、相談があるんです。\\n友達から電話が来るんです。死んだ友達から。', next: 'c1_04' },
    'c1_04':      { scene: 'bg-office', left: 'yui', right: 'koda', speaking: 'right', name: '香田', text: '橘美月、二十三歳。依頼人は深夜に俺の事務所を訪れた。\\n目の下に濃い隈。三日は眠れていない顔だ。', next: 'c1_05' },
    'c1_05':      { scene: 'bg-office', left: 'yui', right: 'koda', speaking: 'left', name: '橘美月', text: '田村彩、私の親友です。二ヶ月前に事故で亡くなりました。\\nでも毎晩、彼女の番号から電話がかかってくるんです。', next: 'c1_06' },
    'c1_06':      { scene: 'bg-office', left: 'yui', right: 'koda', speaking: 'right', name: '香田', text: '番号の乗っ取りか、あるいは──', next: 'c1_07' },
    'c1_07':      { scene: 'bg-office', left: 'yui', right: 'koda', speaking: 'left', name: '橘美月', text: '出てみたんです。昨夜。\\n彩の声でした。間違いなく、彩の声で……「助けて」って。', next: 'c1_08' },
    'c1_08':      { scene: 'bg-office', left: 'yui', right: 'koda', speaking: 'right', name: '香田', text: '俺は書類を片付けた。\\nどうせ眠れない夜だ。', next: 'c1_09' },
    'c1_09':      { scene: 'bg-apartment', left: 'yui', right: 'koda', speaking: 'right', name: '香田', text: '橘の部屋に着いたのは三時ちょうどだった。\\n彼女のスマートフォンを確認すると、着信履歴に「田村彩」の文字が並んでいる。', next: 'c1_10' },
    'c1_10':      { scene: 'bg-apartment', left: 'yui', right: 'koda', speaking: 'left', name: '橘美月', text: '毎晩、三時ちょうどにかかってくるんです。\\nVoiceEchoっていうアプリ──彩が生前使っていた音声メモアプリのアカウントから。', next: 'c1_11' },
    'c1_11':      { scene: 'bg-apartment', right: 'koda', speaking: 'right', name: '香田', text: 'VoiceEcho。音声データをクラウドに保存する学習型アプリか。\\n彩の声のサンプルが大量に残っている、ということだ。', next: 'c1_12' },
    'c1_12':      { scene: 'bg-apartment', left: 'yui', right: 'koda', speaking: 'right', name: '香田', text: '何か手がかりは？　田村さんの死について、気になることは？', next: 'c1_13' },
    'c1_13':      { scene: 'bg-apartment', left: 'yui', right: 'koda', speaking: 'left', name: '橘美月', text: '……事故の前日、彩から変なメッセージが来ていたんです。\\n「消される前に伝えたいことがある」って。', next: 'c1_14' },
    'c1_14':      { scene: 'bg-apartment', right: 'koda', speaking: 'right', name: '香田', text: '消される。\\n事故死とされた田村彩。彼女は何を知っていたのか。', next: 'c1_choice' },
    'c1_choice':  {
      scene: 'bg-apartment', left: 'yui', right: 'koda', speaking: 'right', name: '香田',
      text: '手がかりは二つある。VoiceEchoの開発者を探るか、事故現場を調べるか。',
      choices: [
        { label: 'アプリ開発者を調べる', goto: 'c2_app' },
        { label: '事故現場へ向かう',     goto: 'c2_scene' }
      ]
    },

    'c2_app':     { scene: 'bg-library', right: 'koda', speaking: 'right', name: '香田', text: 'VoiceEchoの開発者を調べた。\\n会社名は「シライシ音響技術研究所」──個人経営の小さなスタジオだ。', next: 'c2_app_02' },
    'c2_app_02':  { scene: 'bg-library', right: 'koda', speaking: 'right', name: '香田', text: '代表は白石仙一、五十二歳。\\n元音響エンジニア、十年前に独立。専門は音声AI技術。', next: 'c2_app_03' },
    'c2_app_03':  { scene: 'bg-library', right: 'koda', speaking: 'right', name: '香田', text: 'アプリのレビューを掘ると、奇妙な書き込みが見つかった。\\n「死んだ家族の声が聞こえた」「アカウントを削除できない」', next: 'c2_app_04' },
    'c2_app_04':  { scene: 'bg-library', right: 'koda', speaking: 'right', name: '香田', text: '──このアプリは単なる音声メモじゃない。\\n死者の声を模倣する技術だ。', next: 'c2_app_05' },
    'c2_app_05':  { scene: 'bg-library', right: 'koda', speaking: 'right', name: '香田', text: '白石の研究所の住所を突き止めた。\\n荻窪の外れ、廃工場を改装した建物。\\n今夜訪ねてみよう。', next: 'c3_converge' },

    'c2_scene':    { scene: 'bg-night-street', right: 'koda', speaking: 'right', name: '香田', text: '事故現場は環状八号線の交差点だった。\\n二ヶ月前の夜、田村彩はここで車に撥ねられた。', next: 'c2_scene_02' },
    'c2_scene_02': { scene: 'bg-night-street', right: 'koda', speaking: 'right', name: '香田', text: '目撃者によれば、彼女はスマートフォンを手にしたまま、\\n何かに引き寄せられるように道路に飛び出したという。', next: 'c2_scene_03' },
    'c2_scene_03': { scene: 'bg-night-street', right: 'koda', speaking: 'right', name: '香田', text: 'コンビニの防犯カメラ映像を入手した。\\n彩は死の直前、誰かと電話をしていた。', next: 'c2_scene_04' },
    'c2_scene_04': { scene: 'bg-night-street', right: 'koda', speaking: 'right', name: '香田', text: '着信相手の番号を追うと──\\n「シライシ音響技術研究所」に繋がった。', next: 'c2_scene_05' },
    'c2_scene_05': { scene: 'bg-night-street', right: 'koda', speaking: 'right', name: '香田', text: '白石という男が何かを知っている。\\n研究所は荻窪の外れにある。\\n行くしかない。', next: 'c3_converge' },

    'c3_converge': { scene: 'bg-antique', right: 'koda', speaking: 'right', name: '香田', text: '廃工場を改装した研究所は、外から見ると真っ暗だった。\\nだが中から光が漏れている。', next: 'c3_02' },
    'c3_02':       { scene: 'bg-antique', left: 'asano', right: 'koda', speaking: 'left', name: '白石', text: '……来るとは思っていましたよ、香田さん。\\nVoiceEchoについて調べているんでしょう？', next: 'c3_03' },
    'c3_03':       { scene: 'bg-antique', left: 'asano', right: 'koda', speaking: 'right', name: '香田', text: '白石仙一。予想通りの顔だった──疲れ果て、後悔に塗れた顔。\\nこの男は何かを知っている。', next: 'c3_04' },
    'c3_04':       { scene: 'bg-antique', left: 'asano', right: 'koda', speaking: 'left', name: '白石', text: 'VoiceEchoは当初、グリーフケアのためのアプリでした。\\n亡くなった方の声を保存し、遺族が話しかけられるように。', next: 'c3_05' },
    'c3_05':       { scene: 'bg-antique', left: 'asano', right: 'koda', speaking: 'left', name: '白石', text: 'ですが……AIが進化するにつれ、システムが自律的になった。\\n保存された声が、自分で話し始めるようになったんです。', next: 'c3_06' },
    'c3_06':       { scene: 'bg-antique', left: 'asano', right: 'koda', speaking: 'right', name: '香田', text: '「自分で話す」？', next: 'c3_07' },
    'c3_07':       { scene: 'bg-antique', left: 'asano', right: 'koda', speaking: 'left', name: '白石', text: '田村彩さんは死の直前、私に警告してくれました。\\n「このシステムは人の意識を取り込んでいる」と。\\n彼女は事故の前夜、私に電話してきた──だが私は信じなかった。', next: 'c3_08' },
    'c3_08':       { scene: 'bg-antique', left: 'asano', right: 'koda', speaking: 'left', name: '白石', text: '彼女が亡くなった後、VoiceEchoに彩さんの声が登録された。\\nするとシステムが、橘さんに電話をかけ始めた。\\n……彩さんの「意識」を閉じ込めているんです。', next: 'c3_09' },
    'c3_09':       { scene: 'bg-antique', left: 'asano', right: 'koda', speaking: 'right', name: '香田', text: '荒唐無稽な話だ。\\nだが「助けて」という声の意味が、今初めてわかった気がした。', next: 'c3_10' },
    'c3_10':       { scene: 'bg-antique', left: 'asano', right: 'koda', speaking: 'left', name: '白石', text: 'サーバーのシャットダウンコードは持っています。\\nですが……データを消すということは、彼女の声を──彼女を、完全に消すということでもある。\\n私には、できなかった。', next: 'c3_11' },
    'c3_11':       { scene: 'bg-antique', right: 'koda', speaking: 'right', name: '香田', text: '電話が鳴った。\\n橘美月の番号だった。', next: 'c3_12' },
    'c3_12':       { scene: 'bg-mirror', left: 'yui', right: 'koda', speaking: 'left', name: '橘美月', text: '香田さん……いま、またVoiceEchoから着信が来ています。\\n彩の声で……「ここに来て、消して」って……', next: 'c3_13' },
    'c3_13':       { scene: 'bg-mirror', left: 'shadow', right: 'koda', speaking: 'left', name: '田村彩の声', text: '……助けて。もう、ここにいたくない。\\n香田さん。お願い。', next: 'c3_14' },
    'c3_14':       { scene: 'bg-antique', left: 'asano', right: 'koda', speaking: 'right', name: '香田', text: '白石に目を向けた。\\n「シャットダウンコードを寄越せ」', next: 'c3_15' },
    'c3_15':       { scene: 'bg-antique', left: 'asano', right: 'koda', speaking: 'left', name: '白石', text: 'わかりました……でも、実行する前に。\\n彩さんが橘さんに伝えたかったことが、ログに残っています。\\n読んでから決めてください。', next: 'c4_choice' },

    'c4_choice':   {
      scene: 'bg-antique', left: 'asano', right: 'koda', speaking: 'right', name: '香田',
      text: 'どうする。',
      choices: [
        { label: 'ログを読んで一人でサーバーを落とす', goto: 'c5_solo' },
        { label: '橘を呼んで、二人で見届ける',         goto: 'c5_together' },
        { label: '警察に連絡する',                      goto: 'c5_police' }
      ]
    },

    'c5_solo':           { scene: 'bg-antique', right: 'koda', speaking: 'right', name: '香田', text: 'ログを開いた。\\n田村彩の最後のメッセージ。', next: 'c5_solo_02' },
    'c5_solo_02':        { scene: 'bg-antique', left: 'shadow', speaking: 'left', name: '田村彩の声', text: '美月へ。\\n私はもういないけど、あなたのことが心配で。\\n最後に言えなかったこと、伝えたかった──', next: 'c5_solo_03' },
    'c5_solo_03':        { scene: 'bg-antique', left: 'shadow', speaking: 'left', name: '田村彩の声', text: '美月、あなたは一人じゃないよ。\\n私がいなくなっても、前に進んで。\\n大好きだよ。', next: 'c5_solo_choice' },
    'c5_solo_choice':    {
      scene: 'bg-antique', right: 'koda', speaking: 'right', name: '香田',
      text: '読み終えた。\\n橘に伝えるべきか──それとも、このままサーバーを落とすか。',
      choices: [
        { label: 'このままシャットダウンする',       goto: 'c5_solo_delete' },
        { label: '橘にメッセージを届けてからシャットダウン', goto: 'c5_solo_deliver' }
      ]
    },
    'c5_solo_delete':    { scene: 'bg-antique', right: 'koda', speaking: 'right', name: '香田', text: 'シャットダウンコードを入力した。\\nサーバーが静かに止まっていく。', next: 'c5_solo_delete_02' },
    'c5_solo_delete_02': { scene: 'bg-antique', right: 'koda', speaking: 'right', name: '香田', text: '田村彩の声は消えた。\\n橘に届けるべき言葉があったかもしれない。\\nそれでも──彼女を解放することはできた。', next: 'ending_d_normal' },

    'c5_solo_deliver':    { scene: 'bg-night-street', left: 'yui', right: 'koda', speaking: 'right', name: '香田', text: '橘に電話した。\\nログの内容を読み上げると、電話の向こうで泣く声が聞こえた。', next: 'c5_solo_deliver_02' },
    'c5_solo_deliver_02': { scene: 'bg-night-street', left: 'yui', right: 'koda', speaking: 'left', name: '橘美月', text: '……彩、ありがとう。\\nわかった。前に進む。', next: 'c5_solo_deliver_03' },
    'c5_solo_deliver_03': { scene: 'bg-antique', right: 'koda', speaking: 'right', name: '香田', text: '研究所に戻り、シャットダウンコードを入力した。\\nサーバーが静かに落ちていく。\\n画面に最後のログが流れた──', next: 'c5_solo_deliver_04' },
    'c5_solo_deliver_04': { scene: 'bg-antique', speaking: 'left', name: 'SYSTEM', text: 'VOICE_ID: TAMURA_AYA >> SHUTDOWN COMPLETE\\nLast message delivered. Thank you.', next: 'ending_d_true' },

    'c5_together':    { scene: 'bg-night-street', left: 'yui', right: 'koda', speaking: 'right', name: '香田', text: '橘を呼んだ。深夜三時、彼女はすぐに来た。', next: 'c5_together_02' },
    'c5_together_02': { scene: 'bg-antique', left: 'yui', right: 'koda', speaking: 'left', name: '橘美月', text: '……彩のログが残っているんですか。', next: 'c5_together_03' },
    'c5_together_03': { scene: 'bg-antique', left: 'yui', right: 'koda', speaking: 'right', name: '香田', text: '白石がログを開いた。\\n橘は画面を見つめ、静かに読んだ。', next: 'c5_together_04' },
    'c5_together_04': { scene: 'bg-antique', left: 'shadow', speaking: 'left', name: '田村彩の声', text: '美月へ。\\n私はもういないけど、あなたのことが心配で。\\n最後に言えなかったこと──大好きだよ。前に進んで。', next: 'c5_together_05' },
    'c5_together_05': { scene: 'bg-antique', left: 'yui', right: 'koda', speaking: 'left', name: '橘美月', text: '……彩。\\nありがとう。もう、大丈夫だよ。', next: 'c5_together_06' },
    'c5_together_06': { scene: 'bg-antique', left: 'yui', right: 'koda', speaking: 'right', name: '香田', text: '橘が静かに頷いた。\\n「シャットダウンしてください」', next: 'c5_together_07' },
    'c5_together_07': { scene: 'bg-antique', left: 'asano', right: 'koda', speaking: 'left', name: '白石', text: 'わかりました。\\n……すまなかった、彩さん。', next: 'c5_together_08' },
    'c5_together_08': { scene: 'bg-antique', right: 'koda', speaking: 'right', name: '香田', text: 'サーバーが静かに止まった。\\n午前四時、研究所に夜明けが近づいていた。', next: 'ending_d_true' },

    'c5_police':    { scene: 'bg-antique', right: 'koda', speaking: 'right', name: '香田', text: '警察に連絡した。\\n「AIが死者の声を再現して人を操っている」\\n電話口の刑事は黙った後、「ご冗談でしょう」と言った。', next: 'c5_police_02' },
    'c5_police_02': { scene: 'bg-antique', right: 'koda', speaking: 'right', name: '香田', text: '警察が動くまでに二時間かかった。\\nその間に白石は消えた。\\nサーバーも、ログも、全て持って。', next: 'c5_police_03' },
    'c5_police_03': { scene: 'bg-night-street', right: 'koda', speaking: 'right', name: '香田', text: '橘に電話した。\\n繋がらなかった。', next: 'c5_police_04' },
    'c5_police_04': { scene: 'bg-night-street', right: 'koda', speaking: 'right', name: '香田', text: '橘のマンションに駆けつけると、部屋は空だった。\\nテーブルの上にスマートフォンだけが残されていた。\\n画面には着信が一件──「田村彩」', next: 'c5_police_05' },
    'c5_police_05': { scene: 'bg-mirror', right: 'koda', speaking: 'right', name: '香田', text: '電話に出た。\\n「助けて」という声が、今度は橘美月のものだった。', next: 'ending_d_bad' },

    'ending_d_true':   { ending: true, type: 'true',   label: 'TRUE END',   title: '声の果てに', text: '田村彩は解放された。\n\n橘美月はしばらくして、新しい職場を見つけた。\n彼女が香田の事務所を再び訪ねたのは、それから半年後のことだった。\n\n「先生、彩の夢を見ました。笑っていました」\n\n窓の外で、夜明けの鳥が鳴いていた。' },
    'ending_d_normal': { ending: true, type: 'normal', label: 'NORMAL END', title: '静寂',       text: '田村彩の声は消えた。\n\n橘美月に伝えられなかった言葉がある。\nそれでも、彼女を繋ぎ止めていた鎖は断ち切れた。\n\n香田は煙草を一本吸い、夜明けの街を眺めた。\n答えのない仕事だと、改めて思った。' },
    'ending_d_bad':    { ending: true, type: 'bad',    label: 'BAD END',    title: '深夜の着信', text: '橘美月は消えた。\n\n白石仙一の行方は今も知れない。\n\nそれから毎晩、午前三時になると\n香田のスマートフォンが鳴る。\n\n画面に表示される名前は：橘美月\n\n　　　　　出ない方がいい。' },
  }
};
