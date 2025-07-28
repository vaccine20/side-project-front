'use client'

import { Checkbox, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

type ToDoListProps = {
  id : string
  title : string
  check_status : boolean
  created_at : string
  updated_at : string
}

const WhatToDoItem = (props : ToDoListProps) => {

  return (
    <div className="flex justify-between items-center h-12 text-xl">
      <div className="flex justify-between items-center w-full gap-2 px-1">
        {/* 할일 제목 */}
        <div className="flex items-center w-full">
          <Checkbox />
          <TextField
            variant="outlined"
            className="w-full"
            size="small"
            placeholder="Please Enter a task."
          />
        </div>
        {/* 수정/삭제버튼 */}
        <div className="flex justify-between items-center w-16 text-sm">
          <div>
            <EditIcon sx={{ ':hover': {color: 'blue', cursor: 'pointer'} }} />
          </div>
          <div>
            <DeleteIcon sx={{":hover": {color : 'red', cursor: 'pointer'} }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatToDoItem;