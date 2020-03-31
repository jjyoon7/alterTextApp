export default function splitText(textData) {
    const textArray = textData.toLowerCase().split(/\s+/)
    return textArray
}