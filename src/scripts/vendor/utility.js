export const toLoginPage = () =>
{
    window.location.assign("./login.html");
};

export const backToHome = () =>
{
    window.location.assign("./index.html");
};

/* Script for scroll to top button */
export const handleScrollTopBtn = () =>
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
};


export const handleHideAll = () =>
{
    var targetList = document.querySelectorAll(`.accordion`);



    const getNextSibling = function (elem, className)
    {

        let sibs = [];

        if (!className) sibs.push(elem);

        while (elem)
        {
            if (elem.classList.contains(className))
            {
                return sibs
            }
            sibs.push(elem);
            elem = elem.nextElementSibling;
        }
        return sibs;
    };

    targetList.forEach(target =>
    {
        let targetToToggle = target;
        let targetToClick = target;
        let sibsList;

        if (target.classList.contains("hideNextElementSibling"))
        {
            targetToToggle = target.nextElementSibling;
            sibsList = getNextSibling(targetToToggle, "hideNextElementSibling");

        };

        if (target.classList.contains("clickMyParent"))
        {
            targetToClick = target.parentNode;
            
        }

        targetToClick.addEventListener("click", () =>
        {
            if (targetToClick.classList.contains("hideNextElementSibling"))
            {
                
                targetToClick.classList.toggle("active");
                targetToClick.scrollIntoView();

                sibsList.forEach(sibs =>
                {
                    if (targetToClick.classList.contains("active"))
                    {
                        sibs.style.display = "block";
                    } else
                    {
                        sibs.style.display = "none";
                    }
                    return;
                });

            };

            var flag = targetToToggle.getAttribute("aria-hidden");
            if (flag !== "true")
            {

                targetToToggle.style.maxHeight = 0;
                targetToToggle.style.animationName = "collapse";
                targetToToggle.style.animationDuration = "0.3s";
                targetToToggle.setAttribute("aria-hidden", "true");

            } else
            {
                targetToToggle.style.maxHeight = 500 + "px";
                targetToToggle.style.animationName = "expand";
                targetToToggle.style.animationDuration = "0.6s";
                targetToToggle.setAttribute("aria-hidden", "false");
            }

            //clear animation after toggle
            targetToToggle.addEventListener('animationend', () =>
            {
                targetToToggle.style.animationName = null;
                targetToToggle.style.animationDuration = null;
            })
        });

        const cinemaMap = targetToClick.querySelector(".content--detail__cinema-map");

        if (cinemaMap)
        {
            cinemaMap.addEventListener("click", event =>
            {
                //Do something here
                event.stopPropagation();
            });
        };


        let timeList = target.querySelectorAll("a");
        if (timeList)
        {
            timeList.forEach(el =>
            {
                el.addEventListener("click", event =>
                {
                    toLoginPage();
                    event.stopPropagation();
                })
            });
        };

    });
};

/* Script for side menu on responsive */
export const handleSideMenuToggle = () =>
{
    const sideMenu = document.getElementById("sideMenu");
    if (sideMenu)
    {


        const openSideMenuBtn = document.getElementById("sideMenuBtn");
        const closeSideMenuBtn = document.getElementById("closeSideMenuBtn");
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
};

/* Script for modal */
export const handleModalToggle = (btn, modal) =>
{
    // Get the modal
    var modal = document.querySelector(modal);
    if (modal)
    {
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
}

/* Script for dropdown */
export const createSelectBox = (rootID) =>
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