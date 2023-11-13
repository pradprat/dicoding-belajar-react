import InputNotes from "./components/inputNotes"
import Note from "./components/note"

function App() {
  return (
    <div className="max-w-4xl m-auto p-8 pt-16 flex flex-col gap-8 items-center">
      <div className="max-w-lg flex flex-col gap-4">
        <div className="text-xl font-bold text-center">Add Notes</div>
        <InputNotes />
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-xl font-bold text-center">Active Notes</div>
        <div className="px-6 flex gap-4 flex-wrap justify-center">
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
        </div>

      </div>
    </div>
  )
}

export default App
