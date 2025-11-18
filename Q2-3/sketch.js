// ギリシャ国旗（ほかの国旗に挑戦してもOK）
function setup() {
createCanvas(270, 180);
noStroke();
background(255);

const d = height / 9; // 縞1本の太さ
const blue = color(0, 51, 160);//青色の表示方式（RBG）

// 縞を描く
for(let i = 0; i < 9; i++)//i を 0 から 9 まで繰り返し１ずつ足す
// BLANK[1] ヒント：縞の色を交互に変えるには2で割った余りを使おう
    {
if(i % 2 == 0){//i が偶数かどうかを判定する条件式,% は割り算の余りを求める演算子だから、、i ÷ 2 の余りが 0ならば
fill(blue)//線は青で 
rect(0, i * d, width, (i + 1) * d);//rectは四角形。rect(xのスタート、ｙのスタート、ｘの終わり、ｙの終わり)
}
else{//仮定が成り立たないならば
fill(255)
rect(0, i * d, width, (i + 1) * d);
}
}
// 十字を描く
const size = d * 5;
fill(blue);
rect(0, 0, size, size);
fill(255);
rect(d * 2, 0, d, size);//rectは四角形。rect(xのスタート、ｙのスタート、ｘの終わり、ｙの終わり)
fill(255);
rect(0, d*2, size, d)
}







