import Note from "./note"

const NotesList = ({ title, notes, onDeleteNote, onMoveNote }) => {
  return <div className="flex flex-col gap-4">
    <div className="text-xl font-bold text-center">{title}</div>
    <div className="px-6 flex gap-4 flex-wrap justify-center">
      {notes && notes.length > 0 && notes.map((note) => {
        return <Note key={note.id} {...note} onDeleteNote={onDeleteNote} onMoveNote={onMoveNote} />
      }) || <div className="text-gray-500 text-center">No notes</div>}
    </div>
  </div>
}

export default NotesList