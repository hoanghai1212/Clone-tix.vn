import { validateEmail, validatePhone } from "./vendor/utility.js"


let labelList = document.querySelector(`#checkOutForm`).querySelectorAll(`input`);

labelList.forEach(el =>
{
    el.addEventListener("focusin", () =>
    {
        el.parentNode.querySelector(`label`).classList.toggle("onfocus");
    });

    el.addEventListener("focusout", () =>
    {
        el.parentNode.querySelector(`label`).classList.toggle("onfocus");
    });
})

const dataValidation = (id, callback) =>
{
    let inputElemt = document.querySelector(id);
    let labelElemt = inputElemt.parentNode.querySelector(`label`);
    let error = inputElemt.parentNode.querySelector(`.checkout__error`);

    inputElemt.addEventListener("keyup", () =>
    {
        if (inputElemt.value !== "")
        {
            if (callback(inputElemt.value) === true)
            {
                (error.style.display = "none");
            } else
            {
                (error.style.display = "block");
                (error.innerHTML = `${labelElemt.innerHTML + ' ' + callback(inputElemt.value)}`);

            }
        } else
        {
            (error.style.display = "block");
            (error.innerHTML = `${labelElemt.innerHTML} không được bỏ trống`);
        }
    }, false);
}

dataValidation(`#userPhone`, validatePhone);
dataValidation(`#userEmail`, validateEmail);