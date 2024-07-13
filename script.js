function toggleDetail (e) {
    const target = $(e.target)

    if($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
    } else {
        $(target).html("Less Info").addClass("active")
    }

    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")
    $(detail).slideToggle()
}

function onFormSubmit (e) {
    e.preventDefault()
    const email = $("#inp-email")
    const subject = $("#inp-subject")
    const Message = $("#inp-Message")

    if (!$(email).val()) {
        alert("Harus memasukkan Email")
    } else if (!$(subject).val()) {
        alert("Harus ada Subject")
    } else if (!$(Message).val()) {
        alert("Harus ada Message")
    } else {
        alert("Form sudah di Kirim/Submit")
        $(email).val("")
        $(subject).val("")
        $(Message).val("")
    }
}