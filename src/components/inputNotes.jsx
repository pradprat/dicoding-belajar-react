import { useState } from "react"

const InputNotes = ({ onSubmitNotes }) => {
  const [title, settitle] = useState("")
  const [body, setbody] = useState("")
  const onSubmit = () => {
    onSubmitNotes({
      id: Math.floor(Math.random() * 10000) + new Date().toISOString(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    },)
  }
  return <div className="p-4 px-6 border-2 rounded-lg flex flex-col gap-4">
    <input value={title} onChange={(e) => settitle(e.target.value)} className="focus:outline-none text-2xl font-semibold" type="text" placeholder="Title" />
    <textarea value={body} onChange={(e) => setbody(e.target.value)} placeholder="Write some notes" className="w-full focus:outline-none rounded-lg"></textarea>
    <button onClick={onSubmit} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" type="button">Add Note</button>
  </div>
}
export default InputNotes