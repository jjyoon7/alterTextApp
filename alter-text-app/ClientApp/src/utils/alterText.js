export default function alterText(txtArr, mostUsedWord, firstWord, lastWord) {
    const hasMoreWords = mostUsedWord.length > 1
    
    const updatedArr = txtArr.map(word => {
        const sameWordValue = mostUsedWord.includes(word)

        if (word === mostUsedWord) {
            const alteredWord = `<span class="foo">${firstWord}</span><span class="word">${word}</span><span class="bar">${lastWord}</span>`
            return word = alteredWord
        } else if (hasMoreWords && sameWordValue) {
            const alteredWords = mostUsedWord.map(wordContent => {
                const wordResult = `<span class="foo">${firstWord}</span><span class="word">${wordContent}</span><span class="bar">${lastWord}</span>`
                return wordResult
            })
            console.log("alter", alteredWords)
            return word = alteredWords.join(" ");
        } else {
            return word
        }
        
    })
    return updatedArr
}