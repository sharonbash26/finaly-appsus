import { utilService } from "../../../services/util.service.js";

export function MailPreview({ email }) {
    console.log(' i enter to mail preview')
    const previewMsg = email.body.split(' ').slice(0, 5).join(' ');
    return (
       
            <tr className="mail-preview">
                <td className="sender">{email.fromUser}</td>
                <td>{email.subject}</td>
                <td>{previewMsg}</td>
                <td className="time">{utilService.formatTime(email.sentAt)}</td>
            </tr>
       

    )
}