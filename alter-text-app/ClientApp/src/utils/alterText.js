export default function alterText(txtArr, mostUsedWord, firstWord, lastWord) {
    const updatedArr = txtArr.map(word => {
        if (word === mostUsedWord) {
            word = `<span class="foo">${firstWord}</span><span class="word">${word}</span><span class="bar">${lastWord}</span>`
        }
        return word
    })
    return updatedArr
}