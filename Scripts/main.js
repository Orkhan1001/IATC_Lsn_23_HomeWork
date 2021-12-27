document.getElementById("idPerAndCar").addEventListener('keydown', function(e){
    if(e.keyCode === 37 || e.keyCode === 39 || e.keyCode == 32) {
        e.preventDefault();
        return false;
    }
});

let tPersonage = document.getElementById("idPersonage");
let tCar = document.getElementById("idCar");
let tWeapon = document.getElementById("idWeapon");
let tBody = document.getElementById("tBody");
let q = 1; // change counter

function PerAndCarNotifier(){
    console.log(q);
    let tSelectedItemValue = document.getElementById("idPerAndCar").value;
    if(tSelectedItemValue == ""){
        tBody.style.backgroundImage = "url('Images/pubg_background_1.jpg')"
        tPersonage.style.backgroundImage = "url('Images/pubg_per_4.png')";
        tCar.style.backgroundImage = "url('Images/pubg_car_6.png')";
        tWeapon.style.backgroundImage = "url('Images/pubg_weapon_5.png')";
    }
    return tSelectedItemValue;
}

document.onkeydown = function(e){
    let myKey = e.keyCode;
    let selectedItem = PerAndCarNotifier();
    if(myKey == 32){
        tBody.style.backgroundImage = "url('Images/pubg_background_1.jpg')"
        tPersonage.style.backgroundImage = "url('Images/pubg_per_4.png')";
        tCar.style.backgroundImage = "url('Images/pubg_car_6.png')";
        tWeapon.style.backgroundImage = "url('Images/pubg_weapon_5.png')";
    }
    switch(selectedItem){
        
        // Change Background
        case "background":
            switch(q){
                case 1:
                    if(myKey == 37){
                        tBody.style.backgroundImage = "url('Images/pubg_background_4.png')";
                    }
                    if(myKey == 39){
                        tBody.style.backgroundImage = "url('Images/pubg_background_3.jpg')";
                    }
                break;
        
                case 2:
                    if(myKey == 37){
                        tBody.style.backgroundImage = "url('Images/pubg_background_1.jpg')";
                    }
                    if(myKey == 39){
                        tBody.style.backgroundImage = "url('Images/pubg_background_4.png')";

                    }
                break;
        
                case 3:
                    if(myKey == 37){
                        tBody.style.backgroundImage = "url('Images/pubg_background_3.jpg')";
                    }
                    if(myKey == 39){
                        tBody.style.backgroundImage = "url('Images/pubg_background_1.jpg')";
                    }
                break;
            }
        break;

        // Change Personage
        case "personage":
            switch(q){
                case 1:
                    if(myKey == 37){
                        tPersonage.style.backgroundImage = "url('Images/pubg_per_2.png')";
                    }
                    if(myKey == 39){
                        tPersonage.style.backgroundImage = "url('Images/pubg_per_3.png')";
                    }
                break;
        
                case 2:
                    if(myKey == 37){
                        tPersonage.style.backgroundImage = "url('Images/pubg_per_4.png')";
                    }
                    if(myKey == 39){
                        tPersonage.style.backgroundImage = "url('Images/pubg_per_2.png')";
                    }
                break;
        
                case 3:
                    if(myKey == 37){
                        tPersonage.style.backgroundImage = "url('Images/pubg_per_3.png')";
                    }
                    if(myKey == 39){
                        tPersonage.style.backgroundImage = "url('Images/pubg_per_4.png')";
                    }
                break;
            }
        break;
        
        // Cange Car
        case "car":
            switch(q){
                case 1:
                    if(myKey == 37){
                        tCar.style.backgroundImage = "url('Images/pubg_car_3.png')";
                    }
                    if(myKey == 39){
                        tCar.style.backgroundImage = "url('Images/pubg_car_5.png')";
                    }
                break;
        
                case 2:
                    if(myKey == 37){
                        tCar.style.backgroundImage = "url('Images/pubg_car_6.png')";
                    }
                    if(myKey == 39){
                        tCar.style.backgroundImage = "url('Images/pubg_car_3.png')";
                    }
                break;
        
                case 3:
                    if(myKey == 37){
                        tCar.style.backgroundImage = "url('Images/pubg_car_5.png')";
                    }
                    if(myKey == 39){
                        tCar.style.backgroundImage = "url('Images/pubg_car_6.png')";
                    }
                break;
            }
        break;

        // Change Weapon
        case "weapon":
            switch(q){
                case 1:
                    if(myKey == 37){
                        tWeapon.style.backgroundImage = "url('Images/pubg_weapon_1.png')";
                        console.log("aaaa")
                    }
                    if(myKey == 39){
                        tWeapon.style.backgroundImage = "url('Images/pubg_weapon_2.png')";
                    }
                break;
        
                case 2:
                    if(myKey == 37){
                        tWeapon.style.backgroundImage = "url('Images/pubg_weapon_5.png')";
                    }
                    if(myKey == 39){
                        tWeapon.style.backgroundImage = "url('Images/pubg_weapon_1.png')";
                    }
                break;
        
                case 3:
                    if(myKey == 37){
                        tWeapon.style.backgroundImage = "url('Images/pubg_weapon_2.png')";
                    }
                    if(myKey == 39){
                        tWeapon.style.backgroundImage = "url('Images/pubg_weapon_5.png')";
                    }
                break;
            }
        break;
    }

    if(myKey == 37){q--;}
    if(myKey == 39){q++;}
    if(q == 4){q = 1;}
    if(q == 0){q = 3;}
}