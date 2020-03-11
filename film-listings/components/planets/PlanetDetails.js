import Film from './Film';

class PlanetDetails extends React.Component {

  displayFilms = films => {
    let filmsArr = []
    films.forEach( film => {
      filmsArr.push(<Film details={film} />)
    })
    return filmsArr
  }

  render() {

    const {planet} = this.props;

    return (
      <div className='main-wrapper planet'>
        <a href='/'>Back</a>
        <h1 className='main-title '>{planet.title}</h1>
        <h3 className='main-title '>Climate: {planet.Climate}</h3>
        <h3 className='main-title '>Population: {planet.Population}</h3>
        <div>
          <h2>Films</h2>
          {this.displayFilms(planet.Films)}
        </div>
      </div>
    )
  }
}

export default PlanetDetails;