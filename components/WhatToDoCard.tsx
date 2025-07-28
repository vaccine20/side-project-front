'use client'

import { Button } from "@mui/material";
import WhatToDoList from "./WhatToDoList";
import WhatToDoTitle from "./WhatToDoTitle";
import WhatToDoFooter from "./WhatToDoFooter";
import axios from "axios";
import { useEffect, useState } from "react";

type ToDoListType = {
  id : string
  title : string
  check_status : boolean
  created_at : string
  updated_at : string
}

const WhatToDoCard = () => {
  
  const [listData, setListData] = useState<ToDoListType[]>([]);

  const addItem = {
    id : crypto.randomUUID(),
    title : '',
    check_status : false,
    created_at : new Date().toISOString(),
    updated_at : new Date().toISOString()
  }

  const handleAdd = () => {
    axios.post('http://localhost:8000/createList', addItem)
      .then(res => {
        if (res.data.result == '성공')
          setListData(prev => [...prev, addItem])
      })
      .catch(err => {
        console.log('error ====> ', err);
      })
  }

  useEffect(() => {
    axios.get('http://localhost:8000/getList')
      .then(res => {
        setListData(res.data);
      })
      .catch(err => {
        console.log('error ====> ', err);
      })
  }, [])

  return (
    <div className="w-[48rem] h-[40rem] flex flex-col justify-between bg-gradient-to-b from-green-100 to-pink-50 rounded-2xl shadow-xl p-4">
      <WhatToDoTitle />
      <div className="flex items-center justify-end">
        <Button variant="outlined" onClick={handleAdd}>추가</Button>
      </div>
      <WhatToDoList listData={listData} />
      <WhatToDoFooter />
    </div>
  )
}

export default WhatToDoCard;