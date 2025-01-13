import { useParams } from 'react-router'

const MailboxDetails = (props) => {
    // hooks
    const { mailboxId } = useParams()

    const selectedBox = props.mailboxes.find((mailbox) => (
        mailbox._id === Number(mailboxId)
    ))

    return (
        <>
            <h2>Details</h2>
            <dl>
                <dt>Box Owner</dt>
                <dd>{selectedBox.boxOwner}</dd>
                <dt>Box Size</dt>
                <dd>{selectedBox.boxSize}</dd>
            </dl>
        </>
    )
}

export default MailboxDetails