class Film extends React.Component {

  render() {

    const { details } = this.props;

    return (
  
      <div className='main-wrapper film' style={filmStyle}>
        <h1 style={headerStyle}>{details.Title}</h1>
        <p>{details.Director}</p>
        <p>{details.ReleaseDate}</p>
      </div>

    )
  }
}

const filmStyle = {
  background: '#eaf8f0',
  fontSize: 14,
  padding: 10,
  margin: "4px 0px 4px 0px"
};

const headerStyle = {
  fontSize: 16
};


export default Film;