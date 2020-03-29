import React, { useState } from "react"

export default function UserWordsSubmit({ firstWord, lastWord }) {
    const [firstWordInput, setFirstWord] = useState("")
    const [lastWordInput, setLastWord] = useState("")

    const onWordsSubmit = (event) => {
        const word = event.target.value
        const isFirst = event.target.name !== "lastWord"
        console.log(isFirst)
        if (isFirst) {
            setFirstWord(word)
            console.log(firstWordInput)
            firstWord = firstWordInput

        } else {
            setLastWord(word)
            console.log(lastWordInput)
            lastWord = lastWordInput
        }
    }

    return (
        <>
            <input
                type="text"
                name="firstWord"
                placeholder="First Word"
                onChange={onWordsSubmit}
            />

            <br />
            <input
                type="text"
                name="lastWord"
                placeholder="Last Word"
                onChange={onWordsSubmit}
            />
        </>
    )
}