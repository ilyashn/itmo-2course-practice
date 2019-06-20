function foo() {
    var login = document.forms.form1.login.value;

    if (login.length === 0) {
        login = "Гость";
    }

    var res = checkBox_handling() + select_handling() + radio_handling();

    document.getElementById("ta").textContent = "";

    var ans = login.concat(", ваше количество верных ответов = ");

    var ans2 = res.toString();
    document.getElementById("ta").innerHTML = ans.concat(ans2);
}
function radio_handling() {
    var res = 0;
    var cnt = document.getElementsByName('radio-input');
    for (var i = 0; i < cnt.length; i++) {
        if (cnt[i].checked && i === 1)
            res++;
    }

    return res;
}

function select_handling() {
    var res = 0;
    if (document.forms.form1.s1.value === "o4")
        if (document.forms.form1.s2.value === "o1")
            if (document.forms.form1.s3.value === "o3")
                if (document.forms.form1.s4.value === "o2")
                    res++;

    return res;
}

function checkBox_handling() {
    var res = 0;
    var cnt = document.getElementsByName('cb');
    var count = 0;
    for (var i = 0; i < cnt.length; i++) {
        if (cnt[i].checked)
            if (i !== 0)
                count++;
            else
                return 0;
    }

    if (count === 2)
        res++;

    return res;
}