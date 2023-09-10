import { utilService } from './util.service.js'
import { asyncStorageService } from './async-storage.service.js'
import { storageService } from './storage.service.js'

const STORAGE_KEY = 'emailDB'
 var emails=_createEmails()
console.log('start emails',emails)
const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

export const emailService = {
    query,
    get,
    remove,
    loggedinUser,
    save,
    getDefaultFilter
}


const criteria = {
    status: 'inbox/sent/trash/draft',
    txt: 'puki',
    isRead: true,
    isStared: true,
    lables: ['important', 'romantic']
}


function query(filterBy={}) {
    return asyncStorageService.query(STORAGE_KEY).then(emails => {
        console.log('emailss',emails)
        if(filterBy.subject){
            const regExp=new RegExp(filterBy.subject,"i")
            emails=emails.filter(email=>regExp.test(email.subject))
        }
        console.log('emails after filter',emails)
          return  emails
    })
}

function get(mailId) {
    return asyncStorageService.get(STORAGE_KEY, mailId)
}

function remove(mailId) {
    return asyncStorageService.remove(STORAGE_KEY, mailId)
}

function save(email) {
    if (email.id) {
        return asyncStorageService.put(STORAGE_KEY,email)
    }else{
        return asyncStorageService.post(STORAGE_KEY,email)
    }
}
function _createEmails() {
    console.log('hhhh')
    // let emails = []
    // if(storageService.loadFromStorage(STORAGE_KEY)){
       let emails=storageService.loadFromStorage(STORAGE_KEY)
    // }
    console.log('emails', emails)
    if (!emails || !emails.length) {
         emails=[{
            id: utilService.makeId(),
            subject: 'For Dr. Ofer',
            body: 'When will you come to the meeting Dr',
            isRead: false,
            sentAt: 1050033030594,
            remvedAt: null,
            from: 'momo@momo.com',
            to: 'user@appsus.com',
            fromUser:'Dr Ofer Hen'
        },
        {
            id: utilService.makeId(),
            subject: 'Ads',
            body: 'you want to buy new iphone?',
            isRead: false,
            sentAt: 1550103930504,
            remvedAt: null,
            from: 'momo@momo.com',
            to: 'user@appsus.com',
            fromUser:'UPHONE'
        },
        {
            id: utilService.makeId(),
            subject: 'ust scheduled: Data Science at Fiverr: From Research to Production',
            body: 'RSVP now Details: Join us on a special evening where youll be able to connect with like-minded individuals, learn from our Data Scientists at Fiverr, and explore the latest trends and technologies in data science. This meetup will be divided into four main parts: research, data, modeling and production. Mark your calendars and get ready to immerse yourself in',
            isRead: false,
            sentAt: 1551133130599,
            remvedAt: null,
            from: ' info@email.meetup.com',
            to: 'user@appsus.com',
            fromUser:' Fiverr'
        },
        {
            id: utilService.makeId(),
            subject: 'For Dr. Moshe',
            body: 'You Have to go !!!!',
            isRead: false,
            sentAt: 1051133930597,
            remvedAt: null,
            from: 'momo@momo.com',
            to: 'user@appsus.com',
            fromUser:'Dr Hen'
        },
        {
            id: utilService.makeId(),
            subject: 'אישור תשלום חשבון חשמל',
            body:  'אישור תשלום לחברת החשמלתאריך: 08/06/2023',
            isRead: false,
            sentAt: 1000133930594,
            remvedAt: null,
            from: 'NoReply@iec.co.il',
            to: 'user@appsus.com',
            fromUser:'חברת החשמל'
        },
        {
            id: utilService.makeId(),
            subject: 'Your notifications are now mobile',
            body: 'Your notifications are now mobile! You’ve enabled push notifications on your mobile device for the Coding Academy - JUL 23 workspace, so we’ve disabled email notifications for you. That way you won’t get notified twice. It’s easy to re-enable email notifications, if you’d prefer.',
            isRead: false,
            sentAt: 1551133030504,
            remvedAt: null,
            from: 'feedback@slack.com',
            to: 'user@appsus.com',
            fromUser:'Slack'
        },
        {
            id: utilService.makeId(),
            subject: 'Super-Pharm-חשבונית הרכישה שלך באתר סופר-פארם',
            body: 'שלום,ליקוט ההזמנה שלך הסתיים בהצלחה ולנוחיותך מצורפת למייל זה חשבונית הרכישה. כאשר ההזמנה תהיה מוכנה לאיסוף/שילוח תישלח אלייך הודעה. תודה שרכשת באתר סופר-פארם אונליין!',
            isRead: false,
            sentAt: 1551133930542,
            remvedAt: null,
            from: 'shop@super-pharm.co.il',
            to: 'user@appsus.com',
            fromUser:'Super-Pharm'
        },
        {
            id: utilService.makeId(),
            subject: 'הקבלה שלך על הזמנה ב-Google Play מ-13 באוג׳ 2023',
            body:'תודה צריך להוסיף אמצעי תשלום לגיבוי כדי שהמינוי ימשיך להיות פעיל.',
            isRead: false,
            sentAt: 1551133930591,
            remvedAt: null,
            from: 'googleplay-noreply@google.com',
            to: 'user@appsus.com',
            fromUser:'Google Play'
        },
        {
            id: utilService.makeId(),
            subject: 'ust scheduled: Tones & Trends - How businesses build, target, and cater to musicians',
            body: 'Our latest headphones and case are made from recycled plastic materials. As with the rest of the 1000X Series, the packaging is made from our Original Blended Material, which is completely plastic-free and recyclable. This box is particularly small for even less waste and CO2 emissions  A new profile to spark more friendshipsYour member profile on the Meetup app is getting a fresh look. Now, you can share more information about yourself so other Meetup members can see what you have in common.The updated profile has:Larger photo options, ideal for uploading high-resolution headshotsA “Shared in common” section, highlighting how you might relate to fellow membersMore prominent displays for name, bio, and location informationA “Looking to” section where you can describe what you aim to get out of the Meetup experience like “networking,” “making friends,” and “support”By sharing a bit about yourself in your member profile, other members can learn about you before an event or follow up afterward.',
            isRead: false,
            sentAt: 1551011130594,
            remvedAt: null,
            from: 'info@email.meetup.com>',
            to: 'user@appsus.com',
            fromUser:'introducing new '
        },
        {
            id: utilService.makeId(),
            subject: 'Sony’s most sustainable headphones',
            body: ' A more sustainable choice When it comes to buying a new pair of headphones, you not only want them to sound good, you want to know they are doing good too. Below, you can discover our most sustainable options  NEW! WF-1000XM5Our latest headphones and case are made from recycled plastic materials. As with the rest of the 1000X Series, the packaging is made from our Original Blended Material, which is completely plastic-free and recyclable. This box is particularly small for even less waste and CO2 emissions ',
            isRead: false,
            sentAt: 1551110930594,
            remvedAt: null,
            from: 'onyeurope@bmail.sony-europe.com',
            to: 'user@appsus.com',
            fromUser:'SONY'
        },
        {
            id: utilService.makeId(),
            subject: 'Plan a staycation you’ll truly enjoy',
            body: 'Learn about an exciting new feature that gives Meetup organizers a detailed portrait of the attendee experience at each event, helping to support community growth.A major new redesign of member profiles has just launched. Learn how this upgrade will deepen your Meetup experience, and make it easier to find friends.Learn all about recruiting leadership teams with Meetup organizers who ',
            isRead: false,
            sentAt: 1551112930594,
            remvedAt: null,
            from: 'info@email.meetup.com',
            to: 'user@appsus.com',
            fromUser:'Plan a staycation '
        },
        {
            id: utilService.makeId(),
            subject: 'LEGALOUTFIT NEW 15% SALE',
            body: 'מבצע 15 אחוז הנחה !!!! הצטרפוו עכשו כחברי מועדון ',
            isRead: false,
            sentAt: 1551106930594,
            remvedAt: null,
            from: 'LEGALOUTFIT@gmail.com',
            to: 'user@appsus.com',
            fromUser:'LEGALOUTFIT'
        },
        {
            id: utilService.makeId(),
            subject: 'For Dr. Moshe',
            body: 'You Have to go !!!!',
            isRead: false,
            sentAt: 1551124930594,
            remvedAt: null,
            from: 'henmov@gmail.com',
            to: 'user@appsus.com',
            fromUser:'Dr Hen'
        },
        {
            id: utilService.makeId(),
            subject: 'Shape the future of Google Maps Platform',
            body: ' Hi  Thank you for using Google Maps Platform APIs. Whether you’re building products with maps or relying on location-based insights, we wanted to get your feedback on your recent experience with us. Please share your thoughts by filling out this brief 3-minute survey  Your feedback will help us understand what we’re doing well, and what we can do to improve the experience for the millions around the world who use Google Maps Platform APIs every day',
            isRead: false,
            sentAt: 1551133930004,
            remvedAt: null,
            from: 'googlehelpCenter@google.com',
            to: 'user@appsus.com',
            fromUser:'Google Help Center'
        },
        {
            id: utilService.makeId(),
            subject: 'סלקום תשלום',
            body: 'מצורפת קבלה תשלום',
            isRead: false,
            sentAt: 1551133931584,
            remvedAt: null,
            from: 'celcom555@celcom.com',
            to: 'user@appsus.com',
            fromUser:'celcom'
        }

         ]
    }

    storageService.saveToStorage(STORAGE_KEY, emails)
 
    return emails
}

// function _createEmail() {
//     return {
//         id: utilService.makeId(),
//         subject: 'For Dr. Ofer',
//         body: 'When will you come to the meeting Dr',
//         isRead: false,
//         sentAt: 1551133930594,
//         remvedAt: null,
//         from: 'momo@momo.com',
//         to: 'user@appsus.com',
//         fromUser:'Dr Ofer Hen'
//     }
// }
function getDefaultFilter(){
    return {subject:''}
}
