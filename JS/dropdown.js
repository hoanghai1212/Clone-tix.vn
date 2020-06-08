//Create array of options to be added
var province = [
    { "value": "HCM", "text": "Hồ Chí Minh" },
    { "value": "HNoi", "text": "Hà Nội" },
    { "value": "DN", "text": "Đà Nẵng" },
    { "value": "HP", "text": "Hải Phòng" },
    { "value": "BH", "text": "Biên Hòa" },
    { "value": "NT", "text": "Nha Trang" },
    { "value": "BD", "text": "Bình Dương" },
    { "value": "PT", "text": "Phan Thiết" },
    { "value": "HL", "text": "Hạ Long" },
    { "value": "CT", "text": "Cần Thơ" },
    { "value": "VT", "text": "Vũng Tàu" },
    { "value": "QNhon", "text": "Quy Nhơn" },
    { "value": "Hue", "text": "Huế" },
    { "value": "LX", "text": "Long Xuyên" },
    { "value": "TN", "text": "Thái Nguyên" },
    { "value": "BMT", "text": "Buôn Ma Thuột" },
    { "value": "BG", "text": "Bắc Giang" },
    { "value": "BT", "text": "Bến Tre" },
    { "value": "VT", "text": "Việt Trì" },
    { "value": "NB", "text": "Ninh Bình" },
    { "value": "Vinh", "text": "Vinh" },
    { "value": "BL", "text": "Bảo Lộc" },
    { "value": "DL", "text": "Đà Lạt" },
    { "value": "TV", "text": "Trà Vinh" },
    { "value": "YB", "text": "Yên Bái" },
    { "value": "KG", "text": "Kiên Giang" },
    { "value": "VL", "text": "Vĩnh Long" },
    { "value": "CM", "text": "Cà Mau" },
    { "value": "HG", "text": "Hậu Giang" },
    { "value": "TN", "text": "Tây Ninh" },
    { "value": "TQ", "text": "Tuyên Quang" },
    { "value": "TH", "text": "Thanh Hóa" },
    { "value": "ND", "text": "Nam Định" },
    { "value": "HD", "text": "Hải Dương" },
    { "value": "GL", "text": "Gia Lai" },
    { "value": "HT", "text": "Hà Tĩnh" },
    { "value": "PY", "text": "Phú Yên" },
    { "value": "BL", "text": "Bạc Liêu" },
    { "value": "LA", "text": "Long An" },
    { "value": "DH", "text": "Đồng Hới" },
    { "value": "HNam", "text": "Hà Nam" },
    { "value": "BN", "text": "Bắc Ninh" },
    { "value": "QT", "text": "Quảng Trị" },
    { "value": "KT", "text": "Kon Tum" },
    { "value": "ST", "text": "Sóc Trăng" },
    { "value": "SL", "text": "Sơn La" },
    { "value": "LS", "text": "Lạng Sơn" },
    { "value": "QNgai", "text": "Quảng Ngãi" },
    { "value": "MT", "text": "Mỹ Tho" },
    { "value": "DT", "text": "Đồng Tháp" },
    { "value": "HY", "text": "Hưng Yên" }
];

function createSelectBox(rootID, data)
{
    const root = document.getElementById(rootID);
    const dataL = data.length;

    /*for each element, create a new DIV that will act as the selected item:*/
    const selectedItem = document.createElement("DIV");
    selectedItem.setAttribute("class", "select-selected");
    selectedItem.innerText = data[0].text;     /*default value when page loaded*/
    root.appendChild(selectedItem);


    /*for each element, create a new DIV that will contain the option list:*/
    const optionList = document.createElement("DIV");
    optionList.setAttribute("class", "select-items select-hide");

    for (let j = 0; j < dataL; j++)
    {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        const optionItem = document.createElement("DIV");
        optionItem.setAttribute("data-id", data[j].value)
        optionItem.innerText = data[j].text;

        optionItem.addEventListener("click", function (e)
        {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
            for (let i = 0; i < dataL; i++)
            {
                if (data[i].text === this.innerText)
                {
                    selectedItem.innerText = this.innerText;
                    const currentSelected = this.parentNode.getElementsByClassName("same-as-selected");

                    /*if currentSelected define => remove class from current selected */
                    if (currentSelected[0])
                    {
                        currentSelected[0].removeAttribute("class");
                    }

                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
        });
        optionList.appendChild(optionItem);
    }
    root.appendChild(optionList);


    selectedItem.addEventListener("click", function (e)
    {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        optionList.classList.toggle("select-hide");
    });

    // function closeAllSelect()
    // {
    //     if (optionList)
    //     {
    //         optionList.classList.add("select-hide");
    //     }
    // }
    function closeAllSelect(elmnt)
    {
        /* A function that will close all select boxes in the document,
        except the current select box: */
        var x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++)
        {
            if (elmnt == y[i])
            {
                arrNo.push(i)
            }
        }
        for (i = 0; i < xl; i++)
        {
            if (arrNo.indexOf(i))
            {
                x[i].classList.add("select-hide");
            }
        }
    }
    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);
}

createSelectBox("location-select", province);

var filmName = [
    { "value": "MIDWAY", "text": "Truyền thuyết về quán tiên - The Legend of Quan Tien" },
    { "value": "MIDWAY", "text": "Trận chiến Mid" },
    { "value": "MIDWAY", "text": "Trận chiến " },
    { "value": "MIDWAY", "text": "Trận chiy" },
    { "value": "MIDWAY", "text": "Trận  y" },
    { "value": "MIDWAY", "text": "Trận chiến Mid Way" }
];

var cinemaName = [
    { "value": "CINEMA", "text": "Galaxy" },
    { "value": "CINEMA", "text": "CGV Vimcom Center LandMark 81" },
    { "value": "CINEMA", "text": "Cinestar" },
    { "value": "CINEMA", "text": "Galaxy" },
    { "value": "CINEMA", "text": "Galaxy" },
    { "value": "CINEMA", "text": "Galaxy" },
    { "value": "CINEMA", "text": "Galaxy" }
]

var dateList = [
    { "value": "MON", "text": "Monday" },
    { "value": "TUE", "text": "Tuesday" },
    { "value": "WED", "text": "Wednesday" },
    { "value": "THUR", "text": "Thursday" },
    { "value": "FRI", "text": "Friday" },
    { "value": "SATUR", "text": "Saturday" },
    { "value": "SUN", "text": "Sunday" }
]

var sessionList = [
    { "value": "morning", "text": "10:30" },
    { "value": "lunch", "text": "13:30" },

]

createSelectBox("dropdownselectFilm", filmName);
createSelectBox("dropdownselectCinema", cinemaName);
createSelectBox("dropdownselectDate", dateList);
createSelectBox("dropdownselectSession", sessionList);