function toggleTab(evt, tabID)
{
    // Declare all variables
    var tabcontent, tablinks;

    var currentTab = document.getElementById(tabID);
    var tabcontentClassName = evt.currentTarget.dataset.content;
    var linksClassName = evt.currentTarget.dataset.link;
    var carouselClassName = evt.currentTarget.dataset.carousel;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName(tabcontentClassName);
    for (let i = 0; i < tabcontent.length; i++)
    {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName(linksClassName);
    for (let i = 0; i < tablinks.length; i++)
    {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    currentTab.style.display = "block";
    evt.currentTarget.className += " active";
    // console.log(evt.currentTarget)

    // FIX SLICK CAROUSEL NOT WORKING WHEN TAB DISPLAY NONE
    if (carouselClassName)
    {
        for (let el of tabcontent)
        {
            el.addEventListener('animationstart', () =>
            {
                $(`.${carouselClassName}`).slick('setPosition');
            });

        }

    }

    var childDefault = currentTab.querySelector(".defaultOpenChild");
    if (childDefault)
    {
        childDefault.click();
    }
}

//Click to open default tab on loaded
var defaultOpen = document.getElementsByClassName("defaultOpen");
for (let el of defaultOpen)
{
    el.click();
}



// toggle open/close element
const hideAll = function (evt, elmtClass)
{
    var target = evt.currentTarget.querySelector(`.${elmtClass}`);
    var flag = target.getAttribute("aria-hidden");


    if (flag !== "true")
    {
        target.style.maxHeight = 0;
        target.style.animationName = "collapse";
        target.style.animationDuration = "0.3s";
        target.setAttribute("aria-hidden", "true");
    }
    if (flag === "true")
    {
        target.style.maxHeight = 500 + "px";
        target.style.animationName = "expand";
        target.style.animationDuration = "0.6s";
        target.setAttribute("aria-hidden", "false");
    }
    //clear animation after toggle
    target.addEventListener('animationend', () =>
    {
        target.style.animationName = null;
        target.style.animationDuration = null;
    })


}
// end here


var now_filmData = {
    name: "nowShowing",
    data: [
        {
            id: 1,
            img_src: "./img/tran-chien-midway.png",
            img_src_992: "./img/truyen-thuyet-ve-quan-tien-the-legend-of-quan-tien-15901234502313_540x225.png",
            score: 8,
            sneak_show: false,
            block_buster: true,
            age_label: "C16",
            film_name: "Trận Chiến Midway",
            film_info: "138 phút - 6.9 IMDb"

        },
        {
            id: 2,
            img_src: "./img/sky-tour-movie-son-tung-m-tp.png",
            img_src_992: "./img/sky-tour-movie-son-tung-m-tp-responsive992_540x225.jpg",
            score: 7.6,
            sneak_show: true,
            block_buster: false,
            age_label: "P",
            film_name: "Sky Tour Movie - Sơn Tùng M-TP",
            film_info: "94 phút"

        },
        {
            id: 3,
            img_src: "./img/tran-chien-midway.png",
            img_src_992: "./img/truyen-thuyet-ve-quan-tien-the-legend-of-quan-tien-15901234502313_540x225.png",
            score: 8,
            sneak_show: false,
            block_buster: false,
            age_label: "C16",
            film_name: "Trận Chiến Midway",
            film_info: "138 phút - 6.9 IMDb"

        },
        {
            id: 4,
            img_src: "./img/sky-tour-movie-son-tung-m-tp.png",
            img_src_992: "./img/sky-tour-movie-son-tung-m-tp-responsive992_540x225.jpg",
            score: 7.6,
            sneak_show: true,
            block_buster: false,
            age_label: "P",
            film_name: "Sky Tour Movie - Sơn Tùng M-TP",
            film_info: "94 phút"

        },
        {
            id: 5,
            img_src: "./img/tran-chien-midway.png",
            img_src_992: "./img/truyen-thuyet-ve-quan-tien-the-legend-of-quan-tien-15901234502313_540x225.png",
            score: 8,
            sneak_show: false,
            block_buster: false,
            age_label: "C16",
            film_name: "Trận Chiến Midway",
            film_info: "138 phút - 6.9 IMDb"

        },
        {
            id: 6,
            img_src: "./img/sky-tour-movie-son-tung-m-tp.png",
            img_src_992: "./img/sky-tour-movie-son-tung-m-tp-responsive992_540x225.jpg",
            score: 7.6,
            sneak_show: true,
            block_buster: false,
            age_label: "P",
            film_name: "Sky Tour Movie - Sơn Tùng M-TP",
            film_info: "94 phút"

        },
        {
            id: 7,
            img_src: "./img/tran-chien-midway.png",
            img_src_992: "./img/truyen-thuyet-ve-quan-tien-the-legend-of-quan-tien-15901234502313_540x225.png",
            score: 8,
            sneak_show: false,
            block_buster: false,
            age_label: "C16",
            film_name: "Trận Chiến Midway",
            film_info: "138 phút - 6.9 IMDb"

        },
        {
            id: 8,
            img_src: "./img/sky-tour-movie-son-tung-m-tp.png",
            img_src_992: "./img/sky-tour-movie-son-tung-m-tp-responsive992_540x225.jpg",
            score: 7.6,
            sneak_show: true,
            block_buster: false,
            age_label: "P",
            film_name: "Sky Tour Movie - Sơn Tùng M-TP",
            film_info: "94 phút"

        },
        {
            id: 9,
            img_src: "./img/tran-chien-midway.png",
            img_src_992: "./img/truyen-thuyet-ve-quan-tien-the-legend-of-quan-tien-15901234502313_540x225.png",
            score: 8,
            sneak_show: false,
            block_buster: false,
            age_label: "C16",
            film_name: "Trận Chiến Midway",
            film_info: "138 phút - 6.9 IMDb"

        },
        {
            id: 10,
            img_src: "./img/sky-tour-movie-son-tung-m-tp.png",
            img_src_992: "./img/sky-tour-movie-son-tung-m-tp-responsive992_540x225.jpg",
            score: 7.6,
            sneak_show: true,
            block_buster: false,
            age_label: "P",
            film_name: "Sky Tour Movie - Sơn Tùng M-TP",
            film_info: "94 phút"

        }
    ]
};
var coming_filmData = {
    name: "coming",
    data: [
        {
            id: 1,
            img_src: "./img/tran-chien-midway.png",
            block_buster: true,
            show_time: "12/06",
            age_label: "C16",
            film_name: "Trận Chiến Midway",
            film_info: "138 phút"

        },
        {
            id: 2,

            img_src: "./img/sky-tour-movie-son-tung-m-tp.png",
            show_time: "12/06",
            block_buster: false,
            age_label: "P",
            film_name: "Sky Tour Movie - Sơn Tùng M-TP",
            film_info: "94 phút"

        },
        {
            id: 3,

            img_src: "./img/tran-chien-midway.png",
            show_time: "12/06",
            block_buster: false,
            age_label: "C16",
            film_name: "Trận Chiến Midway",
            film_info: "138 phút - 6.9 IMDb"

        },
        {
            id: 4,

            img_src: "./img/sky-tour-movie-son-tung-m-tp.png",
            show_time: "12/06",
            block_buster: false,
            age_label: "P",
            film_name: "Sky Tour Movie - Sơn Tùng M-TP",
            film_info: "94 phút"

        },
        {
            id: 5,

            img_src: "./img/tran-chien-midway.png",
            show_time: "12/06",
            block_buster: false,
            age_label: "C16",
            film_name: "Trận Chiến Midway",
            film_info: "138 phút - 6.9 IMDb"

        },
        {
            id: 6,

            img_src: "./img/sky-tour-movie-son-tung-m-tp.png",
            show_time: "12/06",
            block_buster: false,
            age_label: "P",
            film_name: "Sky Tour Movie - Sơn Tùng M-TP",
            film_info: "94 phút"

        },
        {
            id: 7,

            img_src: "./img/tran-chien-midway.png",
            show_time: "12/06",
            block_buster: false,
            age_label: "C16",
            film_name: "Trận Chiến Midway",
            film_info: "138 phút - 6.9 IMDb"

        },
        {
            id: 8,

            img_src: "./img/sky-tour-movie-son-tung-m-tp.png",
            show_time: "12/06",
            block_buster: false,
            age_label: "P",
            film_name: "Sky Tour Movie - Sơn Tùng M-TP",
            film_info: "94 phút"

        },
        {
            id: 9,

            img_src: "./img/tran-chien-midway.png",
            show_time: "19/06",
            block_buster: false,
            age_label: "C16",
            film_name: "Trận Chiến Midway",
            film_info: "138 phút - 6.9 IMDb"

        },
        {
            id: 10,
            img_src: "./img/sky-tour-movie-son-tung-m-tp.png",
            show_time: "15/06",
            block_buster: false,
            age_label: "P",
            film_name: "Sky Tour Movie - Sơn Tùng M-TP",
            film_info: "94 phút"

        },
        {
            id: 11,

            img_src: "./img/tran-chien-midway.png",
            show_time: "19/06",
            block_buster: false,
            age_label: "C16",
            film_name: "Trận Chiến Midway",
            film_info: "138 phút - 6.9 IMDb"

        },
        {
            id: 12,
            img_src: "./img/sky-tour-movie-son-tung-m-tp.png",
            show_time: "15/06",
            block_buster: false,
            age_label: "P",
            film_name: "Sky Tour Movie - Sơn Tùng M-TP",
            film_info: "94 phút"

        }
    ]
};

function createSlide(root, filmData)
{
    var htmlContent = "";
    var closeDIV = "</div>"
    var showNumber = 8;
    var readMore = false;

    if (screen.width <= 992)
    {
        showNumber = 4;
        readMore = true;
    }


    for (let i = 0; i < Math.ceil(filmData.data.length / showNumber); i++)
    {
        htmlContent += `<div class="filmBlock__slide" id="${filmData.name}__slide-${i}">`

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

            if (window.screen.width < 993 && filmSet[j].img_src_992)
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
                <button class="loadmore-btn" id="${filmData.name}-loadmore" data-target="${filmData.name}__slide-${i + 1}">Xem thêm</button>
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
                <img src="./img/icon/pre-order.png" alt="booking" />
              </div>
        `
            }

            if (filmSet[j].block_buster)
            {
                htmlBlockBuster += `
              <div class="filmBlock__film__block-buster--tag">
                <img src="./img/icon/block-buster.png" alt="booking" />
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
                        <img src="./img/icon/star1.png" alt="" />
                        `

                    if (starPoint > Math.floor(starPoint) && (k === Math.floor(starPoint) - 1))
                    {
                        htmlRating += `
                            <img src="./img/icon/star1.2.png" alt="" />
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
                <a href="/#filmBlock" class="play-btn">
                  <img src="./img/icon/play-video.png" alt="" />
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

}

createSlide("nowShowing", now_filmData);
createSlide("comingSoon", coming_filmData);

var nowShowing = document.querySelectorAll("#nowShowing-loadmore");
var coming = document.querySelectorAll("#coming-loadmore");

const loadMoreToggle = (btnList) =>
{
    for (let btn of btnList)
    {
        btn.addEventListener('click', () =>
        {
            var target = btn.dataset.target;
            document.getElementById(target).style.display = "flex";
            btn.style.display = "none";
        })
    }
}

loadMoreToggle(nowShowing);
loadMoreToggle(coming);