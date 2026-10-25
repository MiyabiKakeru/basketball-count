# OBS Studio用バスケットボールタイマー
>## 詳細・概要
>OBS Studioにバスケットボール試合会場のセンターハングビジョンに表示されるようなタイマー&得点表示板を追加できます
>>#### 使用例
>><img width="1920" height="1080" alt="Screenshot 2026-10-25 20-25-23" src="https://github.com/user-attachments/assets/56ac1703-e839-4260-a0ce-647a7405ae12" />
>>
>>#### 操作画面
>>
>><img width="301" height="751" alt="image" src="https://github.com/user-attachments/assets/1eddbffd-3a54-4e71-8932-21dbcb056f25" />
>・主ファイル形式:html  
>・チームのアイコンを自由に変更可能  
>・サブタイマーは押したらすぐ始まるプリセット付き  
>・表示内容:チームアイコン、各チーム得点、メインタイマー、サブタイマー

>## 使い方
>1.上記＜code＞から.zipをダウンロードし、解凍
>
>2.OBS Studioを開き、「ソースを追加」→「ブラウザ」を選択
>
>3.プロパティの、「ローカルファイル」をオンにし、「参照」から解凍したフォルダ内「index.html」を選択
>
>4.プロパティを以下のように設定する
>
>>幅:1920
>>
>>高さ:3000
>>
>>カスタム CSS:すべて消去
>
>5.ソースの位置を、上端から780px離した位置にする
>
><img width="492" height="283" alt="image" src="https://github.com/user-attachments/assets/99e2bbce-4b06-4544-80de-69aecaef2081" />
>
>6.「対話(操作)」を開き、そこにあるボタンをおして操作をする
