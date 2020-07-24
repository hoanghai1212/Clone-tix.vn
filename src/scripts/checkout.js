import { validateEmail, validatePhone } from "./vendor/utility.js"

const dataValidation = (id, callback) =>
{
    let inputElemt = document.querySelector(id);
    let labelElemt = inputElemt.parentNode.querySelector(`label`);
    let error = inputElemt.parentNode.querySelector(`.checkout__error`);
    let clearBtn = inputElemt.parentNode.parentNode.querySelector(`.clearBtn`);

    const inputAnimation = () =>
    {
        inputElemt.addEventListener("focusin", () =>
        {
            labelElemt.classList.add("onfocus");
        });

        inputElemt.addEventListener("focusout", () =>
        {
            labelElemt.classList.remove("onfocus");

            if (inputElemt.value !== "")
            {
                labelElemt.classList.add("filled");
            } else
            {
                labelElemt.classList.remove("filled");
            }
        });
    };
    inputAnimation();

    inputElemt.addEventListener("keyup", () =>
    {
        if (inputElemt.value !== "")
        {
            clearBtn.style.display = "block";
            if (callback(inputElemt.value) === true)
            {
                error.style.display = "none";
            } else
            {
                error.style.display = "block";
                error.innerHTML = `${labelElemt.innerHTML + ' ' + callback(inputElemt.value)}`;
            }
        } else
        {
            clearBtn.style.display = "none";
            error.style.display = "block";
            error.innerHTML = `${labelElemt.innerHTML} không được bỏ trống`;
        }
    }, false);

    clearBtn.addEventListener("click", () =>
    {
        clearBtn.style.display = "none";
        inputElemt.value = "";
        labelElemt.classList.remove("filled");
        error.style.display = "block";
        error.innerHTML = `${labelElemt.innerHTML} không được bỏ trống`;
    })
}

window.handleChangeProgress = (el) => {
    const CHECKOUT = document.querySelector('.checkout__right');
    const SELECTSEAT = document.querySelector('.checkout__body');
    const PROGRESS = document.querySelector('#progressMobile');
    if (CHECKOUT.style.display === "none")
    {
        CHECKOUT.style.display = "flex";
        SELECTSEAT.style.display = "none";
        el.innerText = "Đặt vé"
        el.classList.add("active")
        PROGRESS.innerText = "03.THANH TOÁN"
    } else
    {
        CHECKOUT.style.display = "none";
        SELECTSEAT.style.display = "flex";
        el.innerText = "Tiếp tục"
        PROGRESS.innerText = "02.CHỌN GHẾ"
    }
}

dataValidation(`#userPhone`, validatePhone);
dataValidation(`#userEmail`, validateEmail);