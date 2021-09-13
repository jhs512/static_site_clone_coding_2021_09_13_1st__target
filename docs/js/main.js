$('document').ready(function(){
    const mainSlider = new Swiper('#mainSlider', {
        slidesPerView : 1,
        loop: true,
        pagination : true, // pager 여부
        autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
        delay : 3000,   // 시간 설정
        disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        navigation: {   // 버튼 사용자 지정
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })
});