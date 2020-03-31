import React, { useState } from "react"

export default function UploadText() {
    const [hasSelectedFile, setHasSelectedFile] = useState(false)
    const [fileName, setFileName] = useState("")


    const onChangeHandler = (event) => {
        const chosenFile = event.target.files[0]
        const hasProperty = chosenFile.name !== ""
        if (hasProperty) {
            setHasSelectedFile(true)
            setFileName(chosenFile.name)
        }
    }

    return (
        <div className="file-upload-display">
            <form className="file-upload-display-form" method="post" encType="multipart/form-data" asp-controller="Home" asp-action="Post">
                <label className="file-upload-display-label btn-file-upload-display-label btn">
                    <input type="file" name="files" multiple onChange={onChangeHandler} />
                    <span className="file-upload-display-btn-text">{hasSelectedFile ? fileName : "Select a file"}</span>
                </label>
                <input className="file-upload-display-upload btn-file-upload-display-upload btn" type="submit" value="Upload" />
            </form>
        </div>
    )
}