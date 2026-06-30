const darkmodeSwitch = document.querySelector('[data-js="darkmode-checkbox"]');
darkmodeSwitch.addEventListener('change', () => {
    if (darkmodeSwitch.checked) {
        document.body.classList.add("dark");
    } else { document.body.classList.remove("dark"); }

});