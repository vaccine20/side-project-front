'use client'

import WhatToDoList from "./WhatToDoList";
import WhatToDoTitle from "./WhatToDoTitle";

const WhatToDoCard = () => {

  return (
    <div className="w-[48rem] h-[44rem] bg-gradient-to-b from-green-100 to-pink-50 rounded-2xl shadow-xl p-8">
      <WhatToDoTitle />
      <WhatToDoList />
    </div>
  )
}

export default WhatToDoCard;