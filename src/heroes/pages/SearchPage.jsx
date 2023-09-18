import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const heroes = getHeroesByName(q);

    const { searchText, onInputChange } = useForm({
        searchText: q
    });




    const onSearchSubmit = (event) => {
        event.preventDefault();
        if (searchText.trim().length <= 1) return;
        navigate(`?q=${searchText.toLowerCase().trim()}`)
    }

    return (
        <>
            <h1>Buscar</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Buscando</h4>
                    <hr />
                    <form onSubmit={ onSearchSubmit }>
                        <input
                            type="text"
                            placeholder="Buscar un heroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={ onInputChange }
                        />
                        <button className="btn btn-outline-primary mt-2">Buscar</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />

                    {
                        (q === '')
                            ?  <div className="alert alert-primary">Buscar un héroe</div>
                            : (heroes.length === 0)
                                && <div className="alert alert-danger">No hero with <b>{q}</b></div>
                    }

                    
                    {
                        heroes.map(hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
