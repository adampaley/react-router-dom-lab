// imports
import { useState } from 'react'
import './App.css'
import MailboxDetails from './components/MailboxDetails/MailboxDetails'
import MailboxForm from './components/MailboxForm/MailboxForm'
import MailboxList from './components/MailboxList/MailboxList'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router'

// component
const App = () => {
  // state variables
  const [mailboxes, setMailboxes] = useState([])

  // functions
  const addBox = ( newMailboxData ) => {
    newMailboxData._id = mailboxes.length + 1
    setMailboxes([ ...mailboxes, newMailboxData ])
  }

  // return
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}/>} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes}/>} />
        <Route path="*" element={<h2>Mailbox Not Found!</h2>}/>
      </Routes>
    </>
  )
}

// export
export default App
