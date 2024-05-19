const PASSWORD = 'TrustNo1';
let unlockButton = document.getElementById("unlock");
let password = document.getElementById("password");
let launchButton = document.getElementById("launch-btn");
let checkboxes = document.getElementsByClassName("check");
let panel = document.querySelector('.control-panel__inner');
let ranges = document.getElementsByClassName("range");
let rocket = document.querySelector('.rocket');

unlockButton.addEventListener('click', function () {
    if (password.value === PASSWORD) {
        for (let box of checkboxes) {
            box.disabled = false;
        }
        for (let range of ranges) {
            range.disabled = false;
        }
        password.disabled = true;
        unlockButton.disabled = true;
    } else {
        alert("INCORRECT PASSWORD!");
        document.getElementById("password").value = "";
    }
});


checkState = function () {

    let checkBoxesAreReady = 0;
    let leversAreReady = 0;
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            checkBoxesAreReady++;
        } else {
            checkBoxesAreReady--;
        }
    }
            console.log("-> checkBoxesAreReady", checkBoxesAreReady);
    for (let lever of ranges) {
        console.log("-> lever.value", lever.value);
        if (lever.value === "100") {
            leversAreReady++;
        }
    }
            console.log("-> leversAreReady", leversAreReady);

    if (checkBoxesAreReady === 6 && leversAreReady === 5) {
        launchButton.removeAttribute("disabled");
    }
};

panel.onchange = function () {
    checkState()
};

let launch = () => {
	rocket.animate(
		[
			{
				transform: 'translate(0,0)',
			},
			{
				transform: 'rotate(30deg)',
			},
			{
				transform: 'translate(100vw,-100vh)',
			},
		],
		{
			duration: 5000,
		}
	);
}

launchButton.addEventListener('click', launch);
