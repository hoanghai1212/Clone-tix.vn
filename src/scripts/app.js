/* Script for scroll to top button */
const handleScrollTopBtn = function ()
{
    const scrollBtn = document.querySelector("#btnScrollTop");

    if (scrollBtn)
    {
        document.addEventListener('scroll', () => 
        {
            if (document.documentElement.scrollTop === 0)
            {
                scrollBtn.style.visibility = "hidden";
                scrollBtn.style.opacity = 0;
            } else
            {
                scrollBtn.style.visibility = "visible";
                scrollBtn.style.opacity = 1;
            }
        })

        scrollBtn.addEventListener('click', () => document.documentElement.scrollTop = 0);
    }
}

/* Script for side menu on responsive */
const handleSideMenuToggle = function ()
{
    const openSideMenuBtn = document.getElementById("sideMenuBtn");
    const closeSideMenuBtn = document.getElementById("closeSideMenuBtn");
    const sideMenu = document.getElementById("sideMenu");
    const sideMenuLink = document.querySelectorAll("#sideMenuLink");

    const closeSideMenu = (el) =>
    {
        el.addEventListener('click', () =>
        {
            sideMenu.classList.toggle("active");
            document.body.style.overflow = "initial";
        })

        window.addEventListener('click', (event) =>
        {
            if (event.target === sideMenu)
            {
                sideMenu.classList.toggle("active");
                document.body.style.overflow = "initial";
            }
        })
    }


    openSideMenuBtn.addEventListener("click", () =>
    {
        sideMenu.classList.toggle("active");
        document.body.style.overflow = "hidden";
    });

    closeSideMenu(closeSideMenuBtn);

    for (let link of sideMenuLink)
    {
        closeSideMenu(link);
    }
}

/* Script for login button, login page */
const toLoginPage = () =>
{
    window.location = "./login.html";
}
const backToHome = () =>
{
    window.location = "./index.html";
}
const handleHideAll = function (evt, elmtClass)
{
    var target = evt.currentTarget.querySelector(`.${elmtClass}`);
    var flag = target.getAttribute("aria-hidden");


    if (flag !== "true")
    {
        target.style.maxHeight = 0;
        target.style.animationName = "collapse";
        target.style.animationDuration = "0.3s";
        target.setAttribute("aria-hidden", "true");
    } else
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

/* Script for modal */
const handleModalToggle = (btn, modal) =>
{
    // Get the modal
    var modal = document.querySelector(modal);

    // Get the button that opens the modal
    var btn = document.querySelector(btn);

    //Get the location element
    var locationWrapper = document.querySelector(`#${modal.dataset.target}`);
    var location = locationWrapper.children;

    // When the user clicks on the button, open the modal
    btn.addEventListener('click', () =>
    {
        modal.style.display = "block";
    })

    // When the user clicks on location, close the modal, change btn text to chosing option
    for (let el of location)
    {
        el.addEventListener('click', () =>
        {
            btn.innerText = el.innerText;
            modal.style.display = "none";
        })
    }

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', (event) =>
    {
        if (event.target === modal)
        {
            modal.style.display = "none";
        }
    })
}

/* Script for tab panel carousel */
function toggleTab(evt, tabID)
{
    var currentTab = document.getElementById(tabID);
    var currentTargetDataSet = evt.currentTarget.dataset;

    var tabcontent = document.getElementsByClassName(currentTargetDataSet.content);
    var tablinks = document.getElementsByClassName(currentTargetDataSet.link);

    for (let i = 0; i < tablinks.length; i++)
    {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        tabcontent[i].style.display = "none";
    }

    currentTab.style.display = "block";
    evt.currentTarget.className += " active";

    // FIX SLICK CAROUSEL NOT WORKING WHEN TAB DISPLAY NONE IF TABS HAVE SLICK
    if (currentTargetDataSet.carousel && window.innerWidth > 992)
    {
        for (let el of tabcontent)
        {
            el.addEventListener('animationstart', () =>
            {
                $(`.${currentTargetDataSet.carousel}`).slick('setPosition');
            });
        }
    }

    //for multiple tab panel
    var childDefault = currentTab.querySelector(".defaultOpenChild");
    if (childDefault)
    {
        childDefault.click();
    }
}

var now_filmData = {
    name: "nowShowing",
    data: [
        {
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

var coming_filmData = {
    name: "coming",
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

function createSlide(root, filmData)
{
    var htmlContent = "";
    document.getElementById(root).children[0].innerHTML = htmlContent;
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
}

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

//Click to open default tab on loaded
var defaultOpen = document.getElementsByClassName("defaultOpen");
for (let el of defaultOpen)
{
    el.click();
}


window.onresize = function ()
{
    var comingCarousel = $('.comingSoon__carousel');
    var nowShowingCarousel = $('.nowShowing__carousel');
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
        loadMoreToggle(document.querySelectorAll("#nowShowing-loadmore"));
        loadMoreToggle(document.querySelectorAll("#coming-loadmore"));
    }

}

/* End of Script for tab panel carousel */


/* Script for dropdown */
const createSelectBox = function (rootID)
{
    const root = document.querySelector(rootID);
    if (root)
    {
        const selectedItem = root.querySelector(".select-selected");
        const optionList = root.querySelector(".select-items");
        const optionItem = optionList.children;

        for (let i = 0; i < optionItem.length; i++)
        {
            optionItem[i].addEventListener("click", function ()
            {
                /*when an item is clicked, update the selected item:*/
                selectedItem.innerText = this.innerText;
                /*Get the current element that contain class="same-as-selected" */
                const currentSelected = optionList.querySelectorAll(".same-as-selected");
                /*if currentSelected define => remove class from current selected */
                if (currentSelected[0])
                {
                    currentSelected[0].removeAttribute("class");
                }
                /*Set class same-as-selected to clicked option */
                this.setAttribute("class", "same-as-selected");
            });
        }

        selectedItem.addEventListener("click", function (e)
        {
            /*when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/
            e.stopPropagation();
            closeAllSelect(this);
            optionList.classList.toggle("select-hide");
        });

        function closeAllSelect(elmnt)
        {
            /* A function that will close all select boxes in the document,
            except the current select box: */
            const arrNo = [];
            const selectItemsList = document.querySelectorAll(".select-items");
            const selectedItemList = document.querySelectorAll(".select-selected");

            for (let i = 0; i < selectedItemList.length; i++)
            {
                if (elmnt === selectedItemList[i])
                {
                    arrNo.push(i)
                }
            }
            for (let i = 0; i < selectItemsList.length; i++)
            {
                if (arrNo.indexOf(i))
                {
                    selectItemsList[i].classList.add("select-hide");
                }
            }
        }
        /*if the user clicks anywhere outside the select box,
        then close all select boxes:*/
        document.addEventListener("click", closeAllSelect);
    } else 
    {
        return false;
    }
}


/*Run script*/
$(document).ready(function ()
{
    createSelectBox("#location-select");
    createSelectBox("#dropdownselectFilm");
    createSelectBox("#dropdownselectCinema");
    createSelectBox("#dropdownselectDate");
    createSelectBox("#dropdownselectSession");

    createSlide("nowShowing", now_filmData);
    createSlide("comingSoon", coming_filmData);

    loadMoreToggle(document.querySelectorAll("#nowShowing-loadmore"));
    loadMoreToggle(document.querySelectorAll("#coming-loadmore"));
    
    handleModalToggle("#modalBtn", "#modalLocation");
    handleSideMenuToggle();
    handleScrollTopBtn();
})