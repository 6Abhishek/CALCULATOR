let i=0
function changeTheme(){
    i++
    switch(i){
        case 1:
            document.getElementsByClassName("frame")[0].style.backgroundColor="#DFC57B"
            break;
        case 2:
            document.getElementsByClassName("frame")[0].style.backgroundColor="#E8E8E8"
            break;
        case 3:
            document.getElementsByClassName("frame")[0].style.backgroundColor="#FFDE59"
            break;
        case 4:
            document.getElementsByClassName("frame")[0].style.backgroundColor="#CC6CE7"
            break;
        case 5:
            document.getElementsByClassName("frame")[0].style.backgroundColor="#8D6F64"
            break;
        case 6:
            document.getElementsByClassName("frame")[0].style.backgroundColor="#EFC3CA"
            break;
        case 7:
            document.getElementsByClassName("frame")[0].style.backgroundColor="#E7DDFF"
            break;
        case 8:
            document.getElementsByClassName("frame")[0].style.backgroundColor="#FFECA1"
            break;
    }
    if(i==8){
        i=0
    }
}