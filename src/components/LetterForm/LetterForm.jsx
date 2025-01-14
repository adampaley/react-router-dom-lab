import { useState } from "react"
import { useNavigate } from "react-router"

const initialState = {
    mailboxId: 1,
    recipient: '',
    message: '',
}

const LetterForm = (props) => {
    const [formData, setFormData] = useState(initialState)

    const navigate = useNavigate()

    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log(formData)
        props.addLetters(formData)
        setFormData(initialState)
        navigate(`/mailboxes/${formData.mailboxId}`)
    }

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value })
    }

    return (
        <main>
            <h1>New Letter</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="mailboxId">Select a Mailbox</label>
                <select 
                    name="mailboxId" 
                    id="mailboxId"
                    value={formData.mailboxId}
                    onChange={handleChange}
                >
                    {props.mailboxes.map((mailbox) => ( 
                        <option key={mailbox._id} value={mailbox._id}>Mailbox {mailbox._id}</option>
                    ))}
                </select>
                <label htmlFor="recipient">Recipient</label>
                <input 
                    type="text"
                    id="recipient"
                    name="recipient"
                    value={formData.recipient}
                    onChange={handleChange} 
                />
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />

                <button type="submit">Send Letter</button>
            </form>
        </main>
    )
}

export default LetterForm