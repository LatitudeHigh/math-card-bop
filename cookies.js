var coins;
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    // console.log(cname + "=" + cvalue + ";" + expires + ";path=/");
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    // console.log(cname)
    let name = cname + "=";
    let ca = document.cookie.split(';');
    // console.log(ca);
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        // console.log(c);
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            // console.log(c.substring(name.length, c.length))
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function setCookieCoins(coins) {
    setCookie("mathCardBopCoins", coins, 7);
   
}
function getCookieCoins() {
     coins = getCookie("mathCardBopCoins")
    if(coins == "") {
        setCookieCoins(50);
        return 50;
    } else {
        return parseInt(coins);
    }
}

