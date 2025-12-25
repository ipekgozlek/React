import ReactDOM from "react-dom";
// portal bileşeni, hedef olarak verilen DOM düğümüne içerik yerleştirir
const index = ({target, text}) => {
  return ReactDOM.createPortal(
  <div>Selam ben portal, hedefim ise {text}</div>, target);
};

export default index;