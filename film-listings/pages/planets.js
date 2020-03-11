import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import PlanetDetails from '../components/planets/PlanetDetails';
import { apiUrl } from '../components/utils/';
import axios from 'axios';

class Planet extends React.Component {

  constructor(props) {
    super(props);
  }

  static async getInitialProps({query}) {
    let planetData = {};
    try {
      const planet = await axios.get(`${apiUrl()}planets/${query.slug}`)
      planetData = planet.data;
      planetData.title = query.slug;
    } catch(err) {
      console.error(err);
    }
    return { planet : planetData }

  }


  render() {

    const {planet} = this.props;

    return (
    <BaseLayout title={planet.title}>
      <div id="theme-banner-one">
        <div className='container'>
          <PlanetDetails planet={planet}/>
        </div>
      </div>
    </BaseLayout>
    )

  }

};

export default Planet;
