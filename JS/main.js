const scrollBtn = document.getElementById("btnScrollTop");

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
        if (event.target == sideMenu)
        {
            sideMenu.classList.toggle("active");
            document.body.style.overflow = "initial";
        }
    })
}

sideMenuBtn.addEventListener("click", () =>
{
    sideMenu.classList.toggle("active");
    document.body.style.overflow = "hidden";
});

closeSideMenu(closeSideMenuBtn);

for (let link of sideMenuLink)
{
    closeSideMenu(link);
}


const toLoginPage = () =>
{
    window.location = "./login.html";
}