

// Pertenezco a uno de los siguientes grupos y me quiero vacunar:
// - Mayores de 18 años que residan en un municipio fronterizo del pais
// - Embarazadas mayores de 18 años con mas de 9 semanas de gestacion
// - Personas que cumplen 30 años o mas este año

// declaracion de variables
var zona;
var birthdayYear;
var year;
var sex; 

//asignacion de valores
year = parseInt(new Date().getFullYear());

birthdayYear= parseInt(prompt('¿En que año naciste?'));
edad = year - birthdayYear;
if (edad >=18){
    //alert("tienes mas de 18");
    sex= prompt('¿Cual es tu Sexo? M/F').toUpperCase();
    //alert("tu sexo es: " + sex);
    if (sex == "M"){
        //alert("hombre");
        zona= prompt('¿Vives en la frontera? S/N').toUpperCase(); 
        if (zona == "S") {
            //alert("vive en la frontera");
            alert("Te puedes vacunar");
        } else if(edad >=30){
            alert("Te puedes vacunar");
        }else{
            alert("No puedes vacunar");
        }
    }else{
        //Es mujer
        gravidez = prompt('¿Estas embarazada? S/N').toUpperCase();
        if (gravidez == "S") {
            edadGestacional = parseInt(prompt('¿Cuantas semanas de embarazo tienes?'));
            if (edadGestacional >= 9){
                alert("Te puedes vacunar");
            }else{
                alert("No te puedes vacunar");
            }
        }else if(edad >=30){
            alert("Te puedes vacunar");
        }else{
            alert("No puedes vacunar");
        }
    }
}else {
        alert("No puedes vacunar");
    }


