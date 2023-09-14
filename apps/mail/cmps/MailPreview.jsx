import { utilService } from "../../../services/util.service.js";

export function MailPreview({ email }) {
    console.log(' i enter to mail preview')
    const previewMsg = email.body.split(' ').slice(0, 5).join(' ');
    return (
       
            <div className="mail-preview">
                <p className="sender">{email.fromUser}</p>
                <p>{email.subject}</p>
                <p>{previewMsg}</p>
                <p className="time">{utilService.formatTime(email.sentAt)}</p>
            </div>
       

    )
}