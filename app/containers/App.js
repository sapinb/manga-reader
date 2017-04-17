// @flow

import { connect } from 'react-redux';

import App from '../components/App';
import { getImages } from '../reducers';

const mapStateToProps = (state) => ({
  images: getImages(state)
});

export default connect(mapStateToProps)(App);
