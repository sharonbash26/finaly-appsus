import { BoxMail } from "./BoxMail.jsx"

const { useState } = React
export function Compose() {
  const [isBoxMailOpen, setOpenBoxMail] = useState(false)

  const toggleBoxMail = () => {
    setOpenBoxMail(!isBoxMailOpen)
  }
 const getMailClass=()=>{
  if(isBoxMailOpen){
    return "open"
  }
 }
  return (
    <div>
      <button className="composeBtn" onClick={toggleBoxMail}><img className="composeIcon" src="./apps/imgs/edit.svg" alt="" />  Compose</button>
      <section className={"boxMail-" +getMailClass()}>
        {isBoxMailOpen && <BoxMail closeBox={toggleBoxMail} />}
      </section>

    </div>
  )
}
