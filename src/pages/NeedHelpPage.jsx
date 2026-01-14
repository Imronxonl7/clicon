import React, { memo } from 'react'

const NeedHelp = () => {
  return (
    <section>
      <div className="container mx-auto px-5">
        NeedHelp
      </div>
    </section>
  )
}



const NeedHelpMemo = memo(NeedHelp)
export default NeedHelpMemo