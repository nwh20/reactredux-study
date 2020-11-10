import AddNumber from '../components/AddNumber';
import { connect } from 'react-redux';

export default connect()(AddNumber);

// import React, { Component } from 'react';
// import store from '../store';

// export default class ANC extends Component {
//   render() {
//     return <AddNumber onClick={function(size) {
//       store.dispatch({type: 'INCREMENT', size: size})
//     }}></AddNumber>
//   }
// }