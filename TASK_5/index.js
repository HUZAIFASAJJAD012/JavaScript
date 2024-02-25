let fNAME;

do {
    document.getElementById("btton").onclick = function() {
        fNAME = document.getElementById("input").value; // trim() removes leading/trailing whitespace
        if (fNAME !== "") {
            window.alert(fNAME);
            console.log(String(fNAME));
        } else {
            window.alert("Please enter a valid name.");
        }
    }
} while (fNAME === "");
