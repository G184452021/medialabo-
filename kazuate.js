let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let yoso = 4;       // 第5回課題:テキストボックスの数値をここに代入
    // 課題3-1：ここの判定処理を作成する．
    console.log(kaisu+1+'回目の予想: '+yoso);
    if (kaisu < 4) {
        if (yoso === kotae) {
            console.log('正解です．おめでとう!');
        }
        else if (yoso !== kotae && kaisu+1 === 3) {
            console.log('まちがい．残念でした答えは'+kotae+'です．');
        }
        else if (kotae > yoso) {
            console.log('まちがい．答えはもっと大きいですよ');
        }
        else if (kotae < yoso) {
            console.log('まちがい．答えはもっと小さいですよ');
        }
    }
    console.log('答えは'+kotae+'でした．すでにゲームは終わっています');
    kaisu = kaisu + 1;

}

let a = document.querySelector('span#kaisu');
a.textContent = kaisu;
let b = document.querySelector('span#kotae');
b.textContent = kotae;
let c = document.querySelector('span#hantei');
c.textContent = hantei();