function App() {
  return (
    <div className="max-w-xl m-auto p-4 flex flex-col gap-4">
      <div className="text-xl font-bold text-center">Add Notes</div>
      <div className="p-4 px-6 border-2 rounded-lg flex flex-col gap-4">
        <input className="focus:outline-none text-2xl font-semibold" type="text" placeholder="Title" />
        <textarea placeholder="Write some notes" className="w-full focus:outline-none rounded-lg"></textarea>
      </div>
    </div>
  )
}

export default App
