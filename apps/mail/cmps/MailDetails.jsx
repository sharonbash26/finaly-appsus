import { emailService } from "../../../services/email.service.js"
import { Toolbar } from "./Toolbar.jsx"
const { useState, useEffect } = React

export function MailDetails({ emails, mailId, onBack,onRemoveMail, onReply, onForward }) {
    console.log(' i enter to mailDetails')

    const [email, setEmail] = useState(null)

    useEffect(() => {
        emailService.get(mailId).then(setEmail)

    }, [])

    if (!email) return <div>Loading...</div>
    return (
        <section className="container-details">
        <Toolbar onBack={onBack}  onRemoveMail={onRemoveMail} mailId={mailId} />
        <section className="email-details">
            <h1 className="emailSuject">{email.subject}</h1>
            <section className="senderDetails">
            <h4 className="emailFromUser">{email.fromUser}</h4>
            <h4 className="emailFrom">{email.from}</h4>
            </section>
            <h4 className="body">{email.body}</h4>
            <section className="btnInDetails">
                <button onClick={onReply}> ← Reply</button>
                <button onClick={onForward}> Forward → </button>
            </section>

        </section>
        </section>

    )
}