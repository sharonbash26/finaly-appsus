import { emailService } from '../../../services/email.service.js'
export function Toolbar({ onBack, onRemoveMail, mailId }) {
    const handleRemove = () => {
        onRemoveMail(mailId)
        onBack()
    }

    console.log('mailId', mailId);
    console.log('emailsNow', emailService.query());

    return (
        <section className="toolbar-container">
            <button className="backBtn" onClick={onBack}> <img src="./assets/icons/arrow_back_FILL0_wght400_GRAD0_opsz24.svg" alt=""/> </button>
            <button className='removeBtn' onClick={handleRemove}><img src="./assets/icons/delete_FILL0_wght400_GRAD0_opsz24.svg" alt=""/></button>   
        </section>
    )
}



