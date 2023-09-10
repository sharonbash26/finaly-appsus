const { useState } = React
// import { utilService } from "../../../services/util.service"
export function MailNavSide() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        console.log('isOPEN?',isOpen)
        setIsOpen(!isOpen)
    }
    const getClassName=()=>{
        console.log('getClassName')
        if(isOpen)
        return "navSide open"
       
    }
    return (
        // <section className={`navSide ${isOpen ? 'open' : ''}`}>
        // <section className={['navSide ', isOpen && 'open'].filter(Boolean).join(' ')}>
            <section className={getClassName()}>
                <button className='hamburger' onClick={toggleMenu}>
                    ☰
                </button>
                <section className="buttonContainer">
                    <button>Inbox</button>
                    <button>Starred</button>
                    <button>Snoozed</button>
                    <button>Sent</button>
                    <button>Drafts</button>
                    <button>More</button>
                    <button>Labels</button>
                </section>

            </section>

            )
}