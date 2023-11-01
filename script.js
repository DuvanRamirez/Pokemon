
async function consumeApiWithAxios(url){
    try{
        const response = await axios.get(url);
        console.log(`la petición a la api se completo correctamente con status: ${response.status}`);
        return await response.data;
        
        
    } catch(error){
        console.error(`fallo la petición a la api con error: ${error.message}`);
    }    
}
let Palabra="";
function buscar(){
    const palabra = document.getElementById("entrada");
    Palabra=palabra.value;
    const respuestaPeticion = consumeApiWithAxios('https://pokeapi.co/api/v2/pokemon/'+ Palabra);
    const mainElement = document.querySelector("main");
    mainElement.innerHTML = "";
    console.log(respuestaPeticion);
    if(Palabra.length !== 0){
        procesarDatosRespuesta(respuestaPeticion);
    }
    event.preventDefault(); 
}


async function procesarDatosRespuesta(resp){
    const respApi = await resp;
    const main = document.querySelector('main');
    const contenedor = document.createElement('div');
    contenedor.setAttribute('class', 'container');
    main.appendChild(contenedor);

    const pokemon = document.createElement('div');
    pokemon.setAttribute('class', 'pokemon');
    contenedor.appendChild(pokemon);

    const encabezado = document.createElement('div');
    encabezado.setAttribute('class', 'encabezado');
    pokemon.appendChild(encabezado);
    
    const descripcion = document.createElement('div');
    descripcion.setAttribute('class', 'descripcion');
    pokemon.appendChild(descripcion);

    //nombre
    const datos2 = respApi.name;
    const pokemonName = document.createElement('div');
    pokemonName.setAttribute('class', 'pokemon-name'); 
    const Name = document.createElement('h1');
    Name.innerHTML = `${datos2}`;
    pokemonName.appendChild(Name);
    encabezado.appendChild(pokemonName);
    //id
    const datos = respApi.id;
    const pokemonid = document.createElement('div');
    pokemonid.setAttribute('class', 'pokemon-id'); 
    const id = document.createElement('h3');
    id.innerHTML = `<strong> N.º </strong>${datos}`;
    pokemonid.appendChild(id);
    encabezado.appendChild(pokemonid);

    

    //imagen
    const datos3 = respApi.sprites;
    const pokemonImg = document.createElement('div');
    pokemonImg.setAttribute('class', 'pokemon-pic');
    const img = document.createElement('img');
    img.setAttribute('src', datos3.other["official-artwork"].front_default);
    pokemonImg.appendChild(img);
    pokemon.appendChild(pokemonImg);

    //abilities
    const datos4 = respApi.abilities;
    const contenedor_abilities = document.createElement('div');
    contenedor_abilities.setAttribute('class', 'contenedor_abilities');
    const pokemonabilities = document.createElement('div');
    const ability = document.createElement('h1');
    pokemonabilities.setAttribute('class', 'pokemon-ability');
    ability.innerHTML = `<strong>Abilities: </strong>`;
    pokemonabilities.appendChild(ability);
    for(dato of datos4){
        const abilities = document.createElement('h2');
        abilities.innerHTML = `${dato.ability.name}`;
        pokemonabilities.appendChild(abilities);
        contenedor_abilities.appendChild(pokemonabilities);
        contenedor.appendChild(contenedor_abilities);
    }
    //moves
    const datos5 = respApi.moves;
    const pokemonmove = document.createElement('div');
    const move = document.createElement('h1');
    pokemonmove.setAttribute('class', 'pokemon-move');
    move.innerHTML = `<strong>Moves: </strong>`;
    pokemonmove.appendChild(move);
    for(dato of datos5){
        const moves = document.createElement('h2');
        moves.innerHTML = `${dato.move.name}`;
        pokemonmove.appendChild(moves);
        contenedor.appendChild(pokemonmove);
    }
    
     //descripcion
     const datos6 = respApi.height;
     const pokemonheight = document.createElement('div');
     const height = document.createElement('p');
     pokemonheight.setAttribute('class', 'pokemon-height');
     height.innerHTML = `<strong>height: </strong>${(datos6*0.1).toFixed(1)}<strong>m</strong>`;
     pokemonheight.appendChild(height);
     descripcion.appendChild(pokemonheight);

     const datos7 = respApi.weight;
     const pokemonweight = document.createElement('div');
     const weight = document.createElement('p');
     pokemonweight.setAttribute('class', 'pokemon-weight');
     weight.innerHTML = `<strong>weight: </strong>${(datos7*0.1).toFixed(1)}<strong>kg</strong>`;
     
     pokemonweight.appendChild(weight);
     descripcion.appendChild(pokemonweight);

    const datos8 = respApi.types;
    for(dato of datos8){
        const pokemontype = document.createElement('div');
        const types = document.createElement('p');
        types.innerHTML = `${dato.type.name}`;
        pokemontype.setAttribute('class', `${dato.type.name}`);
        pokemontype.appendChild(types);
        descripcion.appendChild(pokemontype);

        if((dato.type.name)=='normal'){
            pokemon.style.backgroundColor = '#A8A878';
            pokemonmove.style.backgroundColor = '#A8A878';
            pokemonabilities.style.backgroundColor = '#A8A878';
        }
        else if((dato.type.name)=='fire'){
            pokemon.style.backgroundColor = '#F08030';
            pokemonmove.style.backgroundColor = '#F08030';
            pokemonabilities.style.backgroundColor = '#F08030';
        }
        else if((dato.type.name)=='water'){
            pokemon.style.backgroundColor = '#6890F0';
            pokemonmove.style.backgroundColor = '#6890F0';
            pokemonabilities.style.backgroundColor = '#6890F0';
        }
        else if((dato.type.name)=='grass'){
            pokemon.style.backgroundColor = '#78C850';
            pokemonmove.style.backgroundColor = '#78C850';
            pokemonabilities.style.backgroundColor = '#78C850'; 
        }
        else if((dato.type.name)=='electric'){
            pokemon.style.backgroundColor = '#F8D030';
            pokemonmove.style.backgroundColor = '#F8D030';
            pokemonabilities.style.backgroundColor = '#F8D030';
        }
        else if((dato.type.name)=='ice'){
            pokemon.style.backgroundColor = '#98D8D8'; 
            pokemonmove.style.backgroundColor = '#98D8D8';
            pokemonabilities.style.backgroundColor = '#98D8D8';
        }
        else if((dato.type.name)=='fighting'){
            pokemon.style.backgroundColor = '#C03028'; 
            pokemonmove.style.backgroundColor = '#C03028';
            pokemonabilities.style.backgroundColor = '#C03028';
        }
        else if((dato.type.name)=='poison'){
            pokemon.style.backgroundColor = '#A040A0';
            pokemonmove.style.backgroundColor = '#A040A0';
            pokemonabilities.style.backgroundColor = '#A040A0';
        }
        else if((dato.type.name)=='ground'){
            pokemon.style.backgroundColor = '#E0C068';
            pokemonmove.style.backgroundColor = '#E0C068';
            pokemonabilities.style.backgroundColor = '#E0C068';
        }
        else if((dato.type.name)=='flying'){
            pokemon.style.backgroundColor = '#A890F0';
            pokemonmove.style.backgroundColor = '#A890F0';
            pokemonabilities.style.backgroundColor = '#A890F0'; 
        }
        else if((dato.type.name)=='psychic'){
            pokemon.style.backgroundColor = '#F85888';
            pokemonmove.style.backgroundColor = '#F85888';
            pokemonabilities.style.backgroundColor = '#F85888';
        }
        else if((dato.type.name)=='bug'){
            pokemon.style.backgroundColor = '#A8B820';
            pokemonmove.style.backgroundColor = '#A8B820';
            pokemonabilities.style.backgroundColor = '#A8B820';
        }
        else if((dato.type.name)=='rock'){
            pokemon.style.backgroundColor = '#B8A038';
            pokemonmove.style.backgroundColor = '#B8A038';
            pokemonabilities.style.backgroundColor = '#B8A038';
        }
        else if((dato.type.name)=='ghost'){
            pokemon.style.backgroundColor = '#705898';
            pokemonmove.style.backgroundColor = '#705898';
            pokemonabilities.style.backgroundColor = '#705898';
        }
        else if((dato.type.name)=='dark'){
            pokemon.style.backgroundColor = '#705848';
            pokemonmove.style.backgroundColor = '#705848';
            pokemonabilities.style.backgroundColor = '#705848';
        }
        else if((dato.type.name)=='dragon'){
            pokemon.style.backgroundColor = '#7038F8';
            pokemonmove.style.backgroundColor = '#7038F8';
            pokemonabilities.style.backgroundColor = '#7038F8';
        }
        else if((dato.type.name)=='steel'){
            pokemon.style.backgroundColor = '#B8B8D0';
            pokemonmove.style.backgroundColor = '#B8B8D0';
            pokemonabilities.style.backgroundColor = '#B8B8D0';
        }
        else if((dato.type.name)=='fairy'){
            pokemon.style.backgroundColor = '#F0B6BC';
            pokemonmove.style.backgroundColor = '#F0B6BC';
            pokemonabilities.style.backgroundColor = '#F0B6BC';
        }

    }
    //puntos
    const datos9 = respApi.stats;
    const contenedor_pokemonpunto = document.createElement('div');
    contenedor_pokemonpunto.setAttribute('class', 'contenedor-pokemonpunto');
    const titulo = document.createElement('h1');
    titulo.innerHTML = `<strong>Base point: </strong>`;
    contenedor_pokemonpunto.appendChild(titulo);
    pokemonabilities.appendChild(contenedor_pokemonpunto);
    for(dato of datos9){
        const pokemonpunto = document.createElement('div');
        const punto = document.createElement('p');
        punto.setAttribute('class', 'punto-letra');
        pokemonpunto.setAttribute('class', 'pokemon-punto');
        pokemonpunto.style.width = `${dato.base_stat*3}px`;
        punto.innerHTML = `<strong>${dato.stat.name}: </strong>`;
        pokemonpunto.appendChild(punto);
        const puntos = document.createElement('p');
        puntos.innerHTML = `${dato.base_stat}`;
        pokemonpunto.appendChild(puntos);
        contenedor_pokemonpunto.appendChild(pokemonpunto);
        
    }


    //evolucion
    const respuestaPeticionevolucionurl = consumeApiWithAxios('https://pokeapi.co/api/v2/pokemon-species/'+ datos);
    const evolucionurl= await respuestaPeticionevolucionurl;
    const urlEvolucion= evolucionurl.evolution_chain.url;
    const respuestaPeticionevolucion = consumeApiWithAxios(urlEvolucion);
    const evolucion= await respuestaPeticionevolucion;

    if((evolucion.chain.species.name) == datos2){
        if((evolucion.chain.evolves_to[0]).length !== 0){
                const ContenedorBoton = document.createElement('div');
                const BotonEvolucion = document.createElement('button');
                ContenedorBoton.setAttribute('class', 'Contenedor-Boton');
                BotonEvolucion.setAttribute('class', 'Contenedor-BotonEvolucionar');
                ContenedorBoton.appendChild(BotonEvolucion);
                pokemon.appendChild(ContenedorBoton);
                BotonEvolucion.addEventListener("click", function() {
                    let NombrePokemonevolucion = evolucion.chain.evolves_to[0].species.name;
                    const respuestaPeticionevolucion2 = consumeApiWithAxios('https://pokeapi.co/api/v2/pokemon/'+ NombrePokemonevolucion);
                    const mainElement2= document.querySelector("main");
                    mainElement2.innerHTML = "";
                    procesarDatosRespuesta(respuestaPeticionevolucion2);
                    event.preventDefault(); 
                });
            }
    }
    else if((evolucion.chain.evolves_to[0].species.name) == datos2){
        if((evolucion.chain.evolves_to[0].evolves_to[0]).length !== 0){
                const ContenedorBoton = document.createElement('div');
                const BotonEvolucion = document.createElement('button');
                ContenedorBoton.setAttribute('class', 'Contenedor-Boton');
                BotonEvolucion.setAttribute('class', 'Contenedor-BotonEvolucionar');
                ContenedorBoton.appendChild(BotonEvolucion);
                pokemon.appendChild(ContenedorBoton);
                BotonEvolucion.addEventListener("click", function() {
                    let NombrePokemonevolucion = evolucion.chain.evolves_to[0].evolves_to[0].species.name;
                    const respuestaPeticionevolucion2 = consumeApiWithAxios('https://pokeapi.co/api/v2/pokemon/'+ NombrePokemonevolucion);
                    const mainElement2= document.querySelector("main");
                    mainElement2.innerHTML = "";
                    procesarDatosRespuesta(respuestaPeticionevolucion2);
                    event.preventDefault(); 
                });
            }
    }
    else if((evolucion.chain.evolves_to[0].evolves_to[0].species.name) == datos2){
        if((evolucion.chain.evolves_to[0].evolves_to[0].evolves_to[0]).length !== 0){
                const ContenedorBoton = document.createElement('div');
                const BotonEvolucion = document.createElement('button');
                ContenedorBoton.setAttribute('class', 'Contenedor-Boton');
                BotonEvolucion.setAttribute('class', 'Contenedor-BotonEvolucionar');
                ContenedorBoton.appendChild(BotonEvolucion);
                pokemon.appendChild(ContenedorBoton);
                BotonEvolucion.addEventListener("click", function() {
                    let NombrePokemonevolucion = evolucion.chain.evolves_to[0].evolves_to[0].evolves_to[0].species.name;
                    const respuestaPeticionevolucion2 = consumeApiWithAxios('https://pokeapi.co/api/v2/pokemon/'+ NombrePokemonevolucion);
                    const mainElement2= document.querySelector("main");
                    mainElement2.innerHTML = "";
                    procesarDatosRespuesta(respuestaPeticionevolucion2);
                    event.preventDefault(); 
                });
            }
    }
    

}