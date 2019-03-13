import React from 'react'

import { TabsWrapper, TabHeading, TabsHeadings } from './styles'

const Tabs = ({ value, children }) => {
  const [activeTab, setActiveTab] = React.useState(
    value
      || (children.constructor === Array
        ? children[0].props.label
        : children.props.label),
  )

  return (
    <TabsWrapper>
      <TabsHeadings>
        {children.constructor === Array ? (
          children.map(child => (
            <TabHeading
              onClick={() => setActiveTab(child.props.label)}
              key={child.props.label}
              activeTab={activeTab === child.props.label}
            >
              {child.props.label}
            </TabHeading>
          ))
        ) : (
          <TabHeading
            onClick={() => setActiveTab(children.props.label)}
            key={children.props.label}
          >
            {children.props.label}
          </TabHeading>
        )}
      </TabsHeadings>
      {children.constructor === Array
        ? children.map(child => (child.props.label !== activeTab ? undefined : child))
        : children}
    </TabsWrapper>
  )
}

export default Tabs
