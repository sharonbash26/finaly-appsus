import { MailPreview } from "./MailPreview.jsx"
export function MailList({ emails, onSelectEmailId }) {
    console.log(' i enter to mailList', emails)
    return (
        <ul className="email-list">
            {emails && emails.length > 0 && emails.map(email => {
                return (
                    <li key={email.id} onClick={() => onSelectEmailId(email.id)}>
                        <MailPreview email={email} />
                        <section>
                            <button onClick={() => onSelectEmailId(email.id)}></button>
                        </section>
                    </li>
                );
            })}
        </ul>
    )
}