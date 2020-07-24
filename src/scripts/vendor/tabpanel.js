export const TabPanel = () =>
{
    var rootCollection = document.querySelectorAll(`.tabpanel`);

    rootCollection.forEach(root =>
    {
        var tabLinks = Array.from(root.querySelectorAll(".tab-link")).filter(node =>
        {
            let currentNode = node;
            for (let i = 0; i < 4; i++)
            {
                if (currentNode === root) return currentNode;
                currentNode = currentNode.parentNode;
            }
        });

        var tabContents = root.querySelectorAll(`.tab-content`);
        var defaultTab = root.querySelector(".defaultOpen");
        
    const ClearAll = () =>
    {
        tabLinks.forEach(link =>
        {
            link.classList.remove("active")
            link.classList.remove("defaultOpen");
        });

        tabContents.forEach(content =>
        {
            content.style.display = "none";
        });
    };

    const DefaultOpen = (elmt) =>
    {
        elmt.click();
    };

    const LinkControl = () =>
    {
        tabLinks.forEach((link) =>
        {

            link.onclick = () =>
            {

                const dataControl = root.querySelector(`#${link.dataset.control}`);
                ClearAll();
                link.classList.toggle("active");
                link.classList.toggle("defaultOpen");
                dataControl.style.display = "block";

                const childDefault = dataControl.querySelector(".defaultOpen");
                if (childDefault) DefaultOpen(childDefault);
            }
        })
    };

    if (window.innerWidth > 992)
    {
        tabContents.forEach(el =>
        {
            el.addEventListener('animationstart', () =>
            {
                if (el.children[0].classList.contains("fix-carousel"))
                {
                    $(`.fix-carousel`).slick('setPosition').slick('setPosition');
                }
            });
        })
    }

        LinkControl();
        DefaultOpen(defaultTab)
});

}
