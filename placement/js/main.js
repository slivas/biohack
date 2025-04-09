document.addEventListener('DOMContentLoaded', () => {

    /*Swiper slider*/

    let sliderThumbnail = new Swiper('.slider-thumbnail', {
        slidesPerView: 6,
        spaceBetween: 20,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });

    let slider = new Swiper('.slider', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        thumbs: {
            swiper: sliderThumbnail
        }
    });


    /*Tabs*/
    function openTab(tabName, buttonElement) {
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });

        document.querySelectorAll('.global-btn').forEach(link => {
            link.classList.remove('active');
        });

        document.querySelectorAll('.tab-content[data-tab="' + tabName + '"]').forEach(content => {
            content.classList.add('active');
        });

        buttonElement.classList.add('active');

        const globalBtn = document.querySelector('.global-btn[data-tab="' + tabName + '"]');
        if (globalBtn) {
            globalBtn.classList.add('active');
        }
    }

    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            openTab(tabName, this);
        });
    });

    if (tabButtons.length > 0) {
        tabButtons[0].click();
    }


});