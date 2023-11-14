
const Note = ({
  id,
  title,
  body,
  archived,
  createdAt,
  onDeleteNote,
  onMoveNote,
}) => {
  const moveText = archived ? "Unarchive" : "Archive"
  return <div className="flex flex-col border-2 rounded-lg w-60 min-h-40 p-2">
    <div className="flex-1">
      <div className="text-2xl font-semibold">{title}</div>
      <div className="text-sm text-gray-400">{new Date(createdAt).toLocaleString()}</div>
      {/* content */}
      <div className="text-md">{body}</div>
    </div>
    <div className="flex gap-2">
      <button onClick={() => onDeleteNote(id)} className="bg-gray-500 hover:bg-gray-700 text-white rounded-lg px-2 py-1 flex-1">Delete</button>
      <button onClick={() => onMoveNote(id)} className="bg-green-500 hover:bg-gray-700 text-white rounded-lg px-2 py-1 flex-1">{moveText}</button>
    </div>
  </div>
}

export default Note