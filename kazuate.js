let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 1;
let n = document.querySelector('span#kaisu');
n.textContent = kaisu;
// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
let m = document.querySelector('#print');
m.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let i = document.querySelector('input[number="kazu"]');
    let kazu = i.value;
    kazu = Number(kazu);
    let yoso = kazu;      // 第5回課題:テキストボックスの数値をここに代入
    // 課題3-1：ここの判定処理を作成する．
    let n = document.querySelector('span#kaisu');
    n.textContent = kaisu;

    console.log(kaisu+'回目の予想: '+yoso);

    if (kaisu < 4) {
        if (yoso === kotae) {
            let a = document.querySelector('span#result');
            a.textContent = '正解です．おめでとう!';
            console.log('正解です．おめでとう!');
            kaisu = kaisu + (4-kaisu);
        } else if (yoso !== kotae && kaisu === 4) {
            let b = document.querySelector('span#result');
            b.textContent = 'まちがい．残念でした答えは'+kotae+'です．';
            console.log('まちがい．残念でした答えは'+kotae+'です．');
        } else if (kotae > yoso) {
            let c = document.querySelector('span#result');
            c.textContent = 'まちがい．答えはもっと大きいですよ';
            console.log('まちがい．答えはもっと大きいですよ');
            kaisu = kaisu + 1;
        } else if (kotae < yoso) {
            let d = document.querySelector('span#result');
            d.textContent = 'まちがい．答えはもっと小さいですよ';
            console.log('まちがい．答えはもっと小さいですよ');
            kaisu = kaisu + 1;
        }
    } else {
        let e = document.querySelector('span#result');
        e.textContent = '答えは'+kotae+'でした．すでにゲームは終わっています';
        console.log('答えは'+kotae+'でした．すでにゲームは終わっています');
    }
    
    let c = document.querySelector('span#yoso');
    c.textContent = yoso;
    
}




