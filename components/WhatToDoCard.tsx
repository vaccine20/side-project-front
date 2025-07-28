'use client'

import { Button } from "@mui/material";
import WhatToDoList from "./WhatToDoList";
import WhatToDoTitle from "./WhatToDoTitle";
import WhatToDoFooter from "./WhatToDoFooter";

const WhatToDoCard = () => {

  return (
    <div className="w-[48rem] h-[40rem] flex flex-col justify-between bg-gradient-to-b from-green-100 to-pink-50 rounded-2xl shadow-xl p-4">
      <WhatToDoTitle />
      <div className="flex items-center justify-end">
        <Button variant="contained">추가</Button>
      </div>
      <WhatToDoList />
      <WhatToDoFooter />
    </div>
  )
}

export default WhatToDoCard;