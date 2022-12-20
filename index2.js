//! Iteración #2: Modificando el DOM SI

//* 2.1 Inserta dinamicamente en un html un div vacio con javascript.

// crear el div ✅
// insertarlo en el HTML ✅

const createDiv$$ = document.createElement("div");
document.body.appendChild(createDiv$$);

//* 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

// crear el DIV ✅
// insertarlo en el HTML ✅
// meter la P en el DIV ✅
// insertarlo el DIV en el HTML ✅

const createDiv2$$ = document.createElement("div");
const createP$$ = document.createElement("p");
createDiv2$$.appendChild(createP$$);
document.body.appendChild(createDiv2$$);

//* 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

// crear el DIV ✅
// insertarlo en el HTML ✅
// meter la P en el DIV ✅
// insertar el DIV en el HTML ✅

const createDiv3$$ = document.createElement("div");
for (let i = 0; i < 6; i++) {
    let createP3$$ = document.createElement("p");
    createDiv3$$.appendChild(createP3$$);    
}
document.body.appendChild(createDiv3$$);

//* 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

// crear el P ✅
// añadir texto a P ✅
// insertar el P en el HTML ✅

const createP4$$ = document.createElement("p");
createP4$$.innerText = "Soy dinámico!";
document.body.appendChild(createP4$$);

//* 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

// localizar el H2 con la clase elegida ✅
// añadir texto a H2 ✅

const getH2$$ = document.querySelector("h2.fn-insert-here");
getH2$$.textContent = "Wubba Lubba dub dub";

//* 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

// crear un UL ✅
// hacer un bucle que cree los LI ✅
// en el bucle añadir las apps en el LI ✅
// hacerlo realidad ✅


const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const uList$$ = document.createElement("ul");
for (let i = 0; i < apps.length; i++){
    const iList$$ = document.createElement("li");
    uList$$.appendChild(iList$$);
    iList$$.textContent = apps[i];
}
document.body.appendChild(uList$$);

//* 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

// seleccionar TODOS los objetos con la clase fn-remove-me ✅
// hacer un bucle para borrar uno a uno los elementos ✅

const deleteByClass$$ = document.querySelectorAll(".fn-remove-me");
for ( let i = 0; i < deleteByClass$$.length; i++){
    deleteByClass$$[i].remove();
}

//* 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//* 	Recuerda que no solo puedes insertar elementos con .appendChild.

// crear un P ✅
// insertar texto a P ✅
// seleccionar los DIV ✅
// insertar P entre los DIV ✅
// hacerlo realidad ✅

const newP$$ = document.createElement("p");
newP$$.textContent = "Voy en medio!";
const selectDivs$$ = document.querySelectorAll("div");
// la posición 1 de mis selectDivs$$ es el que va detrás justo de la P
document.body.insertBefore(newP$$,selectDivs$$[1]);

//* 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

// crear un P ✅
// insertar texto a P ✅
// seleccionar los DIV con la clase fn-insert-here ✅
// insertar P en los DIV ✅
// hacerlo realidad ✅

const selectedDivs$$ = document.querySelectorAll(".fn-insert-here");
for ( const div of selectedDivs$$){
    const pInside$$ = document.createElement("p");
    pInside$$.textContent = "Voy dentro!";
    div.appendChild(pInside$$);
}


