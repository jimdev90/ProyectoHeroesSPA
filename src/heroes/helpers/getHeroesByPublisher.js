import {heroes} from "../data/heroes.js";

export const getHeroesByPublisher = (publisher) => {
    const validPublishers = ['Marvel Comics', 'DC Comics'];
    if (!validPublishers.includes(publisher)){
        throw new Error(`${publisher} is not a valid publisher`)
    }

    const newHeroes = heroes.filter((heroe) => {
        return heroe.publisher === publisher;
    })

    return newHeroes;
}