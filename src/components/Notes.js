import React from 'react'

export const Notes = ({notes}) => {
  return (
    <ul className="list-group">
      {
        notes.map((note) => {
          return <li
            className="list-group-item note"
            key={note.id}
          >
            <div>
              <strong>{note.title}</strong><small>{new Date().toLocaleDateString()}</small>
            </div>
            <button
              type="button"
              className="btn btn-danger btn-sm del-btn"
            >&times;</button>
          </li>
        })
      }
    </ul>
  )
}