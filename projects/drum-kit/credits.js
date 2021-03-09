// <script src="./credits.js"></script>
    document.getElementById("show-credits").addEventListener("click", function (event) {
        const creditList = document.querySelector(".credit-list");
        const creditClassList = creditList.classList;
        const button = document.getElementById("show-credits");
        if (![...creditClassList].includes("visible")) {
            creditClassList.add("visible");
            button.innerHTML = "Hide Credits";
        } else {
            creditClassList.remove("visible");
            button.innerHTML = "Show Credits";
        }
    });