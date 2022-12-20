//! Iteración #2: Modificando el DOM SI

//* 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const createDiv$$ = document.createElement("div");
console.log(createDiv$$);           //! No veo el resultado en el HTML

//* 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const createDiv2$$ = document.createElement("div");
const createP$$ = document.createElement("p");
const showP$$ = createDiv2$$.appendChild(createP$$);
console.log(showP$$);               //! No veo el resultado en el HTML

//* 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const createDiv3$$ = document.createElement("div");
for (let i = 0; i < 6; i++) {
    let createP3$$ = document.createElement("p");
    createDiv3$$.appendChild(createP3$$);
    
}
console.log(createDiv3$$);          //! No veo el resultado en el HTML


//* 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const createP4$$ = document.createElement("p");
createP4$$.innerText = "Soy dinámico!";
console.log(createP4$$);            //! No veo el resultado en el HTML

//* 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const getH2$$ = document.getElementsByTagName("h2");
getH2$$.textContent = "Wubba Lubba dub dub";
console.log(getH2$$);               //! No veo el resultado en el HTML

//* 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const uList$$ = document.createElement("ul");
for (let i = 0; i < apps.length; i++){
    const iList$$ = document.createElement("il");
    uList$$.appendChild(iList$$);
    iList$$.textContent = apps[i];
}
console.log(uList$$);               //! No veo el resultado en el HTML

//* 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const deleteByClass$$ = document.getElementsByClassName("fn-remove-me");
for ( let i = 0; i < deleteByClass$$.length; i++){
    deleteByClass$$[i].remove();
}
console.log(deleteByClass$$);       //! Quedan 2 por eliminar y no sé el motivo

//* 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//* 	Recuerda que no solo puedes insertar elementos con .appendChild.

const selectDivs$$ = document.getElementsByTagName("div");
const newP$$ = document.createElement("p");
newP$$.textContent = ("Voy en medio!");
selectDivs$$[1].appendChild(newP$$);
// document.body.insertBefore(newP$$,selectDivs$$);
console.log(newP$$);                //! No sé cómo funciona ni hacerlo sin appendChild

//* 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const selectDivsByClass$$ = document.getElementsByClassName("fn-insert-here");
const pInside$$ = document.createElement("p");
pInside$$.textContent = ("Voy dentro!");
for ( let i = 0; i < selectDivsByClass$$.length; i++){
selectDivsByClass$$[i].appendChild(pInside$$);
}


console.log(selectDivsByClass$$.length);   //! Me lo pone en un div pero no en el otro

