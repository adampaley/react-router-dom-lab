// imports
import { useState } from 'react'
import './App.css'
import LetterForm from './components/LetterForm/LetterForm'
import MailboxDetails from './components/MailboxDetails/MailboxDetails'
import MailboxForm from './components/MailboxForm/MailboxForm'
import MailboxList from './components/MailboxList/MailboxList'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router'

// component
const App = () => {
  // state variables
  const [mailboxes, setMailboxes] = useState([])
  const [letters, setLetters] = useState([])

  // functions
  const addBox = ( newMailboxData ) => {
    newMailboxData._id = mailboxes.length + 1
    setMailboxes([ ...mailboxes, newMailboxData ])
  }

  const addLetters = ( newLetterData ) => {
    newLetterData._id = letters.length + 1
    setLetters([ ...letters, newLetterData ])
  }

  // return
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}/>} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} letters={letters} />} />
        <Route path="/new-letter" element={<LetterForm addLetters={addLetters} mailboxes={mailboxes} />} />
        <Route path="*" element={<main><h1>Mailbox Not Found!</h1></main>}/>
      </Routes>
    </>
  )
}

// export
export default App
