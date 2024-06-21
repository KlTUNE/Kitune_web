function profile_contents(open_flag) {
    console.log(open_flag);
    if (open_flag == 0) {
        $("#profile_contents").css("top", "0");
        open_flag = 1;
    }
    else {
        $("#profile_contents").css("top", "100%");
        open_flag = 0;
    }
}

function work_contents(open_flag) {
    console.log(open_flag);
    if (open_flag == 0) {
        $("#work_contents").css("top", "0");
        open_flag = 1;
    }
    else {
        $("#work_contents").css("top", "100%");
        open_flag = 0;
    }
}

function skill_contents(open_flag) {
    if (open_flag == 0) {
        $("#skill_contents").css("top", "0");
        open_flag = 1;
    }
    else {
        $("#skill_contents").css("top", "100%");
        open_flag = 0;
    }
}

function contact_contents(open_flag) {
    console.log(open_flag);
    if (open_flag == 0) {
        $("#contact_contents").css("top", "0");
        open_flag = 1;
    }
    else {
        $("#contact_contents").css("top", "100%");
        open_flag = 0;
    }
}

function konkon_contents(open_flag) {
    console.log(open_flag);
    if (open_flag == 0) {
        $("#konkon_contents").css("top", "0");
        open_flag = 1;
    }
    else {
        $("#konkon_contents").css("top", "100%");
        open_flag = 0;
    }
}