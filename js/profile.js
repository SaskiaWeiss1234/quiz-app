const darkmodeSwitch = document.querySelector('[data-js="darkmode-checkbox"]');
localStorage.setItem("darkmode", darkmodeSwitch.checked);
if (localStorage.getItem("darkmode") === "true") {
    document.documentElement.classList.add("dark");
    document.body.classList.add("dark");
    darkmodeSwitch.checked = true;
}
darkmodeSwitch.addEventListener('change', () => {
    if (darkmodeSwitch.checked) {
        document.documentElement.classList.add("dark");
        document.body.classList.add("dark");
    } else { 
        document.body.classList.remove("dark"); 
        document.documentElement.classList.remove("dark");
    }
localStorage.setItem("darkmode", darkmodeSwitch.checked);
});