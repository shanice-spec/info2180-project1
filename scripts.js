onload= function(){
    var email= document.getElementById("email");
    var message= document.getElementsByClassName('message')[0];
    
    this.addEventListener('submit', (e)=>{
        e.preventDefault();
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
            message.innerHTML= `Thank you! your email address ${email.value} has been added to our mailing list` ;
            email.value='';
        }
        else{
            message.innerHTML='Please enter a valid email address';
            email.value='';
        }
        
    })
}
