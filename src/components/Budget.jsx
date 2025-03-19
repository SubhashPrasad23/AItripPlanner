import React from 'react'
import Card from './Card'

const Budget = ({ budgetBreakdownEstimate }) => {
    console.log(budgetBreakdownEstimate)
  return (
      <div className="w-full space-y-6">
          {budgetBreakdownEstimate && Object.entries(budgetBreakdownEstimate).map(([heading, content], index) =>

              (<Card key={index} budgetHeading={heading} content={content} />))

          }
      </div>
  )
}

export default Budget