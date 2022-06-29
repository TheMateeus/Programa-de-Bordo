var speed = 0;
var nome = prompt("Digite seu nome");
var nomeNave = prompt("Digite o nome da sua Nave");

function bemVindo(){
    let text = "Bem vindo " +nome+ " o sistema da sua nave "+nomeNave+" está pronto."
    document.getElementById("bv").innerHTML = text;
}

function speedUp(){
    for (let i=0; i<5;i++) {
        speed += 1;
        document.getElementById("up").innerHTML = speed;
    }
    let text = '';
         document.getElementById("inf").innerHTML = text;
         document.getElementById("down").innerHTML = text;
}

function speedDown(){
          if(speed <= 0){
            let text2= "Sua nave está parada";
            document.getElementById("down").innetHTML = text2;
        } else{
            for (let i=0;i<5;i++){
                speed -= 1;
            document.getElementById("down").innerHTML = speed;
        }
    }
    let text = '';
    document.getElementById("inf").innerHTML = text;
    document.getElementById("up").innerHTML = text;
}

function infoNave(){
    let text1 = "A nave "+nomeNave+ " está com a velocidade atual de "+speed+" km/s"
    document.getElementById("inf").innerHTML = text1;
    let text = '';
    document.getElementById("up").innerHTML = text;
    document.getElementById("down").innerHTML = text;
}

function fimPrograma(){
    let text1 = 'none'
    let text = ""
    document.getElementById("buttons").style.display = text1;
    document.getElementById("inf").innerHTML = text;
    document.getElementById("down").innerHTML = text;
    document.getElementById("up").innerHTML = text;

}

function myMenu(){
   let text ="Sistema Iniciado"
   speed = 0;
    document.getElementById("demo").innerHTML = text;
    document.getElementById("buttons").style.display = 'block';
}
