'use strict'
// QUIERO RECOGER LOS DATOS DE LOS INPUTS Y CREAR UNA FICHA
function onClick(){
    let nodoName = document.querySelector( '#name' );
    let valueName = nodoName.value;
    let nodoLastname = document.querySelector( '#lastname' );
    let valueLastname = nodoLastname.value;
    let nodoYear = document.querySelector( '#year' );
    let valueYear = nodoYear.value;

    let nodoFiles = document.querySelector( '#files' );

    function pintaMe( parametro ){
        nodoFiles.innerHTML = nodoFiles.innerHTML + parametro;
    }
    let str_html = '';
    // for( i = )

    str_html = '<div class="main__fichas"><div class="main__ficha"><h3 class="main__h3"><span>' + valueName + ' </span><span>' + valueLastname + '</span></h3><div class="main__edad">Edad</div><div class="main__age">' + CalculateMyAge( valueYear ) + '</div><button class="main__ver">Ver</button></div></div>';

    pintaMe(str_html);


    function CalculateMyAge( añoNacimiento ){
        let miEdad = 2022 - añoNacimiento;
        return miEdad;
    }
}