// To get Lead date data
let captchaChecked = false;
function beforeSubmit(event){
    if(captchaChecked){
        let outputdate = document.querySelector('.outputdate');
        let inpudate = document.querySelector('.inputdate');
        console.log('inputdate' , inputdate.value); //string --> date(en_US)

        let formattedDate = new Date(inpudate.value).toLocaleDateString(en-US); // get locale -->system.debug(userInfo.getLocale());
        outputdate.value = formattedDate;
        console.log('outputdate', outputdate.value);
    }else {
        alert('Please check reCAPTCHA box to submit Lead');
        event.preventDefault; //stop submission of form
    }
    
}


function timestamp() { 
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
    } 
} 
setInterval(timestamp, 500); 

// check captcha is checked
function captchaSuccess(){
    captchaChecked = true;
}