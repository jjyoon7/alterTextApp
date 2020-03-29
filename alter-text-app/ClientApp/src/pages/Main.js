import React from "react"
import UploadText from "../components/UploadText"
import DisplayText from "../components/DisplayText"
import Intro from "../components/Intro"

export default function Main() {
    return (
        <>
            <Intro />
            <UploadText />
            <DisplayText />
        </>
    )
}