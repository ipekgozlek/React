//Class Component ES6 sınıf yapısı
import { Component } from 'react'

class FirstClass extends Component {
    constructor(props) {
    super(props);
    }
  render() {
    return  <div style={{ backgroundColor: 'pink', padding:"1rem" }}>
        {this.props.isim}</div>;
    
  }
}
export default FirstClass;