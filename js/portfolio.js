// jQuery 시작
$(function () {

    var fullpageOption = {
        anchors: ['main', 'portfolio01', 'portfolio02', 'portfolio03', 'portfolio04', 'portfolio05', 'portfolio06', 'portfolio07', 'contact'],
        onLeave: function (origin, destination, direction) {
            $('.gnb li').eq(destination - 1).addClass('on').siblings().removeClass('on');
            $('.section').eq(destination - 1).addClass('on').siblings().removeClass('on');
        },
        afterRender: function () {
            $('.gnb li').eq(0).addClass('on');
            $('.section').eq(0).addClass('on');
        },
        css3: false,
    };

    $('.main').fullpage(fullpageOption);

    $('.footer').fullpage();

    $('.mopen').on('click', function () {
        $(this).toggleClass('on');
        $('.cover').toggleClass('on');
    });


    $('h1>a,.cover li,.gnb li,.toTop').on('click', function () {
        $('.cover').removeClass('on');
        $('.mopen').removeClass('on');
    });


    $('.cover').on('wheel', function (e) {
        e.stopPropagation();
    });


    $(document).ready(function () {
        const stars = $('.stars');
        const starsNum = 100;

        for (let i = 0; i < starsNum; i++) {
            const star = $('<div></div>');
            star.addClass('star');
            star.css({
                left: Math.random() * 100 + 'vw',
                top: Math.random() * 100 + 'vh',
                animationDelay: Math.random() * 3 + 's',
                animationDuration: Math.random() * 3 + 1.5 + 's'
            });
            stars.append(star);
        }

        $('.slogan p').addClass('on');
        $('.slogan .sub_tit').addClass('on');
    });
    // 무작위 좌표에 생성된 100개의 점이 반짝이는 효과 
});

// jQuery 끝


// 자바스크립트 시작
document.addEventListener("DOMContentLoaded", function () {
    new TypeIt(".slogan>h2", {
        speed: 150,
    })
        .type('experience')
        .pause(300)
        .type(' , ')
        .pause(500)
        .type('develop')
        .go();
});

// 자바 스크립트 끝