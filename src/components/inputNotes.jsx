import { useState } from "react"

const InputNotes = ({ onSubmitNotes }) => {
  const MAX_LENGTH = 30
  const [title, settitle] = useState("")
  const isExceed = title.length > MAX_LENGTH
  const [body, setbody] = useState("")
  const onSubmit = () => {
    if (title.length === 0 || body.length === 0) {
      return
    }
    if (isExceed) {
      return
    }
    onSubmitNotes({
      id: Math.floor(Math.random() * 10000) + new Date().toISOString(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    })
    settitle("")
    setbody("")
  }
  return <div className="p-4 px-6 border-2 rounded-lg flex flex-col gap-4">
    <div className="flex flex-col">
      <input value={title} onChange={(e) => settitle(e.target.value)} className={
        "focus:outline-none text-2xl font-semibold" + (isExceed ? " text-red-500" : "")
      } type="text" placeholder="Title" />
      <div className="text-gray-500 text-xs self-end">Character left : {MAX_LENGTH - title.length}</div>
    </div>
    <textarea value={body} onChange={(e) => setbody(e.target.value)} placeholder="Write some notes" className="w-full focus:outline-none rounded-lg"></textarea>
    <button onClick={onSubmit} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" type="button">Add Note</button>
  </div>
}
export default InputNotes