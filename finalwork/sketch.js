let orin = [];

// setup関数：プログラム実行時に最初に1回だけ呼び出される
function setup() {
// createCanvas(幅, 高さ)：指定したサイズで描画エリア（キャンバス）を作成する
createCanvas(400, 600);
}

// draw関数：繰り返される描画処理
function draw() {
// 【重要1】毎回画面を白くリセットする
background(255);

// 状態が0（配列が空）のとき：ようこそ画面
if (orin.length == 0) {
fill(10);
textAlign(CENTER); // 文字を中央揃えにする
textSize(20); // サイズの調整
// text(文字, x座標, y座標)
text("ようこそオリンピックの世界に", width / 2, height / 2);

textSize(15);
fill(50);
text("クリックしてください", width / 2, height / 2 + 40);
}

// 状態が1（配列に要素が1つある）のとき：五輪描画
if (orin.length == 1) {
noFill();

for (let i = 1; i <= 5; i++) {
let x, y;
let colors = [
[0, 153, 224], // 青
[0, 0, 0], // 黒
[255, 0, 0], // 赤
[255, 216, 0], // 黄
[0, 201, 117] // 緑
];

let c = colors[i - 1];

if (i <= 3) {
x = i * 80;
y = 100; // 位置を少し調整
} else {
x = i * 80 - 200;
y = 100 + 40; // 位置を少し調整
}

stroke(c[0], c[1], c[2]);
strokeWeight(5);
drawcircle(x, y);
}
}
}

// 【重要2】マウスがクリックされたら実行される関数
function mousePressed() {
if (orin.length == 0) {
// 配列に1つデータを追加して、状態を「1」にする
orin.push(1);
}
}

// 円を描く関数
function drawcircle(x, y) {
const size = 60;
ellipse(x, y, size, size);
}