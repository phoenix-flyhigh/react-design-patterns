import { useOptimistic, useState, useTransition } from "react";

const CommentSection = () => {

    const [comments, setComments] = useState<{ id: number; text: string }[]>([])
    const [commentText, setCommentText] = useState("")
    const [optimisticComments, addOptimisticComment] = useOptimistic<{ id: number; text: string }[], { id: number; text: string }>(
        comments,
        (state, newComment) => [newComment, ...state]
    )
    const [isPending, startTransition] = useTransition()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const newComment = { id: Math.random() * 100, text: commentText } // Optimistic comment
        setCommentText("")
        startTransition(async () => {
            addOptimisticComment(newComment)
            try {
                await new Promise((resolve, reject) => setTimeout(() => {
                    let random = Math.random();
                    if (random > 0.8) {
                        reject("Network error");
                    }
                    resolve(null);
                }, 1000))

                setComments((prevComments) => [{ id: Date.now(), text: commentText }, ...prevComments])

            } catch (error) {
                alert(error);
            }
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCommentText(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input style={{ border: "1px solid white", color: "white" }}
                    type="text" name="comment" value={commentText} onChange={handleChange} />
                <button type="submit">Send</button>
            </form>
            {optimisticComments.map((comment, index) => (
                <div key={comment.id}>{comment.text} &nbsp; <i>{isPending && index === 0 && "sending..."}</i></div>
            ))}
        </div>
    )
}

export default CommentSection