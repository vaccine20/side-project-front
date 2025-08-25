'use client'

import { Button, TextField } from "@mui/material";
import WhatToDoTitle from "./WhatToDoTitle";
import axios from "axios";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import WhatToDoItem from "./WhatToDoItem";
import useTodolistStore from "@/utils/useStore";

const WhatToDoCard = () => {
  
  const { 
    todolist,
    addTodolist,
    setTodolist,
    selectedList,
    clearSelectedList
  } = useTodolistStore();
  
  const [addTitle, setAddTitle] = useState('');

  const handleAdd = () => {

    if (!addTitle.trim()) {
      setAddTitle('');
      alert('할 일을 입력해주세요!');
      return;
    }

    const newItem = {
      id : crypto.randomUUID(),
      title : addTitle
    }

    axios.post('http://localhost:8000/createList', newItem)
      .then(res => {
        if (res.data.result == '성공') {
          addTodolist(newItem);
          setAddTitle('');
        } else {
          alert('에러가 발생하였습니다.');
        }
      })
      .catch(err => {
        console.log('error ====> ', err);
      })
  }

  const handleSave = () => {
    axios.post('http://localhost:8000/updateList', todolist)
      .then(res => {
        if (res.data.result == '성공') {
          alert('저장 성공!');
        } else {
          alert('에러가 발생하였습니다.');
        }
      })
      .catch(err => {
        console.log('error ====> ', err);
      })
  }

  const handleDelete = () => {

    if (selectedList.length == 0) {
      alert('삭제할 항목을 선택해주세요!');
      return;
    }

    axios.post('http://localhost:8000/deleteList', selectedList)
      .then(res => {
        if (res.data.result == '성공') {
          getTodolist();
          clearSelectedList();
        } else {
          alert('에러가 발생하였습니다.');
        }
      })
      .catch(err => {
        console.log('error ====> ', err);
      })
  }

  const getTodolist = () => {
    axios.get('http://localhost:8000/getList')
      .then(res => {
        setTodolist(res.data);
      })
      .catch(err => {
        console.log('error ====> ', err);
      })
  }

  useEffect(() => {
    getTodolist();
  }, [])

  return (
    <div className="w-[48rem] h-[40rem] flex flex-col justify-between bg-gradient-to-b from-green-100 to-pink-50 rounded-2xl shadow-xl p-4">
      <WhatToDoTitle />
      <div className="flex justify-between items-center h-12 text-xl w-full gap-2 px-1">
        <TextField
          variant="outlined"
          className="w-full"
          size="small"
          placeholder="할 일을 입력하고 추가 버튼을 눌러주세요."
          onChange={e => setAddTitle(e.target.value)}
          value={addTitle}
        />
        <Button variant="contained" color="success" onClick={handleAdd}>추가</Button>
      </div>
      <div className="h-[22rem] overflow-y-auto custom-scroll">
        {
          todolist.map((item) => (
            <WhatToDoItem key={item.id} {...item} />
          ))
        }
      </div>
      <div className="flex items-center justify-center gap-4 h-24">
        <div>
          <Button variant="outlined" onClick={handleSave}>저장</Button>
        </div>
        <div>
          <Button variant="outlined" color='error' onClick={handleDelete}>선택 삭제</Button>
        </div>
      </div>
    </div>
  )
}

export default WhatToDoCard;