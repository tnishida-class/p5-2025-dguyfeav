// チェッカー
function setup() {
createCanvas(200, 200);
const size = width / 8; // マスの一辺の長さ
noStroke();//線書かない
for(let i = 0; i < 8; i++){ //iを０で定義する。iが8以下ならば１ずつ増える。
for(let j = 0; j < 8; j++){ //上のｊバージョン
if ((i+j)%2==0){fill(255);} //i+jを２で割った余りが０と等しいならば、255で塗りつぶす。
else {fill(100);} //それ以外の場合は、100で塗りつぶす。
rect(size*i,size*j,size,size) //上の条件に合うようにxがsize*iからsizeまでyがsize*jからsizeまでの四角形を書く。
// BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j
if ((i+j)%2==1){ //i+jを２で割った余りが１と等しいならば、
if(j<3){fill(255,0,0); //jが３より小さいならば、(255,0,0)で塗りつぶして
ellipse(size*i+size/2,size*j+size/2,size,size)} //中心(size*i+size/2,size*j+size/2)、横幅、縦幅がsizeの円を書く
else if(j>4){fill(0); //もう一つの条件としてjが４より大きいならば、(0)で塗りつぶして、
ellipse(size*i+size/2,size*j+size/2,size,size) //中心(size*i+size/2,size*j+size/2)、横幅、縦幅がsizeの円を書く
}
}
// rect(size*i,size*j,size,size) // BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j
}
}
}