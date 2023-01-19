import './App.css'
import data from './data.js'

import Header from './components/Header'
import JournalEntry from './components/JournalEntry'

function App() {
  return (
    <div className="App">
      <Header />

      { data.map((entry) => {
        return (
          <JournalEntry
            title={entry.title}
            location={entry.location}
            link={entry.googleMapsUrl}
            startDate={entry.startDate}
            endDate={entry.endDate}
            desc={entry.description}
            imageUrl={entry.imageUrl}
          />
        )
      })}
    </div>
  )
}

export default App
