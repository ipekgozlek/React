//Fonksiyonel Component

const First = ({isim,yas}) => {
  return (
    <>
    <div >First</div>
    <div style={{ backgroundColor: 'blue', padding:"1rem" }}>İsim: {isim}</div>
    <div style={{ backgroundColor: 'blue', padding:"1rem" }}>Yaş: {yas}</div>
  </>
  )
}

export default First