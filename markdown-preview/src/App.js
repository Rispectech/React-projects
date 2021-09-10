import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdown, setMarkdown] = useState('# Markdown Preview')

  return (
    <main>
      <section className='markdown'>
        <textarea
          input='text'
          value={markdown}
          onChange={(e) => setMarkdown(e.current.value)}
        ></textarea>
        <section className='result'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </section>
      </section>
    </main>
  )
}
export default App
