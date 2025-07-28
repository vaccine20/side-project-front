'use client'

import Button from '@mui/material/Button';

const WhatToDoFooter = () => {

  return (
    <div className="flex items-center justify-around h-24">
      <div>
        <Button variant="contained">저장</Button>
      </div>
      <div>
        <Button variant="contained" >선택 삭제</Button>
      </div>
    </div>
  )
}

export default WhatToDoFooter;