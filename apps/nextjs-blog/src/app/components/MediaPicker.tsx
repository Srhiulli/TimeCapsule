'use client'

import { ChangeEvent, useState } from "react"

export function MediaPicker() {
    const [preview, setPreview] = useState<string | null>(null)

    function onFileSelected(event: ChangeEvent<HTMLLinkElement>) {
        const { files } = event.target

        if (!files) {
            console.log("No files selected")
            return

        }

        const previewURL = URL.createObjectURL(files[0])


        setPreview(previewURL)
    }
    return (
        <>
            <input onChange={onFileSelected} name="coverUrl" type="file" id="media" accept="image/*" className="invisible w-0 h-0" />

            {preview && <img src={preview} alt="" className="w-full aspect-video rounded-lg object-cover" />}
        </>
    )
}