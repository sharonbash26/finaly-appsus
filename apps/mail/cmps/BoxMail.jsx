
import { showSuccessMsg, showErrorMsg } from "../../../services/event-bus.service.js";
export function BoxMail({ isOpen, closeBox }) {
    const showClass = isOpen ? 'show' : '';
    const send=()=>{
        closeBox()
       showSuccessMsg('Message Sent')
    }
 
 
  
    return (
      <section className={`box-mail-container ${showClass} `}>
        <button className="close" onClick={closeBox}>x</button>
        <h2>New Message</h2>
        <div className="email-content">
          <input size="200" className="to" type="text" placeholder="To:" />
          <input size="200" className="subject" type="text" placeholder="Subject:" />
          <div className="textArea">
          <textarea size="150" rows="80" cols="200" className="mailBody" placeholder="Write your message here"></textarea>

          </div>
        </div>
        <button className="sendBtn" onClick={send}>Send</button>
      </section>
    );
  }
  
  
  
  
  
  