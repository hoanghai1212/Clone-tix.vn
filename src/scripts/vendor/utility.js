export const toLoginPage = () =>
{
    window.location.assign("./login.html");
}
export const backToHome = () =>
{
    window.location.assign("./index.html");
}

export const handleHideAll = () =>
{
    var targetList = document.querySelectorAll(".cinemaBlock__hide-on-click");

    targetList.forEach(target =>
    {
        target.parentNode.addEventListener("click", () =>
        {
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
        });

        target.parentNode.querySelector(".content--detail__cinema-map").addEventListener("click", event =>
        {
            //Do something here
            event.stopPropagation();
        });

        let timeList = target.querySelectorAll("a");
        timeList.forEach(el =>
        {
            el.addEventListener("click", event =>
            {
                toLoginPage();
                event.stopPropagation();
            })
        });
    });
}; 

