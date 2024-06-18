var rev = "fwd";
function titlebar(val){
    var msg  = "Harun Abdullah Rakin";
    var res = " ";
    var speed = 450;
    var pos = val;
    msg = msg;
    var le = msg.length;
    if(rev == "fwd"){
        if(pos < le){
            pos = pos+1;
            scroll = msg.substr(0,pos);
            document.title = scroll;
            timer = window.setTimeout("titlebar("+pos+")",speed);
        }
        else {
            rev = "bwd";
            timer = window.setTimeout("titlebar("+pos+")",speed);
        }
    }

}
titlebar(0);