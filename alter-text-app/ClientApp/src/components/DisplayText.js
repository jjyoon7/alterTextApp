import React, { useState, useEffect } from "react"
import TextItem from "./TextItem"

export default function DisplayText() {
    const [textDataArr, setTextDataArr] = useState([])
    const textDataMapped = textDataArr.map(textData => {
            return < TextItem key={textData.id} text={textData} />
    })

    //receive a text data from API end point and update textDataArr
    //useEffect(() => {
    //    fetch('Home')
    //        .then(response => response.json())
    //        .then(data => {
    //            setTextDataArr(data)
    //        })
    //}, [])

    useEffect(() => {
        //hardcoded text example to test
        const testText = ["How much wood would a woodchuck chuck if a woodchuck could chuck wood?"]
        //const testText = ["Knut satt vid en knut och knöt en knut. När Knut knutit knuten var knuten knuten."]
        setTextDataArr(testText)
    }, [])
   
    return (
        <div className="text-display">
            {textDataMapped}
        </div>
    )
}


