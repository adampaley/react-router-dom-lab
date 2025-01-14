import { useParams } from 'react-router'

const MailboxDetails = (props) => {
    // hooks
    const { mailboxId } = useParams()

    const selectedBox = props.mailboxes.find((mailbox) => (
        mailbox._id === Number(mailboxId)
    ))

    const selectedLetters = props.letters.filter((letter) => (
        Number(letter.mailboxId) === Number(mailboxId)
    ))

    return (
        <>
            <h1>Mailbox {selectedBox._id}</h1>
            <h2>Details</h2>
            <p>Boxholder: {selectedBox.boxOwner}</p>
            <p>Box Size: {selectedBox.boxSize}</p>
            <h2>Letters</h2>
            <ul>
                {selectedLetters.map((letter) => (
                    <li key={letter._id}>
                        <h3>Recipient:</h3>
                        <p>{letter.recipient}</p>
                        <h3>Message:</h3>
                        <p>{letter.message}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default MailboxDetails