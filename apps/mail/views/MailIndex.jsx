import { emailService } from '../../../services/email.service.js'
import { MailDetails } from "../cmps/MailDetails.jsx"
import { Logo } from "../cmps/logo.jsx"
import { Compose } from '../cmps/Compose.jsx'
const { useState, useEffect } = React
import { MailList } from "../cmps/MailList.jsx"
// import {MailDetails} from "../cmps/MailDetails.jsx"
// import { MailNavSide } from "../cmps/MailNavSide.jsx"
// import {MailPreview} from "../cmps/MailPreview.Jsx"
import { Search } from '../../../cmps/Search.jsx'
import { Loading } from "../cmps/Loading.jsx"
import { MailNavSide } from '../cmps/MailNavSide.jsx'
import { MailFilter } from '../cmps/MailFilter.jsx'


export function MailIndex() {
    const [emails, setEmails] = useState([]);
    const [selectedEmailId, setSelectedMailId] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [filterBy,setFilterBy]=useState(emailService.getDefaultFilter())

    useEffect(() => {
        emailService.query().then(setEmails);
        loadPage();
    }, []);

    const loadPage = () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);
    }
    function onSetFilterBy(filterBy) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    }

    function onSelectEmailId(emailId) {
        setSelectedMailId(emailId);
    }
    function onRemoveMail(emailId) {
        emailService.remove(emailId).then(() => {
            setEmails(prevEmails => prevEmails.filter(email => email.id !== emailId))
        })
    }

    if (isLoading) return <Loading />;
    if (!emails) return <div>Loading...</div>;

    return (
        <React.Fragment>
        <Logo />
        <Compose />
        <div className='mail-app-container'>
     
            <MailNavSide />
            <div className='mail-list-container' >
            <section className='search'>
              <Search />
         
              {/* <MailFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy}/> */}
            </section>
                {!selectedEmailId && (
                       
                    <table>
                        <MailList emails={emails} onSelectEmailId={onSelectEmailId} />
                    </table>
                )}
                {selectedEmailId && <MailDetails emails={emails} onBack={() => onSelectEmailId(null)}   onRemoveMail={onRemoveMail} mailId={selectedEmailId} />}
            </div>
        </div>
        </React.Fragment>

    );
}

//finellyyyyy versionnnnnnnn!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!