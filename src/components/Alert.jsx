import React from 'react'

export const Alert = ({alert}) => {

  if (!alert) {
    return null
  }

  return (
    <div className={`alert alert-${alert.type || `warning`} alert-dismissible`}>
      <strong>Attention!</strong>
      {alert.text}
      <button type="button" className="close" aria-label="Close">&times;</button>
    </div>
  )
}
