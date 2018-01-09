//拿到所有按钮
var allButtons = $('#buttons > button')
        
//给所有按钮一个监听事件
for(let i=0; i<allButtons.length; i++){
    $(allButtons[i]).on('click',function(x){
        var index = $(x.currentTarget).index()//找出点击的 button 排行第几
        var t = index * -300  
        $('#images').css(
            'transform','translate('+ t +'px)'
        )
        //点击按钮时，在当前停留
        n = index//n 重置
        activeButton(allButtons.eq(n))
    })
}   

//自动播放
var n = 0;
var size = allButtons.length//按钮个数
playSlide(n % size)
var timerId = setTimer()

//鼠标移进图片时，闹钟停掉
$('.window').on('mouseenter', function(){
    window.clearInterval(timerId)
})

//鼠标移出图片时，闹钟继续
$('.window').on('mouseleave', function(){
    timerId = setTimer()
})

function setTimer(){
    return setInterval(()=>{ 
        n += 1
        playSlide(n % size)
    },3000)
}

function playSlide(index){
    allButtons.eq(index).trigger('click')//DOM 转成 jQuery: allButtons.eq(n%3)= $(allButtons[n%3])
}

function activeButton($button){
    $button
        .addClass('blue')
        .siblings('.blue').removeClass('blue')
}