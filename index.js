alert("申し訳ございません。現在、このページはメンテナンス中です。");

function profile_contents(aa) {
    console.log(aa);
    if (aa == 0) {
        $("#profile_contents").css("top", "0");
        aa = 1;
    }
    else {
        $("#profile_contents").css("top", "100%");
        aa = 0;
    }
}

function work_contents(aa) {
    console.log(aa);
    if (aa == 0) {
        $("#work_contents").css("top", "0");
        aa = 1;
    }
    else {
        $("#work_contents").css("top", "100%");
        aa = 0;
    }
}

function skill_contents(aa) {
    if (aa == 0) {
        $("#skill_contents").css("top", "0");
        aa = 1;
    }
    else {
        $("#skill_contents").css("top", "100%");
        aa = 0;
    }
}

function contact_contents(aa) {
    console.log(aa);
    if (aa == 0) {
        $("#contact_contents").css("top", "0");
        aa = 1;
    }
    else {
        $("#contact_contents").css("top", "100%");
        aa = 0;
    }
}

function konkon_contents(aa) {
    console.log(aa);
    if (aa == 0) {
        $("#konkon_contents").css("top", "0");
        aa = 1;
    }
    else {
        $("#konkon_contents").css("top", "100%");
        aa = 0;
    }
}