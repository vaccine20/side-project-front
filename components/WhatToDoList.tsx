'use client'

import WhatToDoItem from "./WhatToDoItem";

const WhatToDoList = () => {

  return (
    <div>
      <div className="flex items-center justify-end h-8 font-bold text-xs mb-4">
        made by... Cloud Lee & Dragon Kim
      </div>
      <WhatToDoItem />
      <WhatToDoItem />
      <WhatToDoItem />
      <WhatToDoItem />
      <WhatToDoItem />
      <WhatToDoItem />
      <div className="flex items-center justify-around font-bold mb-4">
        <div>
          버튼1
        </div>
        <div>
          버튼2
        </div>
      </div>
    </div>
  )
}

export default WhatToDoList;