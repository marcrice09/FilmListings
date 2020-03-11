import React from 'react';
import Head from 'next/head';


class BaseLayout extends React.Component {

  state = {
    displayConfirmation: 'none',
    posts: [],
    homeAcf: { about_us : '' }
  };

  constructor(props) {
    super(props);
    
  }

  render() {

    const { children, title } = this.props;

    return (
      <React.Fragment>
      <Head>
        <title>{title || ''}</title>
      </Head>
      <div className="main-page-wrapper">

        <main>
          <div className="wrapper">
            {children}
          </div>
        </main>

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>

      </div>
      </React.Fragment>

    )
  }

}

export default BaseLayout;
