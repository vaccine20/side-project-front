'use client'

import { Button } from "@mui/material";
import WhatToDoFooter from "./WhatToDoFooter";
import WhatToDoItem from "./WhatToDoItem";

type ToDoListProps = {
  id : string
  title : string
  check_status : boolean
  created_at : string
  updated_at : string
}

type propsArray = {
  listData : ToDoListProps[]
}

const WhatToDoList = ( {listData} : propsArray ) => {

  return (
    <div className="h-[22rem] overflow-y-auto custom-scroll">
      {
        listData.map((item) => (
          <WhatToDoItem key={item.id} {...item} />
        ))
      }
    </div>
  )
}

export default WhatToDoList;