export default function wordFrequency(textArray) {
    let counts = {}
    let compare = 0
    let mostFrequent

    for (var i = 0, len = textArray.length; i < len; i++) {
        var word = textArray[i]

        if (counts[word] === undefined) {
            counts[word] = 1
        } else {
            counts[word] = counts[word] + 1
        }
        if (counts[word] > compare) {
            compare = counts[word]
            mostFrequent = textArray[i]
        }
    }
    return mostFrequent
}