import React, { useState } from "react"
import axios from 'axios';

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

    const onClickHandler = (event) => {
        const file = event.target.files[0];
        console.log(file);
        const formData = new FormData();
        console.log(axios)
        //formData.append("file", file);
        //formData.append("__RequestVerificationToken", "@Context.GetAntiforgeryToken()")

        //axios.post("/FileUpload/SingleFile", formData);
    }

    return (
        <div className="file-upload-display">
            <form className="file-upload-display-form" asp-controller="Home" asp-action="Index"
                encType="multipart/form-data" method="post">
                <label className="file-upload-display-label btn-file-upload-display-label btn">
                    <input type="file" name="file" />
                    <span className="file-upload-display-btn-text">{hasSelectedFile ? fileName : "Select a file"}</span>
                </label>
                <input className="file-upload-display-upload btn-file-upload-display-upload btn" type="submit" value="Upload" />
            </form>

            <form encType="multipart/form-data" method="post">
                <label asp-for="FileUpload.FormFile"></label>
                <input asp-for="FileUpload.FormFile" type="file"></input>
                <span asp-validation-for="FileUpload.FormFile"></span>
                <input asp-page-handler="Upload" className="btn" type="submit" value="Upload"></input>
            </form>
        </div>
    )
}