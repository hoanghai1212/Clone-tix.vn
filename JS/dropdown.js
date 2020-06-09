//Create array of options to be added
var province = [
    { value: "HCM", text: "Hồ Chí Minh" },
    { value: "HNoi", text: "Hà Nội" },
    { value: "DN", text: "Đà Nẵng" },
    { value: "HP", text: "Hải Phòng" },
    { value: "BH", text: "Biên Hòa" },
    { value: "NT", text: "Nha Trang" },
    { value: "BD", text: "Bình Dương" },
    { value: "PT", text: "Phan Thiết" },
    { value: "HL", text: "Hạ Long" },
    { value: "CT", text: "Cần Thơ" },
    { value: "VT", text: "Vũng Tàu" },
    { value: "QNhon", text: "Quy Nhơn" },
    { value: "Hue", text: "Huế" },
    { value: "LX", text: "Long Xuyên" },
    { value: "TN", text: "Thái Nguyên" },
    { value: "BMT", text: "Buôn Ma Thuột" },
    { value: "BG", text: "Bắc Giang" },
    { value: "BT", text: "Bến Tre" },
    { value: "VT", text: "Việt Trì" },
    { value: "NB", text: "Ninh Bình" },
    { value: "Vinh", text: "Vinh" },
    { value: "BL", text: "Bảo Lộc" },
    { value: "DL", text: "Đà Lạt" },
    { value: "TV", text: "Trà Vinh" },
    { value: "YB", text: "Yên Bái" },
    { value: "KG", text: "Kiên Giang" },
    { value: "VL", text: "Vĩnh Long" },
    { value: "CM", text: "Cà Mau" },
    { value: "HG", text: "Hậu Giang" },
    { value: "TN", text: "Tây Ninh" },
    { value: "TQ", text: "Tuyên Quang" },
    { value: "TH", text: "Thanh Hóa" },
    { value: "ND", text: "Nam Định" },
    { value: "HD", text: "Hải Dương" },
    { value: "GL", text: "Gia Lai" },
    { value: "HT", text: "Hà Tĩnh" },
    { value: "PY", text: "Phú Yên" },
    { value: "BL", text: "Bạc Liêu" },
    { value: "LA", text: "Long An" },
    { value: "DH", text: "Đồng Hới" },
    { value: "HNam", text: "Hà Nam" },
    { value: "BN", text: "Bắc Ninh" },
    { value: "QT", text: "Quảng Trị" },
    { value: "KT", text: "Kon Tum" },
    { value: "ST", text: "Sóc Trăng" },
    { value: "SL", text: "Sơn La" },
    { value: "LS", text: "Lạng Sơn" },
    { value: "QNgai", text: "Quảng Ngãi" },
    { value: "MT", text: "Mỹ Tho" },
    { value: "DT", text: "Đồng Tháp" },
    { value: "HY", text: "Hưng Yên" }
];


/*Film data */
var filmName = [
    {
        id: "HCM",
        data: [
            { value: "default", text: "Phim" },
            { value: "MIDWAY", text: "Truyền thuyết về quán tiên - The Legend of Quan Tien" },
            { value: "MIDWAY", text: "Trận chiến Mid" },
            { value: "MIDWAY", text: "Trận chiến " },
            { value: "MIDWAY", text: "Trận chiy" },
            { value: "MIDWAY", text: "Trận  y" },
            { value: "MIDWAY", text: "Trận chiến Mid Way" },
        ]
    },
    {
        id: "HNoi",
        data: [
            { value: "default", text: "Phim" },
            { value: "MIDWAY", text: "Trận chiến Mid Way" },
            { value: "MIDWAY", text: "Truyền thuyết về quán tiên - The Legend of Quan Tien" },
        ]
    },
    {
        id: "DN",
        data: [
            { value: "default", text: "Phim" },
            { value: "MIDWAY", text: "Trận chiến Mid Way" },
            { value: "MIDWAY", text: "Trận chiến Mid" },
            { value: "MIDWAY", text: "Trận  y" },
            { value: "MIDWAY", text: "Truyền thuyết về quán tiên - The Legend of Quan Tien" },
        ]
    },
    {
        id: "HP",
        data: [
            { value: "default", text: "Phim" },
            { value: "MIDWAY", text: "Trận chiến Mid" },
            { value: "MIDWAY", text: "Trận  y" },
            { value: "MIDWAY", text: "Trận chiy" },
            { value: "MIDWAY", text: "Trận chiến " },
        ]
    },
    {
        id: "BH",
        data: [
            { value: "default", text: "Phim" },
            { value: "MIDWAY", text: "Trận  y" },
            { value: "MIDWAY", text: "Trận chiy" },
            { value: "MIDWAY", text: "Trận chiến " },
            { value: "MIDWAY", text: "Truyền thuyết về quán tiên - The Legend of Quan Tien" },
        ]
    }

];

/* Cinema data */
var cinemaName = [
    { value: "default", text: "Rạp" },
    { value: "CINEMA", text: "Galaxy" },
    { value: "CINEMA", text: "CGV Vimcom Center LandMark 81" },
    { value: "CINEMA", text: "Cinestar" },
    { value: "CINEMA", text: "Galaxy" },
    { value: "CINEMA", text: "Galaxy" },
    { value: "CINEMA", text: "Galaxy" },
    { value: "CINEMA", text: "Galaxy" }
]

/* Date data*/
var dateList = [
    { value: "default", text: "Ngày xem" },

    { value: "MON", text: "Monday" },
    { value: "TUE", text: "Tuesday" },
    { value: "WED", text: "Wednesday" },
    { value: "THUR", text: "Thursday" },
    { value: "FRI", text: "Friday" },
    { value: "SATUR", text: "Saturday" },
    { value: "SUN", text: "Sunday" }
]

/* Sessison data*/
var sessionList = [
    { value: "default", text: "Suất chiếu" },

    { value: "morning", text: "10:30" },
    { value: "lunch", text: "13:30" },

]

const createSelectBox = (rootID, data) =>
{
    let bodyHTML = "";
    const root = document.getElementById(rootID);
    const dataL = data.length;
    let optionItem2 = "";

    bodyHTML += `
        <div class="select-selected">${data[0].text}</div>
    `;

    for (let j = 0; j < dataL; j++)
    {
        optionItem2 += `
            <div data-id="${data[j].value}">${data[j].text}</div>
        `
    }

    bodyHTML += `
        <div class="select-items select-hide">
        ${optionItem2}
        </div>
    `

    root.innerHTML = bodyHTML;

    const selectedItem = root.children[0];
    const optionList = root.children[1]
    const optionItem = optionList.children;

    for (let i = 0; i < optionItem.length; i++)
    {
        optionItem[i].addEventListener("click", function (e)
        {

            /*when an item is clicked, update the selected item:*/
            selectedItem.innerText = this.innerText;
            /*Get the current element that contain class="same-as-selected" */
            const currentSelected = this.parentNode.getElementsByClassName("same-as-selected");
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
        const selectItemsList = document.getElementsByClassName("select-items");
        const selectedItemList = document.getElementsByClassName("select-selected");


        for (let i = 0; i < selectedItemList.length; i++)
        {
            if (elmnt == selectedItemList[i])
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

}

createSelectBox("location-select", province);


// const root = document.getElementById("location-select");
// const selectedItem = root.children[0];
// const optionList = root.children[1]
// const optionItem = optionList.children;
// console.log(optionItem[0].dataset.id)


// createSelectBox("dropdownselectFilm", filmName[0].data);

// for (let i = 0; i < filmName.length; i++)
// {
//     for (let j = 0; j < optionItem.length; j++)
//     {
//         optionItem[j].addEventListener("click", function (e)
//         {
//             const currentSelected = this.parentNode.getElementsByClassName("same-as-selected");
//             if (currentSelected[0])
//             {
//                 if (filmName[i].id === optionItem[j].dataset.id)
//                 {
//                     createSelectBox("dropdownselectFilm", filmName[i].data);
//                 }

//             }
//         });
//     }
// }


createSelectBox("dropdownselectFilm", filmName[0].data);
createSelectBox("dropdownselectCinema", cinemaName);
createSelectBox("dropdownselectDate", dateList);
createSelectBox("dropdownselectSession", sessionList);