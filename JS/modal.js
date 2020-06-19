const modalDataInit = (rootID, data) =>
{
    let bodyHTML = "";
    const root = document.getElementById(rootID);

    for (let j = 0; j < data.length; j++)
    {
        bodyHTML += `
            <div data-id="${data[j].value}">${data[j].text}</div>
        `
    }
    root.innerHTML = bodyHTML;
}

const modalToggle = (btn, modal) =>
{
    // Get the modal
    var modal = document.getElementById(modal);

    // Get the button that opens the modal
    var btn = document.getElementById(btn);

    //Get the location element
    var location = modal.children[0].children[0].children;

    // When the user clicks on the button, open the modal
    btn.addEventListener('click', () =>
    {
        modal.style.display = "block";
    })

    // When the user clicks on location, close the modal
    for (let el of location)
    {
        el.addEventListener('click', () =>
        {
            btn.innerText = el.innerText;
            modal.style.display = "none";
        })
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event)
    {
        if (event.target == modal)
        {
            modal.style.display = "none";
        }

    }

}

modalDataInit("modalWrapper", province);
modalToggle("modalBtn", "modalLocation");