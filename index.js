function prime() {
    var n = document.getElementById("input").value;
    n = parseInt(n);
    var check = parseInt(n);
    switch (n) {
        case 1: document.getElementById("result").value = " Not Prime Number"; break;
        case 2: document.getElementById("result").value = " Prime Number"; break;
        default: for (let i = 2; i <= n; i = i + 1) {
            if (check === i) {
                document.getElementById("result").value = "Prime Number";
                break;
            }
            else
                if (n % i === 0) {
                    document.getElementById("result").value = "Composite Number";
                    break;
                }
        }
    }

}


