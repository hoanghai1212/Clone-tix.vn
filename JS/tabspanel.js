function openFilm(evt, tabID, clscontent, clslink, clscarousel)
{
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName(clscontent);
   
    for (i = 0; i < tabcontent.length; i++)
    {
        tabcontent[i].style.display ="none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName(clslink);
    for (i = 0; i < tablinks.length; i++)
    {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabID).style.display = "block";
    evt.currentTarget.className += " active";

    for (let el of tabcontent) {
        el.addEventListener('animationstart', (e) =>
        {
            $(clscarousel).slick('setPosition');
        });
        
    }
}

document.getElementById("defaultOpen").click();

var now_filmData = [
    {
        id: "1",
        data: {
            img_src: "./img/tran-chien-midway.png",
            score: 8,
            sneak_show: false,
            block_buster: true,
            age_label: "C16",
            film_name: "Trận Chiến Midway",
            film_info: "138 phút - 6.9 IMDb"
        }
    },
    {
        id: "2",
        data: {
            img_src: "./img/sky-tour-movie-son-tung-m-tp.png",
            score: 7.6,
            sneak_show: true,
            block_buster: false,
            age_label: "P",
            film_name: "Sky Tour Movie - Sơn Tùng M-TP",
            film_info: "94 phút"
        }
    },
    {
        id: "3",
        data: {
            img_src: "./img/tran-chien-midway.png",
            score: 8,
            sneak_show: false,
            block_buster: false,
            age_label: "C16",
            film_name: "Trận Chiến Midway",
            film_info: "138 phút - 6.9 IMDb"
        }
    },
    {
        id: "4",
        data: {
            img_src: "./img/sky-tour-movie-son-tung-m-tp.png",
            score: 7.6,
            sneak_show: true,
            block_buster: false,
            age_label: "P",
            film_name: "Sky Tour Movie - Sơn Tùng M-TP",
            film_info: "94 phút"
        }
    },
    {
        id: "5",
        data: {
            img_src: "./img/tran-chien-midway.png",
            score: 8,
            sneak_show: false,
            block_buster: false,
            age_label: "C16",
            film_name: "Trận Chiến Midway",
            film_info: "138 phút - 6.9 IMDb"
        }
    },
    {
        id: "6",
        data: {
            img_src: "./img/sky-tour-movie-son-tung-m-tp.png",
            score: 7.6,
            sneak_show: true,
            block_buster: false,
            age_label: "P",
            film_name: "Sky Tour Movie - Sơn Tùng M-TP",
            film_info: "94 phút"
        }
    },
    {
        id: "7",
        data: {
            img_src: "./img/tran-chien-midway.png",
            score: 8,
            sneak_show: false,
            block_buster: false,
            age_label: "C16",
            film_name: "Trận Chiến Midway",
            film_info: "138 phút - 6.9 IMDb"
        }
    },
    {
        id: "8",
        data: {
            img_src: "./img/sky-tour-movie-son-tung-m-tp.png",
            score: 7.6,
            sneak_show: true,
            block_buster: false,
            age_label: "P",
            film_name: "Sky Tour Movie - Sơn Tùng M-TP",
            film_info: "94 phút"
        }
    },
    {
        id: "9",
        data: {
            img_src: "./img/tran-chien-midway.png",
            score: 8,
            sneak_show: false,
            block_buster: false,
            age_label: "C16",
            film_name: "Trận Chiến Midway",
            film_info: "138 phút - 6.9 IMDb"
        }
    },
    {
        id: "10",
        data: {
            img_src: "./img/sky-tour-movie-son-tung-m-tp.png",
            score: 7.6,
            sneak_show: true,
            block_buster: false,
            age_label: "P",
            film_name: "Sky Tour Movie - Sơn Tùng M-TP",
            film_info: "94 phút"
        }
    }
];
var coming_filmData = [
    {
        id: "1",
        data: {
            img_src: "./img/tran-chien-midway.png",
            block_buster: true,
            show_time: "12/06",
            age_label: "C16",
            film_name: "Trận Chiến Midway",
            film_info: "138 phút"
        }
    },
    {
        id: "2",
        data: {
            img_src: "./img/sky-tour-movie-son-tung-m-tp.png",
            show_time: "12/06",
            block_buster: false,
            age_label: "P",
            film_name: "Sky Tour Movie - Sơn Tùng M-TP",
            film_info: "94 phút"
        }
    },
    {
        id: "3",
        data: {
            img_src: "./img/tran-chien-midway.png",
            show_time: "12/06",
            block_buster: false,
            age_label: "C16",
            film_name: "Trận Chiến Midway",
            film_info: "138 phút - 6.9 IMDb"
        }
    },
    {
        id: "4",
        data: {
            img_src: "./img/sky-tour-movie-son-tung-m-tp.png",
            show_time: "12/06",
            block_buster: false,
            age_label: "P",
            film_name: "Sky Tour Movie - Sơn Tùng M-TP",
            film_info: "94 phút"
        }
    },
    {
        id: "5",
        data: {
            img_src: "./img/tran-chien-midway.png",
            show_time: "12/06",
            block_buster: false,
            age_label: "C16",
            film_name: "Trận Chiến Midway",
            film_info: "138 phút - 6.9 IMDb"
        }
    },
    {
        id: "6",
        data: {
            img_src: "./img/sky-tour-movie-son-tung-m-tp.png",
            show_time: "12/06",
            block_buster: false,
            age_label: "P",
            film_name: "Sky Tour Movie - Sơn Tùng M-TP",
            film_info: "94 phút"
        }
    },
    {
        id: "7",
        data: {
            img_src: "./img/tran-chien-midway.png",
            show_time: "12/06",
            block_buster: false,
            age_label: "C16",
            film_name: "Trận Chiến Midway",
            film_info: "138 phút - 6.9 IMDb"
        }
    },
    {
        id: "8",
        data: {
            img_src: "./img/sky-tour-movie-son-tung-m-tp.png",
            show_time: "12/06",
            block_buster: false,
            age_label: "P",
            film_name: "Sky Tour Movie - Sơn Tùng M-TP",
            film_info: "94 phút"
        }
    },
    {
        id: "9",
        data: {
            img_src: "./img/tran-chien-midway.png",
            show_time: "19/06",
            block_buster: false,
            age_label: "C16",
            film_name: "Trận Chiến Midway",
            film_info: "138 phút - 6.9 IMDb"
        }
    },
    {
        id: "10",
        data: {
            img_src: "./img/sky-tour-movie-son-tung-m-tp.png",
            show_time: "15/06",
            block_buster: false,
            age_label: "P",
            film_name: "Sky Tour Movie - Sơn Tùng M-TP",
            film_info: "94 phút"
        }
    }
];



function createSlide(root,filmData)
{
    var htmlContent = "";
    var closeDIV = "</div>"


for (let i = 0; i < Math.ceil(filmData.length / 8); i++)
{   
    htmlContent += `<div class="filmBlock__slide">`

    var filmSet = filmData.slice(i*8, 8*(i+1));

    for (let j = 0; j < filmSet.length; j++)
    {
        var htmlRating = '';
        var htmlSneakShow = '';
        var htmlBlockBuster = '';
        var htmlShowTime = '';
        var label = 'orange';
        if (filmSet[j].data.age_label === "P")
        {
            var label = 'green';

        }

        if (filmSet[j].data.sneak_show)
        {
            htmlSneakShow += `
            <span class="filmBlock__film__sneak-show">
                    Suất Chiếu Sớm
                  </span>

                  <div class="filmBlock__film__sneak-show--tag">
                    <img src="./img/pre-order.png" alt="booking" />
                  </div>
            `
        }

        if (filmSet[j].data.block_buster)
        {
            htmlBlockBuster += `
          

                  <div class="filmBlock__film__block-buster--tag">
                    <img src="./img/block-buster.png" alt="booking" />
                  </div>
            `
        }

        
        if (filmSet[j].data.score)
        {
            
            htmlRating += `
                    <span class="filmBlock__film-rating">
                    <p class="filmBlock__film-score">${filmSet[j].data.score}</p>
                    <p class="filmBlock__film-star">
                         `
            var starPoint = Math.floor(filmSet[j].data.score) / 2;
            for (let k = 0; k < starPoint; k++)
            {
                htmlRating += `
                            <img src="./img/star1.png" alt="" />
                            `

                if (starPoint > Math.floor(starPoint) && (k === Math.floor(starPoint) - 1))
                {
                    htmlRating += `
                                <img src="./img/star1.2.png" alt="" />
                                </p>
                                </span>
                                `
                    break;
                } 
            }
            htmlRating += `
                                </p>
                                </span>
                    `
        }

        if (filmSet[j].data.show_time)
        {
            htmlShowTime += `
            <span class="filmBlock__film-showtime">
                ${filmSet[j].data.show_time}
            </span>
            `;
        }

        htmlContent += `
            <div class="filmBlock__film">
                <div class="filmBlock__film-img">
                  <img src=${filmSet[j].data.img_src} alt="" />
                  <div class="filmBlock__film-overlay">
                    <a href="/#filmBlock" class="play-btn">
                      <img src="./img/play-video.png" alt="" />
                    </a>
                  </div>
                  ${htmlShowTime}
                    ${htmlRating}
                    ${htmlSneakShow}
                    ${htmlBlockBuster}
                </div>
                <div class="filmBlock__film-title">
                  <div class="${label}-label">${filmSet[j].data.age_label}</div>
                  <h1>${filmSet[j].data.film_name}</h1>
                </div>
                <div class="filmBlock__film-info">
                  ${filmSet[j].data.film_info}
                </div>
            </div>
        `

      
    }
    htmlContent += closeDIV;
}
document.getElementById(root).children[0].innerHTML = htmlContent;

}

createSlide("nowShowing", now_filmData);
createSlide("comingSoon", coming_filmData);