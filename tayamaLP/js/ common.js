$(function () {
    $('.slick01').slick({
        autoplay:true,
        autoplaySpeed:2500,
        dots:true,
        });
});

$(function () {
    $('.slick02').slick({
        autoplay:true,
        autoplaySpeed:2500,
        dots:true,
        });
});

// ▼波面アニメの設定
$('#wave').wavify({
    height: 40,
    bones: 3,
    amplitude: 55,
    color: '#F2CA53',
    speed: .25
  });

// $(function () {
//     alert('動作OKらしいよ');
// });
