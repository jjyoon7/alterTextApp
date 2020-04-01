import React, { useState, useEffect } from 'react'
import wordFrequency from '../utils/wordFrequency'
import alterText from '../utils/alterText'
// import UserWordsSubmit from './UserWordsSubmit'
import splitText from '../utils/splitText'

export default function TextItem({text}) {
    const [mostUsedWord, setMostUsedWord] = useState([])
    const [firstWord, setFirstWord] = useState("foo")
    const [lastWord, setLastWord] = useState("bar")
    const [textAltered, setTextAltered] = useState(false)
    // const [hasUserWordInput, setHasUserWordInput] = useState(false)
    const hasMostUsedWord = mostUsedWord !== ""
    const textArr = splitText(text)

    const mostUsedWords = mostUsedWord.join(', ')
    const hasMoreWords = mostUsedWord.length > 1


    useEffect(() => {    
        const findMostUsedWord = wordFrequency(textArr)
        setMostUsedWord(findMostUsedWord)
    }, [])

    useEffect(() => {
        const createContent = alterText(textArr, mostUsedWord, firstWord, lastWord).join(" ")
        console.log("content", createContent)
        const textDataDiv = document.getElementById("text-data")
        textDataDiv.innerHTML = createContent
        setTextAltered(true)
    }, [mostUsedWord])


    return (
        <div className="text-item">
            <h2 className="text-item-title">The most used word{hasMoreWords ? "s are" : " is"} <span className="word">{hasMostUsedWord ? mostUsedWords : "???"}</span></h2>
            <br></br>
            <div id="text-data" className="text-item-text-data-div">
            </div>
            <br></br>
        </div>
    )
}