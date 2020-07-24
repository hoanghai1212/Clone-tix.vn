
import { TabPanel } from "./vendor/tabpanel.js";
import * as utils from "./vendor/utility.js"

utils.handleScrollTopBtn(`#btnScrollTop`);
utils.handleHideAndShow();
utils.handleSideMenuToggle();
utils.createSelectBox("#location-select");
utils.createSelectBox("#dropdownselectFilm");
utils.createSelectBox("#dropdownselectCinema");
utils.createSelectBox("#dropdownselectDate");
utils.createSelectBox("#dropdownselectSession");
utils.handleModalToggle("#modalBtn", "#modalLocation");
TabPanel();


window.toggleTab = (evt, tabID) =>
{
    utils.toggleTab(evt, tabID);
}

document.querySelectorAll(".defaultOpen").forEach(el =>
{
    el.click();
})

window.toLoginPage = () =>
{
    utils.toLoginPage();
};



let now_filmData = {
    data: [{
        id: 1,
        img_src: "../../../build/images/tran-chien-midway.png",
        img_src_992: "../../../build/images/truyen-thuyet-ve-quan-tien-the-legend-of-quan-tien-15901234502313_540x225.png",
        score: 8,
        sneak_show: false,
        block_buster: true,
        age_label: "C16",
        film_name: "Trận Chiến Midway",
        film_info: "138 phút - 6.9 IMDb"

    },
    {
        id: 2,
        img_src: "../../../build/images/sky-tour-movie-son-tung-m-tp.png",
        img_src_992: "../../../build/images/sky-tour-movie-son-tung-m-tp-responsive992_540x225.jpg",
        score: 7.6,
        sneak_show: true,
        block_buster: false,
        age_label: "P",
        film_name: "Sky Tour Movie - Sơn Tùng M-TP",
        film_info: "94 phút"

    },
    {
        id: 3,
        img_src: "../../../build/images/tran-chien-midway.png",
        img_src_992: "../../../build/images/truyen-thuyet-ve-quan-tien-the-legend-of-quan-tien-15901234502313_540x225.png",
        score: 8,
        sneak_show: false,
        block_buster: false,
        age_label: "C16",
        film_name: "Trận Chiến Midway",
        film_info: "138 phút - 6.9 IMDb"

    },
    {
        id: 4,
        img_src: "../../../build/images/sky-tour-movie-son-tung-m-tp.png",
        img_src_992: "../../../build/images/sky-tour-movie-son-tung-m-tp-responsive992_540x225.jpg",
        score: 7.6,
        sneak_show: true,
        block_buster: false,
        age_label: "P",
        film_name: "Sky Tour Movie - Sơn Tùng M-TP",
        film_info: "94 phút"

    },
    {
        id: 5,
        img_src: "../../../build/images/tran-chien-midway.png",
        img_src_992: "../../../build/images/truyen-thuyet-ve-quan-tien-the-legend-of-quan-tien-15901234502313_540x225.png",
        score: 8,
        sneak_show: false,
        block_buster: false,
        age_label: "C16",
        film_name: "Trận Chiến Midway",
        film_info: "138 phút - 6.9 IMDb"

    },
    {
        id: 6,
        img_src: "../../../build/images/sky-tour-movie-son-tung-m-tp.png",
        img_src_992: "../../../build/images/sky-tour-movie-son-tung-m-tp-responsive992_540x225.jpg",
        score: 7.6,
        sneak_show: true,
        block_buster: false,
        age_label: "P",
        film_name: "Sky Tour Movie - Sơn Tùng M-TP",
        film_info: "94 phút"

    },
    {
        id: 7,
        img_src: "../../../build/images/tran-chien-midway.png",
        img_src_992: "../../../build/images/truyen-thuyet-ve-quan-tien-the-legend-of-quan-tien-15901234502313_540x225.png",
        score: 8,
        sneak_show: false,
        block_buster: false,
        age_label: "C16",
        film_name: "Trận Chiến Midway",
        film_info: "138 phút - 6.9 IMDb"

    },
    {
        id: 8,
        img_src: "../../../build/images/sky-tour-movie-son-tung-m-tp.png",
        img_src_992: "../../../build/images/sky-tour-movie-son-tung-m-tp-responsive992_540x225.jpg",
        score: 7.6,
        sneak_show: true,
        block_buster: false,
        age_label: "P",
        film_name: "Sky Tour Movie - Sơn Tùng M-TP",
        film_info: "94 phút"

    },
    {
        id: 9,
        img_src: "../../../build/images/tran-chien-midway.png",
        img_src_992: "../../../build/images/truyen-thuyet-ve-quan-tien-the-legend-of-quan-tien-15901234502313_540x225.png",
        score: 8,
        sneak_show: false,
        block_buster: false,
        age_label: "C16",
        film_name: "Trận Chiến Midway",
        film_info: "138 phút - 6.9 IMDb"

    },
    {
        id: 10,
        img_src: "../../../build/images/sky-tour-movie-son-tung-m-tp.png",
        img_src_992: "../../../build/images/sky-tour-movie-son-tung-m-tp-responsive992_540x225.jpg",
        score: 7.6,
        sneak_show: true,
        block_buster: false,
        age_label: "P",
        film_name: "Sky Tour Movie - Sơn Tùng M-TP",
        film_info: "94 phút"

    }
    ]
};

let coming_filmData = {
    data: [
        {
            id: 1,
            img_src: "../../../build/images/tran-chien-midway.png",
            block_buster: true,
            show_time: "12/06",
            age_label: "C16",
            film_name: "Trận Chiến Midway",
            film_info: "138 phút"

        },
        {
            id: 2,

            img_src: "../../../build/images/sky-tour-movie-son-tung-m-tp.png",
            show_time: "12/06",
            block_buster: false,
            age_label: "P",
            film_name: "Sky Tour Movie - Sơn Tùng M-TP",
            film_info: "94 phút"

        },
        {
            id: 3,

            img_src: "../../../build/images/tran-chien-midway.png",
            show_time: "12/06",
            block_buster: false,
            age_label: "C16",
            film_name: "Trận Chiến Midway",
            film_info: "138 phút - 6.9 IMDb"

        },
        {
            id: 4,

            img_src: "../../../build/images/sky-tour-movie-son-tung-m-tp.png",
            show_time: "12/06",
            block_buster: false,
            age_label: "P",
            film_name: "Sky Tour Movie - Sơn Tùng M-TP",
            film_info: "94 phút"

        },
        {
            id: 5,

            img_src: "../../../build/images/tran-chien-midway.png",
            show_time: "12/06",
            block_buster: false,
            age_label: "C16",
            film_name: "Trận Chiến Midway",
            film_info: "138 phút - 6.9 IMDb"

        },
        {
            id: 6,

            img_src: "../../../build/images/sky-tour-movie-son-tung-m-tp.png",
            show_time: "12/06",
            block_buster: false,
            age_label: "P",
            film_name: "Sky Tour Movie - Sơn Tùng M-TP",
            film_info: "94 phút"

        },
        {
            id: 7,

            img_src: "../../../build/images/tran-chien-midway.png",
            show_time: "12/06",
            block_buster: false,
            age_label: "C16",
            film_name: "Trận Chiến Midway",
            film_info: "138 phút - 6.9 IMDb"

        },
        {
            id: 8,

            img_src: "../../../build/images/sky-tour-movie-son-tung-m-tp.png",
            show_time: "12/06",
            block_buster: false,
            age_label: "P",
            film_name: "Sky Tour Movie - Sơn Tùng M-TP",
            film_info: "94 phút"

        },
        {
            id: 9,

            img_src: "../../../build/images/tran-chien-midway.png",
            show_time: "19/06",
            block_buster: false,
            age_label: "C16",
            film_name: "Trận Chiến Midway",
            film_info: "138 phút - 6.9 IMDb"

        },
        {
            id: 10,
            img_src: "../../../build/images/sky-tour-movie-son-tung-m-tp.png",
            show_time: "15/06",
            block_buster: false,
            age_label: "P",
            film_name: "Sky Tour Movie - Sơn Tùng M-TP",
            film_info: "94 phút"

        },
        {
            id: 11,

            img_src: "../../../build/images/tran-chien-midway.png",
            show_time: "19/06",
            block_buster: false,
            age_label: "C16",
            film_name: "Trận Chiến Midway",
            film_info: "138 phút - 6.9 IMDb"

        },
        {
            id: 12,
            img_src: "../../../build/images/sky-tour-movie-son-tung-m-tp.png",
            show_time: "15/06",
            block_buster: false,
            age_label: "P",
            film_name: "Sky Tour Movie - Sơn Tùng M-TP",
            film_info: "94 phút"

        }
    ]
};

const createSlide = (root, filmData) =>
{
    if (document.getElementById(root))
    {
        var htmlContent = "";
        document.getElementById(root).children[0].innerHTML = "";
        var closeDIV = "</div>"
        var showNumber = 8;
        var readMore = false;

        if (window.innerWidth < 993)
        {
            showNumber = 4;
            readMore = true;
        }


        for (let i = 0; i < Math.ceil(filmData.data.length / showNumber); i++)
        {
            htmlContent += `<div class="filmBlock__slide" id="${root}__slide-${i}">`

            var filmSet = filmData.data.slice(i * showNumber, showNumber * (i + 1));

            for (let j = 0; j < filmSet.length; j++)
            {
                var htmlRating = '';
                var htmlSneakShow = '';
                var htmlBlockBuster = '';
                var htmlShowTime = '';
                var htmlReadMore = '';
                var htmlImg = '';
                var label = 'orange';

                if (window.innerWidth < 993 && filmSet[j].img_src_992)
                {
                    htmlImg += `
                    <img src=${filmSet[j].img_src_992} alt="" />
                `
                } else
                {
                    htmlImg += `
                <img src=${filmSet[j].img_src} alt="" />
                `
                }

                if (readMore && i < Math.ceil(filmData.data.length / showNumber) - 1)
                {
                    htmlReadMore += `
                <button class="loadmore-btn" id="${root}-loadmore" data-target="${root}__slide-${i + 1}">Xem thêm</button>
                `
                }

                if (filmSet[j].age_label === "P")
                {
                    var label = 'green';

                }

                if (filmSet[j].sneak_show)
                {
                    htmlSneakShow += `
              <span class="filmBlock__film__sneak-show">
                Suất Chiếu Sớm
              </span>

              <div class="filmBlock__film__sneak-show--tag">
                <img src="../../../build/images/icon/pre-order.png" alt="booking" />
              </div>
        `
                }

                if (filmSet[j].block_buster)
                {
                    htmlBlockBuster += `
              <div class="filmBlock__film__block-buster--tag">
                <img src="../../../build/images/icon/block-buster.png" alt="booking" />
              </div>
        `
                }


                if (filmSet[j].score)
                {

                    htmlRating += `
                <span class="filmBlock__film-rating">
                <p class="filmBlock__film-score">${filmSet[j].score}</p>
                <p class="filmBlock__film-star">
                     `
                    var starPoint = Math.floor(filmSet[j].score) / 2;
                    for (let k = 0; k < starPoint; k++)
                    {
                        htmlRating += `
                        <img src="../../../build/images/icon/star1.png" alt="" />
                        `

                        if (starPoint > Math.floor(starPoint) && (k === Math.floor(starPoint) - 1))
                        {
                            htmlRating += `
                            <img src="../../../build/images/icon/star1.2.png" alt="" />
                            </p>
                            </span>
                            `
                            break;
                        } else if (k === Math.floor(starPoint) - 1)
                        {
                            htmlRating += `
            
                            </p>
                            </span>
                `
                        }
                    }

                }
                if (filmSet[j].show_time)
                {
                    htmlShowTime += `
        <span class="filmBlock__film-showtime">
            ${filmSet[j].show_time}
        </span>
        `;
                }

                htmlContent += `
        <div class="filmBlock__film">
            <div class="filmBlock__film-img">
                ${htmlImg}
              <div class="filmBlock__film-overlay">
                <a href="#filmBlock" class="play-btn">
                  <img src="../../../build/images/icon/play-video.png" alt="" />
                </a>
              </div>
                ${htmlShowTime}
                ${htmlRating}
                ${htmlSneakShow}
                ${htmlBlockBuster}
            </div>
            <div class="filmBlock__film-title">
              <div class="${label}-label">${filmSet[j].age_label}</div>
              <h1>${filmSet[j].film_name}</h1>
            </div>
            <div class="filmBlock__film-info">
              ${filmSet[j].film_info}
            </div>
        </div>
    `


            }
            htmlContent += htmlReadMore;
            htmlContent += closeDIV;
        }
        document.getElementById(root).children[0].innerHTML = htmlContent;
    } else return false;
}

createSlide("nowShowing", now_filmData);
createSlide("comingSoon", coming_filmData);
utils.loadMoreToggle(document.querySelectorAll("#nowShowing-loadmore"));
utils.loadMoreToggle(document.querySelectorAll("#comingSoon-loadmore"));



window.onresize = () =>
{
    clearTimeout(window.resizedFinished);
    
    window.resizedFinished = setTimeout(() =>
    {
        var comingCarousel = $('.comingSoon__carousel');
        var nowShowingCarousel = $('.nowShowing__carousel');
        if (document.querySelector(".comingSoon__carousel") || document.querySelector(".nowShowing__carousel"))
        {
            createSlide("nowShowing", now_filmData);
            createSlide("comingSoon", coming_filmData);
            const unslick = function ()
            {
                if (comingCarousel.hasClass('slick-initialized'))
                {
                    comingCarousel.slick("unslick");
                }

                if (nowShowingCarousel.hasClass('slick-initialized'))
                {
                    nowShowingCarousel.slick("unslick");
                }
            }

            if ($(window).width() > 992)
            {
                unslick();
                $('.comingSoon__carousel').slick({
                    infinity: true,
                });
                $('.nowShowing__carousel').slick({
                    infinity: true,
                });
            } else
            {
                unslick();
                utils.loadMoreToggle(document.querySelectorAll("#nowShowing-loadmore"));
                utils.loadMoreToggle(document.querySelectorAll("#coming-loadmore"));
            }
        }
    }, 500);

};