// Inicio del script para el reto de las cajas, DOM JS//

//1.Cuando haga click en el btn-cajas-titulo se cambie el título de las cajas//

document.getElementById("btn-cajas-titulo").addEventlistener("click"),()=>

{
  const titulocajas=
        document.getElementById("titulo-cajas"); titulocajas.textContent="Nat";
});

//2.Cambiar el color de la caja//

document.getElementById("btn-color-cajas").addEventListener("click",()=>
{
const cajas =
      document.getElementByClassName("caja1");
  for(let i=0; i < cajas.lenght; i++)
  cajas[i].style.backgroundColor ="pink";
}
                                                            
});