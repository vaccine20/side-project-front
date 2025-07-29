'use client'

import { Checkbox, TextField, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { toDoListType } from "@/utils/todolistType";
import useTodolistStore from "@/utils/useStore";
import { useState } from "react";


const WhatToDoItem = ({id, title} : toDoListType) => {

  const {
    todolist,
    selectedList,
    toggleSelected,
    updateTodo
  } = useTodolistStore();

  const [editedTitle, setEditedTitle] = useState(title);

  const handleBlur = () => {
    if (editedTitle !== title) {
      updateTodo(id, editedTitle);
    }
  }

  return (
    <div className="flex justify-between items-center h-12 text-xl">
      <div className="flex justify-between items-center w-full gap-2 px-1">
        {/* 할일 제목 */}
        <div className="flex items-center w-full">
          <Checkbox 
            checked={selectedList.includes(id)}
            onChange={() => toggleSelected(id)}
          />
          <TextField
            variant="outlined"
            className="w-full"
            size="small"
            placeholder="Please Enter a task."
            onBlur={handleBlur}
            onChange={e => setEditedTitle(e.target.value)}
            value={editedTitle}
          />
        </div>
        {/* 개별 수정/삭제버튼 */}
        {/* <div className="flex justify-between items-center w-16 text-sm">
          <div>
            <IconButton aria-label="edit" size="small" color="primary">
              <EditIcon />
            </IconButton>
          </div>
          <div>
            <IconButton aria-label="delete" size="small" color="warning">
              <DeleteIcon />
            </IconButton>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default WhatToDoItem;