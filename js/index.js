
; (function () {

    var video = document.querySelector('video');

    var play = document.querySelector('.player');

    var full = document.querySelector('.full');

    var tTime = 0;//视频的时长
    // 播放视频
    play.addEventListener('click', function () {
        if (video.paused) {
            video.play()

        } else {
            video.pause()

        }
    })

    // 全屏
    full.addEventListener('click', function () {
        video.webkitRequestFullScreen();
    })

    // 进度条控制
    video.ontimeupdate = function () {
        var cTime = video.currentTime;  //当前播放视频时间

        tTime = video.duration;

        var value = cTime / tTime;

        $('.play .console .progress i').css('width', value * 100 + '%')

    }
    // 点击控制条控制视频
    $('.play .console .progress div').on('click', function (e) {
        console.log(e.offsetX);
        console.log(this.offsetWidth);
        var value = e.offsetX / this.offsetWidth * tTime;
        video.currentTime = value;

    })

    // 点击任意位置触发视频播放
    $('.play .ey_video').click(function () {
        if (video.paused) {
            video.play()
        } else {
            video.pause()
        }
    })
    // 视频播放时更改按钮
    video.onplay = function () {
        play.classList.add('fa-pause')
        play.classList.remove('fa-play')
    }
    // 视频暂停时更改按钮状态
    video.onpause = function () {
        play.classList.remove('fa-pause')
        play.classList.add('fa-play')
    }
})()


    // 轮播图
    ; (function () {
        var mySwiper = new Swiper('.swiper-container', {
            // direction: 'vertical',   
            loop: true,
            autoplay: true,
           
        })
    })()

