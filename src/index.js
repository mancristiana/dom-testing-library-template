import React from 'react'

function Collapsible({children}) {
  const [isCollapsed, setIsCollapsed] = React.useState(true)
  return (
    <div>
      <button onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? "Expand" : "Collapse"}
      </button>
      <p
        aria-hidden={isCollapsed}
        className={isCollapsed ? "hide" : "show"}
      >
        {children}
      </p>
    </div>
  )
}

export default Collapsible