let home = document.getElementById('home')
let conta = document.getElementById('conta')

   

window.onclick = function(){

    conta.onclick = function(){
        scroll({top:1500,
            behavior:"smooth",
        })
    
    }
    home.onclick = function(){
        scroll({top:750,
            behavior:"smooth",
        })
    
    }

}