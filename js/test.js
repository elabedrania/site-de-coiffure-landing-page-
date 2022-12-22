



function verif(){
    var name = document.getElementById('nom');
    var last_name = document.getElementById('prenom');
    var email = document.getElementById('mail');
    var tel = document.getElementById('tel');
    
    var alertmsg = document.getElementById('messageAlert');


        if(name.length==0){
            alertmsg.innerHTML='<div class="alert alert-danger" role="alert"> name invalid </div>';
        }
        else if(last_name.length==0){
                    alertmsg.innerHTML='<div class="alert alert-danger" role="alert"> prenom invalid </div>';
            }
        

        else if(email.length==0 || email.indexOf('@')){
               alertmsg.innerHTML='<div class="alert alert-danger" role="alert"> mail invalid </div>';
        
            }

        else if(tel.length==0 || tel.legth<8){
            alertmsg.innerHTML='<div class="alert alert-danger" role="alert"> tel invalid </div>';
        }
    






    // if((name.length==0)&&(last_name.length==0)&&(email.length==0)&&( tel.legth<8)){
        
    //     alertmsg.innerHTML='<div class="alert alert-danger" role="alert"> name invalid </div>';
              
    // }else{
    //     alertmsg.innerHTML='<div class="alert alert-success" role="alert"> name valid </div>';
    // }

    // if(last_name.length==0){
    //         alertmsg.innerHTML='<div class="alert alert-danger" role="alert"> prenom invalid </div>';
    // }else{
    //     alertmsg.innerHTML='<div class="alert alert-success" role="alert"> prenom valid </div>';
    // }

    // if(email.length==0 || email.indexOf('@')){
    //     alertmsg.innerHTML='<div class="alert alert-danger" role="alert"> mail invalid </div>';

    // }else{
    //     alertmsg.innerHTML='<div class="alert alert-success" role="alert"> mail valid </div>';
    // }

    // if(tel.length==0 || tel.legth<8){
    //     alertmsg.innerHTML='<div class="alert alert-danger" role="alert"> tel invalid </div>';
    // }
    // else{
    //     alertmsg.innerHTML='<div class="alert alert-success" role="alert"> tel valid </div>';
    // }


    
}