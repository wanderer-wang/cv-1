let html = document.querySelector('#html');
let style = document.querySelector('#style');
let string = `
/* 你好，我的名字叫王俊人
 * 接下来我们来画太极
 * 首先准备一个画板
 */
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来把div变成一个八卦图
 * 首先把div变成一个园
 */
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
}
/* 八卦表示事物自身变化的阴阳系统
 * 一黑一白
 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, 
    rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 使黑白两部分突出*/
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
`;
let string2 = "";
console.log(string.length);
let timer = 0;
let step = () => {
    setTimeout(() => {
        //如果是回车则往string2加br，如果不是则继续加string里的内容
        if (string[timer] === '\n') {
            string2 += "<br>";
        } else if (string[timer] === ' ') {
            string2 += "&nbsp";
        } else {
            string2 += string[timer];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, timer);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (timer < string.length - 1) {
            timer = timer + 1;
            step();
        }
    }, 50);
};
step();