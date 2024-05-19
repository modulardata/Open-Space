const PASSWORD = 'TrustNo1';
let unlockButton = document.getElementById("unlock");
let password = document.getElementById("password");
let launchButton = document.getElementById("launch-btn");
let checks = document.getElementsByClassName("check");
let ranges = document.getElementsByClassName("range");

unlockButton.addEventListener('click', function () {
    if (password.value === PASSWORD) {
        for (let box of checks) {
            box.disabled = false;

        }

        for (let range of ranges) {
            range.disabled = false;
        }
        password.disabled = true;
        unlockButton.disabled = true;
        launchButton.disabled = false;
    }
});
