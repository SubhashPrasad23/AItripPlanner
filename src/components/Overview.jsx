import React from 'react'
import Card from './Card'

const Overview = ({ overviewData }) => {
  return (
      <div className="grid grid-cols-1 gap-6">
          {overviewData && Object.entries(overviewData).map(([heading, content], index) => (
              <Card key={index} heading={heading} content={content} />
          ))}

      </div>
  )
}

export default Overview