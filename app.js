(function () {

    var canvas = document.querySelector("canvas");
    canvas.width = innerWidth;
    canvas.height = innerHeight;

//    获取canvas的上下文
    var context = canvas.getContext("2d");

//    设置画笔的颜色及宽度
    context.strokeStyle = "white";
    context.lineWidth = 3;


    /*
    * 1.鼠标按下
    * 2.在鼠标按下时候 监听鼠标移动事件
    * 3.在鼠标抬起的时候 移除鼠标移动的监听事件
    * */

    document.body.addEventListener("mousedown",downStart);
    document.body.addEventListener("mouseup",end);

    function downStart(event) {
        context.beginPath();
        context.moveTo(event.pageX, event.pageY);
        context.stroke();
        document.body.addEventListener("mousemove",move);
    }
    //鼠标移动划线
    function move(event) {
        context.lineTo(event.pageX, event.pageY);
        context.stroke();
    }
    
    function end() {
        document.body.removeEventListener("mousemove",move);
    }
    
})();