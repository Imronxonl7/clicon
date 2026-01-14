import React, { memo } from 'react'

const ComparePage = () => {
  return (
    <section>
      <div className="container mx-auto px-5">
        Compare
      </div>
    </section>
  )
}
const ComparePageMemo = memo(ComparePage)
export default ComparePageMemo