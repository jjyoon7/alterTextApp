export default function wordFrequency(textArr) {

    const bannedWords = ['the', 'a', 'an', 'and', 'or', 'i', 'you', 'with', 'to', 'at']
    const filterTextArr = textArr.filter(word => {
        return !bannedWords.includes(word)
    })

    let counts = {}
    let compare = 0
    let mostFrequent = []

    for (var i = 0, len = filterTextArr.length; i < len; i++) {
        var word = filterTextArr[i]

        if (counts[word] === undefined) {
            counts[word] = 1
        } else {
            counts[word] = counts[word] + 1
        }

        if (counts[word] > compare) {
            compare = counts[word];
            mostFrequent = [word];
        }
        else if (counts[word] === compare) {
            mostFrequent.push(word);
        }
    }
    console.log("most used word", mostFrequent)
    return mostFrequent
}
