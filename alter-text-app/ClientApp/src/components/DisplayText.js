import React, { useState, useEffect } from "react"
import wordFrequency from '../utils/wordFrequency'
import alterText from '../utils/alterText'
import UserWordsSubmit from "./UserWordsSubmit"

export default function DisplayText() {
    const [mostUsedWord, setMostUsedWord] = useState("")
    const [firstWord, setFirstWord] = useState("foo")
    const [lastWord, setLastWord] = useState("bar")
    const [textAltered, setTextAltered] = useState(false)
    const [hasUserWordInput, setHasUserWordInput] = useState(false)
    const hasMostUsedWord = mostUsedWord !== ""

    const exArray = ['Tom', 'Fluffy', 'Fluffy', 'Fluffy', 'Fluffy', 'Fluffy', 'Tom', 'Bella', 'Chloe', 'Tom', 'Chloe']

    useEffect(() => {
        const findMostUsedWord = wordFrequency(exArray)
        setMostUsedWord(findMostUsedWord)
    }, [])

    useEffect(() => {
        const createContent = alterText(exArray, mostUsedWord, firstWord, lastWord).join(" ");
        const textDataDiv = document.getElementById("text-data")
        textDataDiv.innerHTML = createContent
        setTextAltered(true)
    }, [mostUsedWord])

    useEffect(() => {
    }, [textAltered])

    useEffect(() => {
        setLastWord()
    }, [hasUserWordInput])

    console.log(firstWord)

    //const onWordsSubmit = (e) => {
    //    console.log(2)
    //}


    //const askUserWordInputHTML = `
    //      <label for="fname">First name:</label>
    //      <input type="text" id="fname" name="fname"><br><br>
    //      <label for="lname">Last name:</label>
    //      <input type="text" id="lname" name="lname"><br><br>
    //      <input type="submit" value="Submit" onClick={onWordsSubmit}>
    //`


    return (
        <div className="text-display">
            <h2 className="text-display-title">The most used word is <span className="word">{hasMostUsedWord ? mostUsedWord : "???"}</span></h2>
            <br></br>
            <div id="text-data" className="text-display-text-data-div">
            </div>
            <div id="text-display-user-word-submit">
                {textAltered ? <UserWordsSubmit firstWord={firstWord} lastWord={lastWord} /> : ""}
            </div>
        </div>
    )
}


