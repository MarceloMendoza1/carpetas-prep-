function crearCalculadora (){
    let acumuladora=0
    return {
        valor:function (){
            return acumuladora
        }, 
        sumar:function (num){
         acumuladora+=num 
        }, 
        restar:function (num){
            acumuladora-=num 
        }, 
        reset:function (){
            acumuladora=0
        }

    }
        
}

