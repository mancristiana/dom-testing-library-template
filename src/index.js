import React from 'react'

function Collapsible({children}) {
  const [isCollapsed, setIsCollapsed] = React.useState(true)
  return (
    <div>
      <button onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? "Expand" : "Collapse"}
      </button>
      <div
        aria-hidden={isCollapsed}
        className={isCollapsed ? "hide" : "show"}
      >
        {children}
      </div>
    </div>
  )
}

export default Collapsible