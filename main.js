var allButtons = $('#buttons > button')
      
//给所有按钮一个监听事件
for(let i=0; i<allButtons.length; i++){
    $(allButtons[i]).on('click',function(x){
        var index = $(x.currentTarget).index()
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
var size = allButtons.length
playSlide(n % size)
var timerId = setTimer()

//鼠标移进时，闹钟停掉
$('#window').on('mouseenter', function(){
    window.clearInterval(timerId)
})
$('#control > button').on('mouseenter', function(){
    window.clearInterval(timerId)
})
$('#buttons > button').on('mouseenter', function(){
    window.clearInterval(timerId)
})

//鼠标移出时，闹钟继续
$('#window').on('mouseleave', function(){
    timerId = setTimer()
})
$('#control > button').on('mouseleave', function(){
    timerId = setTimer()
})
$('#buttons > button').on('mouseleave', function(){
    timerId = setTimer()
})

//control 
$(next).on('click', function(){
    goToSlide(current+1)
})
  $(previous).on('click', function(){
    goToSlide(current-1)
})

//定时
function setTimer(){
    return setInterval(()=>{ 
        n += 1
        playSlide(n % size)
    },1000)
}

function playSlide(index){
    //DOM 转成 jQuery: allButtons.eq(n%3)= $(allButtons[n%3])
    allButtons.eq(index).trigger('click')
}

//button 状态切换
function activeButton($button){
    $button.addClass('blue')
        .siblings('.blue').removeClass('blue')
}
