

// Pertenezco a uno de los siguientes grupos y me quiero vacunar:
// - Mayores de 18 años que residan en un municipio fronterizo del pais
// - Embarazadas mayores de 18 años con mas de 9 semanas de gestacion
// - Personas que cumplen 30 años o mas este año

// declaracion de variables
var zona;
var edad;
var fechaNacimiento;
var gravidez;
var edadGestacional;
var birthdayYear;
var anios;
var year;

//asignacion de valores
year = parseInt(new Date().getFullYear());
zona = "frontera";
edad = 18;
gravidez = true;
edadGestacional = 7;
birthdayYear = 1976;
anios = year - birthdayYear;

if(zona == "frontera" && edad >=118 || gravidez == true && edadGestacional >= 9 && edad>=18 || zona == "frontera" && anios > 30){
    alert("te puedes vacunar");
}
