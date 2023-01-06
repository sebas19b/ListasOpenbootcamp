// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

const compra = ['leche ', 'azucar ', 'huevos ', 'pan ', 'mantequilla ']

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
compra.push('aceite de girasol ')
console.log(`Se le agrega a la lista 'aceite de girasol': ${compra}`)
// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compra.pop()
// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
    {title: 'Son como niños',director: 'Dennis Dugan',date: 2011},
    {title: 'Piratas del caribe',director: 'Joachim Ronning',date: 2003},
    {title: 'Que paso ayer',director: 'Todd Phillips',date: 2009}

]
// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const newList = peliculas.filter(year => year.date > 2010)
// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const director = peliculas.map(dir => dir.director)
// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const title = peliculas.map(dir => dir.title)
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const listaDirectoresyTitulos = director.concat(title);
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const factorPropagacion = ['Directores: ', ...director,'Titulos: ', ...title]
//Mando por consola los resultados
console.log(`Se le quita a la lista 'aceite de girasol': ${compra} `)
console.log(newList)
console.log(`Directores: ${director} `)
console.log(`Titulos: ${title} `)
console.log(`Concat: ${listaDirectoresyTitulos} `)
console.log(`Factor de propagacion: ${factorPropagacion} `)

