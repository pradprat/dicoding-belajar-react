
const Note = () => {
  return <div className="flex flex-col border-2 rounded-lg w-60 h-40 p-2">
    <div className="text-2xl font-semibold">Title</div>
    <div className="text-sm text-gray-400">Date</div>
    {/* content */}
    <div className="text-md">Content</div>
  </div>
}

export default Note