import { useParams } from 'react-router'

const MailboxDetails = (props) => {
    // hooks
    const { mailboxId } = useParams()

    const selectedBox = props.mailboxes.find((mailbox) => (
        mailbox._id === Number(mailboxId)
    ))

    return (
        <>
            <h1>Mailbox {selectedBox._id}</h1>
            <h2>Details</h2>
            <p>Boxholder: {selectedBox.boxOwner}</p>
            <p>Box Size: {selectedBox.boxSize}</p>
        </>
    )
}

export default MailboxDetails