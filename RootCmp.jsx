const { Route, Routes } = ReactRouterDOM
const { useState, useEffect } = React
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/AppHeader.jsx"
import { About } from "./views/About.jsx"
import { Home } from "./views/Home.jsx"
import { MailIndex } from "./apps/mail/views/MailIndex.jsx"
// import { Loading } from "./apps/mail/cmps/Loading.jsx"
import { NoteIndex } from "./apps/note/views/NoteIndex.jsx"
import { NoteEdit } from "./apps/note/cmps/NoteEdit.jsx"


export function App() {
    return <Router>
     <section className="app">
            <AppHeader />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/mail" element={<MailIndex />} />
                <Route path="/note" element={<NoteIndex />} />
                <Route path="/note/edit/:noteId" element={<NoteEdit />} />
                <Route path="/note/edit" element={<NoteEdit />} /> 
            </Routes>
        </section>
    </Router>
}
