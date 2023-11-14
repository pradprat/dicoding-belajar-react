import ActiveNotes from "./components/notesList"
import InputNotes from "./components/inputNotes"
import { useEffect, useMemo, useState } from "react"
import { initialData } from "./utils/data"

function App() {
  const [searchText, setsearchText] = useState("")
  const [notes, setnotes] = useState(initialData)
  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      return note.title.toLowerCase().includes(searchText.toLowerCase())
    })
  }, [searchText, notes])
  const onSubmitNotes = (note) => {
    setnotes([...notes, note])
  }
  const activeNotes = filteredNotes.filter((note) => !note.archived)
  const archivedNotes = filteredNotes.filter((note) => note.archived)
  const onDeleteNote = (id) => {
    setnotes(notes.filter((note) => note.id !== id))
  }
  const onMoveNote = (id) => {
    setnotes(
      notes.map((note) => {
        if (note.id === id) {
          return { ...note, archived: !note.archived }
        }
        return note
      })
    )
  }
  return (
    <div className="max-w-4xl m-auto p-8 pt-16 flex flex-col gap-8 items-center">
      <div className="max-w-lg flex flex-col gap-4">
        <div className="text-xl font-bold text-center">Add Notes</div>
        <InputNotes onSubmitNotes={onSubmitNotes} />
      </div>
      <div className="border-2 p-2 rounded-md flex items-center gap-2">
        <img className="w-5 h-5" src="https://cdn.iconscout.com/icon/free/png-512/free-search-1767866-1502119.png?f=webp&w=256" alt="" />
        <input placeholder="Search Notes..." value={searchText} onChange={(e) => setsearchText(e.target.value)} className="focus:outline-none"></input>
      </div>
      <ActiveNotes notes={activeNotes} title={"Active Notes"} onDeleteNote={onDeleteNote} onMoveNote={onMoveNote} />
      <ActiveNotes notes={archivedNotes} title={"Archived Notes"} onDeleteNote={onDeleteNote} onMoveNote={onMoveNote} />
    </div>
  )
}

export default App
