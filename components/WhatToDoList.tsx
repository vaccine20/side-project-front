'use client'

import { Button } from "@mui/material";
import WhatToDoFooter from "./WhatToDoFooter";
import WhatToDoItem from "./WhatToDoItem";

const WhatToDoList = () => {

  return (
    <div className="h-[22rem] overflow-y-auto custom-scroll">
      <WhatToDoItem />
      <WhatToDoItem />
      
    </div>
  )
}

export default WhatToDoList;